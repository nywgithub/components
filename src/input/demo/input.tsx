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
  return (
    <>
      <Input></Input>
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
