import { useEffect, useState } from "react";
import style from "./Clock.module.css";

function Clock (props) {
    const [currentTime, setCurrentTime] = useState();

    useEffect(() => {
        setInterval(() => {
            setCurrentTime(() => {
                const newDate = new Date();
                return newDate.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
            });
        }, 1000)
    })

    return (
        <div className={`${style.clockBorders} ${props.className ? props.className:""}`}>
            <h1>{currentTime}</h1>
        </div>
    )
}

export default Clock;