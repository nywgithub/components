import React, { createRef, LegacyRef } from 'react'
import RcUpload from 'rc-upload'
import { RcFile, UploadProps as RCUploadProps } from 'rc-upload/lib/interface'
import { isMobilePlatform } from '../util/platFrom'
import './style'
export interface UploadState {
  accept: string
  imgList: string[] //上传图片后列表
  fileSize: number //文件大小
  // loading: boolean   //加载效果
  message: {
    size?: string
    same?: string
    format?: string
  }
  max: number
  ffsid: string[]
  titleList: string[]
}
export interface UploadProps extends RCUploadProps {
  size?: number // 限制的大小
  //   loading?: boolean //是否出现加载效果
  max?: number //文件最大数量限制
  errorMessage?: {
    size?: string
    same?: string
    format?: string
  }
  defaultImg?: string[]
  defaultFFsid?: string[]
  defaultTitle?: string[]
}
const duration = 3000

//TODO: “ || ”可以改成defaultProps写法 不止图片
class Upload extends React.Component<UploadProps, UploadState> {
  uploadRef: LegacyRef<RcUpload> | undefined
  constructor(props: UploadProps) {
    super(props)
    const {
      accept,
      size,
      errorMessage,
      max,
      defaultImg,
      defaultTitle,
      defaultFFsid,
    } = this.props
    // console.log('defaultImg', defaultImg || [])
    this.uploadRef = createRef()
    this.state = {
      imgList: defaultImg || [],
      titleList: defaultTitle || [],
      accept: accept || '.jpg,.JPG,.jpeg,.JPEG,.png,.PNG,.bmp,.BMP',
      fileSize: size || 5,
      //   loading: false,
      message: errorMessage || {
        size: 'Each image shouldn’t exceed 5M.',
        same: 'You have already uploaded this image.',
        format: 'Please upload images as JPG, JPEG, PNG and BMP.',
      },
      max: max || 5,
      ffsid: defaultFFsid || [],
    }
  }
  //异步获取的prop数据，需要在componentDidUpdate中给值
  componentDidUpdate(prevProps: UploadProps) {
    if (
      JSON.stringify(prevProps.defaultImg) !==
      JSON.stringify(this.props.defaultImg)
    ) {
      this.setState({
        imgList: this.props.defaultImg as string[],
      })
    }
    if (
      JSON.stringify(prevProps.defaultFFsid) !==
      JSON.stringify(this.props.defaultFFsid)
    ) {
      this.setState({
        ffsid: this.props.defaultFFsid as string[],
      })
    }
  }
  warning(mes: string) {
    console.log(mes)
  }
  async beforeUpload(file: RcFile, FileList: RcFile[]) {
    const { accept, fileSize, message, max, imgList } = this.state
    const { size, name } = file
    if (this.props.beforeUpload) {
      return this.props.beforeUpload(file, FileList)
    }
    var before = new Promise((resolve, reject) => {
      let index = name.lastIndexOf('.')
      let typeArry = accept.split(',')
      let suffer = (name as string).substring(index, name.length)

      if (typeArry.indexOf(suffer) < 0) {
        message.format && this.warning(message.format)
        // this.uploadRef.current?.abort({ ...file })
        reject(message.format)
      }
      if (size / 1024 / 1024 > fileSize) {
        message.size && this.warning(message.size)
        reject(message.size)
      }
      //图片总数
      if (imgList.length + FileList.length >= max) {
        reject(max)
      }
      resolve(file)
    })
    await before
  }
  onError(error: any, ret: Record<string, unknown>, file: RcFile) {
    console.log(error)
  }
  onSuccess(response: any, file: RcFile, xhr: any) {
    if (this.props.onSuccess) {
      return this.props.onSuccess(response, file, xhr)
    }
    //成功时观察max文件上传上限
    const { max } = this.state
    if (response.code === '0' || response.code === 0) {
      let data: any = []

      data = response.data
      let imgList = this.state.imgList
      imgList.length < max && imgList.push(data.picUrl) //此处为接口返回图片地址
      let ffsidList = this.state.ffsid
      ffsidList.length < max && ffsidList.push(data.picId)
      let titleList = this.state.titleList
      titleList.length < max && titleList.push(data.picName)
      this.setState({
        imgList,
        titleList,
        ffsid: ffsidList,
      })
    }
  }
  deleteImg(e: React.MouseEvent<HTMLElement, MouseEvent>, index: number) {
    e.preventDefault()
    let imgList = this.state.imgList
    imgList.splice(index, 1)
    let ffsidList = this.state.ffsid
    ffsidList.splice(index, 1)
    let titleList = this.state.titleList
    titleList.splice(index, 1)
    this.setState({
      imgList,
      titleList,
      ffsid: ffsidList,
    })
  }
  render(): React.ReactNode {
    const { imgList, titleList } = this.state
    const imgs = imgList.map((item: string, index: number) => {
      return (
        <li key={index}>
          <div className="img-area-upload">
            <i
              onClick={(e) => {
                this.deleteImg(e, index)
              }}
              className="ob-icon icon-delete"
            ></i>
            <img src={item} />
          </div>
        </li>
      )
    })
    const titles = titleList.map((item: string, index: number) => {
      return (
        <li key={index}>
          <i
            onClick={(e) => {
              this.deleteImg(e, index)
            }}
            className="ob-icon icon-delete"
          ></i>
          <span>{item}</span>
        </li>
      )
    })
    const uploadArea = (
      <RcUpload
        ref={this.uploadRef}
        // data={(file) => {
        //   return {
        //     picId: this.state.ffsid.join(','),
        //   }
        // }}
        {...this.props}
        onError={this.onError}
        beforeUpload={(file, fileList) => this.beforeUpload(file, fileList)}
        onSuccess={(response, file, xhr) => {
          this.onSuccess(response, file, xhr)
        }}
      >
        {!isMobilePlatform ? (
          <div className="upload-area">
            <i className="ft-icon icon-attachment"></i>
            Upload images
            <span>({imgList.length}/5)</span>
          </div>
        ) : (
          <div className="custom-add-icon"></div>
        )}
      </RcUpload>
    )
    return (
      <div className="review-upload-wrap">
        {isMobilePlatform && (
          <ul className="img-list">
            {isMobilePlatform ? imgs : titles}
            <li>{this.state.imgList.length < 5 && uploadArea}</li>
          </ul>
        )}

        {!isMobilePlatform && (
          <React.Fragment>
            {uploadArea}
            <ul className="img-list">{isMobilePlatform ? imgs : titles}</ul>
          </React.Fragment>
        )}
      </div>
    )
  }
}

export default Upload
