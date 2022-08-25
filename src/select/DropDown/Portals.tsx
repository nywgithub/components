import React, {useEffect} from "react"
import ReactDOM from 'react-dom'
import {PortalsProps} from '../interface'

const Portals: React.FC<PortalsProps> = ({ container, children }) => {
    const sourceNode = <div className="portals-wrapper">
        {children}
    </div>
    return container
        ? ReactDOM.createPortal(
              // Any valid React child: JSX, strings, arrays, etc.
              sourceNode,
              // A DOM element
              container
          )
        : null
}

export default Portals
