import React, { useEffect } from "react"
import Pagination from ".."
import "../style"

export default () => {
    const handleChangeSimple =(val) =>{
      console.log('handleChangeSimple', val)
    }
    const handleChangeDefault =(val) =>{
      console.log('handleChangeDefault', val)
    }
    return (
        <>
            <Pagination
                type="simple"
                total={35}
                showJumpInput
                onChange={handleChangeSimple}
                style={{ margin: 10 }}
            />
            <Pagination
                total={35}
                showJumpInput
                showTotal
                showSizerSelect
                onChange={handleChangeDefault}
                style={{ margin: 10 }}
            />
        </>
    )
}
