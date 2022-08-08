/*
 * @Author: niyongwei
 * @Date: 2022-03-24 15:39:29
 * @LastEditors: niyongwei
 * @LastEditTime: 2022-04-06 20:21:01
 * @FilePath: \components\src\input\index.tsx
 * @Description:
 *
 * Copyright (c) 2022 by nyw, All Rights Reserved.
 */

import Input from './input'
import InputNumber from './inputNumber'

export { InputProps } from './input'
export { InputNumberProps } from './inputNumber'

//@ts-ignore
Input.InputNumber = InputNumber

export default Input
