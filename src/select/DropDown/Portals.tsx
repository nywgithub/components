import React, {useEffect} from "react"
import ReactDOM from 'react-dom'
import {PortalsProps} from '../interface'

const Portals: React.FC<PortalsProps> = ({ container, children }) => {
    return container
        ? ReactDOM.createPortal(
              // Any valid React child: JSX, strings, arrays, etc.
              children,
              // A DOM element
              container
          )
        : null
}

export default Portals
