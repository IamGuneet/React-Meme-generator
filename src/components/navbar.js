import Albert from "../imgs/Albert.png"
import React from "react"
import hehe from "../imgs/hehehe.png"

export default function Navbar() {
    
    const [url,setUrl] = React.useState(true)

        function ChangeUrl(){
            setUrl((preValue)=> !preValue)
        }

    return (
        <div className="navbar">
            <img onClick={ChangeUrl} src={url? Albert:hehe} alt="Img" className="logo"/>
            <h1>Meme Generator</h1>
        
        </div>
    )
    
};
