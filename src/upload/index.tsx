import React, { createRef, LegacyRef } from 'react'
import Upload from 'rc-upload'
import { RcFile, UploadProps } from 'rc-upload/lib/interface'
import { isMobilePlatform } from '../util/platFrom'
export interface VuploadState {
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
export interface VuploadProps extends UploadProps {
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
class Vupload extends React.Component<VuploadProps, VuploadState> {
  uploadRef: LegacyRef<Upload> | undefined
  constructor(props: VuploadProps) {
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
  componentDidUpdate(prevProps:VuploadProps){
    // console.log('prevProps.defaultImg',prevProps.defaultImg)
    // console.log('this.props.defaultImg',this.props.defaultImg)
    if(JSON.stringify(prevProps.defaultImg) !== JSON.stringify(this.props.defaultImg)){
      this.setState({
        imgList:this.props.defaultImg as string[]
      })
    }
    if(JSON.stringify(prevProps.defaultFFsid) !== JSON.stringify(this.props.defaultFFsid)){
      this.setState({
        ffsid:this.props.defaultFFsid as string[]
      })
    }
  }
  warning(mes: string) {
    throw new Error(mes);
  }
  beforeUpload(file: any, FileList: any) {
    // console.log(file, FileList)
    const { accept, fileSize, message, max, imgList } = this.state
    const { size, name } = file
    this.props.beforeUpload && this.props.beforeUpload(file, FileList)
    // isWebView && alert('start')
    return new Promise((resolve, reject) => {
      let index = name.lastIndexOf('.')
      let typeArry = accept.split(',')
      let suffer = (name as string).substring(index, name.length)
      /* if(isWebView){
        alert(index)
        alert(typeArry)
        alert(suffer)
      } */
      if (typeArry.indexOf(suffer) < 0) {
        // isWebView && alert('judge')
        message.format && this.warning(message.format)
        // this.uploadRef.current?.abort({ ...file })
        //rc-upload抛出错误
        reject(message.format)
      }
      if (size / 1024 / 1024 > fileSize) {
        // isWebView && alert(fileSize)
        message.size && this.warning(message.size)
        //rc-upload抛出错误
        reject(message.size)
      }
      //图片总数
      if (imgList.length + FileList.length >= max) {
        //rc-upload抛出错误
        reject(max)
      }

      resolve(file)
    })
  }
  onError(error: any, ret: Record<string, unknown>, file: RcFile) {
    // console.log('error', error)
    // console.log('ret', ret)
    // console.log('file', file)
  }
  onSuccess(response: any, file: RcFile, xhr: any) {
    const {max} = this.state
    // console.log(response, file, xhr)
    if (response.code === '10010' || response.code === 10010) {
      this.warning('You have already uploaded this image.')
    }
    if (response.code === '10015' || response.code === 10015) {
      // console.warn('超过5张')
    }
    if (response.code === '0' || response.code === 0) {
      
      let data:any = []

      data = !isMobilePlatform ? response.data : response.content

      if (this.state.ffsid.includes[data.picId]) {
        this.warning('You have already uploaded this image.')
        return
      }
      let imgList = this.state.imgList
      imgList.length < max && imgList.push(data.picUrl) //此处为接口返回图片地址
      let ffsidList = this.state.ffsid
      ffsidList.length < max && ffsidList.push(data.picId)
      let titleList = this.state.titleList
      titleList.length < max && titleList.push(data.picName)
      this.setState(
        {
          imgList,
          titleList,
          ffsid: ffsidList,
        },
        () => {
          // console.log(this.state.imgList)
        },
      )
      this.props.onSuccess && this.props.onSuccess(response, file, xhr)
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
    this.setState(
      {
        imgList,
        titleList,
        ffsid: ffsidList,
      },
      () => {
        // console.log(this.state.imgList)
      },
    )
  }
  render(): React.ReactNode {
    const { imgList, titleList } = this.state
    // console.log('imgList',imgList,this.props.defaultImg)
    const imgs = imgList.map((item: string, index: number) => {
      return (
        <li key={index}>
          <div className="img-area-upload">
            {/* <div className="review-img-mask"></div> */}
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
    const uploadArea = <Upload
      ref={this.uploadRef}
      // data={(file) => {
      //   return {
      //     picId: this.state.ffsid.join(','),
      //   }
      // }}
      {...this.props}
      onError={this.onError}
      // @ts-ignore
      beforeUpload={(file, FileList) => {
        this.beforeUpload(file, FileList)
      }}
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
        <div className='custom-add-icon'></div>
      )}
    </Upload>
    return (
      <div className="review-upload-wrap">
        {isMobilePlatform && (
          <ul className="img-list">{isMobilePlatform ? imgs : titles}<li>{(this.state.imgList.length < 5) && uploadArea}</li></ul>
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

export default Vupload
