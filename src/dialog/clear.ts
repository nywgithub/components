import { closeFnSet } from "./open"

export const clear = () => {
    closeFnSet.forEach((close) => close())
}
