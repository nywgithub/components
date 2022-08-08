import React, { useEffect } from "react"
import Pagination from ".."
import "../style"

export default () => {
    return(
      <Pagination type="simple" total={20} showJumpInput showTotal showSizerSelect/>
    )
}
