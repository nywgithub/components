/*
 * @Author: niyongwei
 * @Date: 2022-04-01 17:47:19
 * @LastEditors: niyongwei
 * @LastEditTime: 2022-04-01 17:54:25
 * @FilePath: \MICEN2_LV_2022.48\draw\demo.js
 * @Description: 
 * 
 * Copyright (c) 2022 by nyw, All Rights Reserved. 
 */
const withdrawLimit = 50000
const splitNumber = (number, max = false) => {
    let result = []
    let target = max || number
    const intRemainder = parseInt(target / withdrawLimit)
    const remainder = target % withdrawLimit
    for (let i = 0; i < intRemainder; i++) {
        result.push(withdrawLimit)
    }
    result.push(remainder)
    return result
}
console.log(splitNumber(120000))
console.log(splitNumber(120000,110000))