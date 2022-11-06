import dataObj from "../Data/memeData"
import React from "react"

export default function Form() {

    const [url,setUrl] = React.useState("https://i.imgflip.com/30b1gx.jpg") 

    const memeFunc = dataObj()
    const memeArray = memeFunc.data.memes 
    function getRandomMeme(){
        const randNumber = Math.floor(Math.random() *memeArray.length);
        console.log(randNumber);
        setUrl(memeArray[randNumber].url);
    }

    return (
        <div className="memeDiv" >
            <div className="form">
                <input className="formInput" 
                type="text"
                placeholder="Top text"

                />
                <input  className="formInput"
                type="text"
                placeholder="Bottom text"
                />
                <button onClick={getRandomMeme} className="formButton">Get a new Meme</button>
            </div>
                <img src={url} alt="meme" className="memeImg"/>
                
        </div>
    )
    
};
