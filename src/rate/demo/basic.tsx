import React, { useEffect, useState } from "react"
import Rate from ".."
import "../style"
import "./basic.less"

export default () => {
    const list = [
        "Responsiveness",
        "Customer Service",
        "Items As Described",
        "Delivery Time",
    ]
    const handleClickSpecial = (...arg) => {
        console.log(arguments)
        console.log([...arg])
    }
    const [defaultValue, setDefaultValue] = useState([0, 0, 1, 1])
    return (
        <>
            {/* <Rate /> */}
            {list.map((item, index) => (
                <div key={index} className="finger-wrap">
                    <span>{item}</span>
                    <Rate.FingerRate
                        defaultValue={defaultValue[index]}
                        onClick={handleClickSpecial}
                        character={[
                            <span className="ob-icon icon-thumb-up-review">
                                +
                            </span>,
                            <span className="ob-icon icon-thumb-down-review">
                                -
                            </span>,
                        ]}
                    ></Rate.FingerRate>
                </div>
            ))}
            <div className="finger-wrap special" style={{ marginTop: 10 }}>
                <span>SPECIAL</span>
                <Rate.FingerRate
                    defaultValue={false}
                    character={[
                        <span className="ob-icon icon-thumb-up-review">
                            yes
                        </span>,
                        <span className="ob-icon icon-thumb-down-review">
                            no
                        </span>,
                        <span className="ob-icon icon-thumb-down-review">
                            any
                        </span>,
                    ]}
                    onClick={handleClickSpecial}
                ></Rate.FingerRate>
            </div>
        </>
    )
}
