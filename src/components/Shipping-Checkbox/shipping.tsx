import react from "react"
import {Div} from "./styled"
import { InputHTMLAttributes } from "react"

interface Inputprops extends InputHTMLAttributes<HTMLInputElement>{
    title: string;
    time: string;
}

export const ShippingBox = ({title, time, ...rest}:Inputprops)=>{
    return (
        <Div>
            <input type="checkbox"  />
            <div>
                {title && <p id="title">{title}</p>}
                {time && <p id="time">{time}</p>}
            </div>

        </Div>
    )
}