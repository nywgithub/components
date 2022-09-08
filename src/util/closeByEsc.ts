import { useEffect } from "react"

export default function closeByEsc(closeCallback: (e: KeyboardEvent) => void) {
    function onKeyUp(e: KeyboardEvent) {
        if (e.key === "Escape" || e.key === "Esc" || e.keyCode === 27) {
            closeCallback(e)
        }
    }
    document.body.addEventListener("keyup", onKeyUp)
}

export function useCloseByEsc(closeCallback: (e: KeyboardEvent) => void) {
    useEffect(() => {
        function onKeyUp(e: KeyboardEvent) {
            if (e.key === "Escape" || e.key === "Esc" || e.keyCode === 27) {
                closeCallback(e)
            }
        }
        document.body.addEventListener("keyup", onKeyUp)
        return () => {
            document.body.removeEventListener("keyup", onKeyUp)
        }
    }, [])
}
