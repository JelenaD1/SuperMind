import React from "react"
import video from "./cool.mp4"



const Logo = () => {
    return (
        <div>
            <video autoPlay loop muted
            style={{
                position: "absolute",
                width: "100%",
                left: "50%",
                top: "50%",
                height: "100%",
                objectFit: "cover",
                transform: "translate(-50%, -50%)",
                zIndex: -1
            }}
            width="750" 
            height="500" 
            controls >
                <source src={video} type="video/mp4"/>
            </video>
        </div>
    )
}

export default Logo