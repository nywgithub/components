import React, { useEffect } from 'react'
import Input from '..'
// import InputNumber from '../inputNumber'
import '../style'
const { InputNumber } = Input
export default () => {
  const inputRef = React.createRef()
  useEffect(() => {
    console.log(inputRef)
  }, [])
  const handleChange = (e: any) => {
    console.log(e)
  }
  return (
    <>
      <Input
        onChange={handleChange}
        onPressEnter={() => {
          console.log('onPressEnter')
        }}
        onKeyDown={() => {
          console.log('onKeyDown')
        }}
        defaultValue={'默认值'}
        addonBefore={<span>前缀</span>}
        addonAfter={<span>后缀</span>}
        prefix={<span>prefix</span>}
        suffix={<span>suffix</span>}
        allowClear
      ></Input>
      <InputNumber
        ref={inputRef}
        min={-8000}
        max={10000000}
        addonBefore={<span>数量</span>}
        addonAfter={<span>个</span>}
      />
    </>
  )
}
