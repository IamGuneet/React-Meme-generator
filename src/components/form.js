import React from "react"
// import dataObj from "../Data/memeData"

export default function Form() {

    const [formData,setFormData] = React.useState(
        {firstName:"",lastName:""}
    );
    console.log(formData);
    
    const[randomNumber,setRandomNumber]= React.useState(0);
    
    const [url,setUrl] = React.useState("") 
    
        React.useEffect(()=>{
            fetch(`https://api.imgflip.com/get_memes`)
            .then(res => res.json())
            .then(obj => setUrl(obj.data.memes[randomNumber].url))
        },[randomNumber])


    // const memeFunc = dataObj()
    // const memeArray = memeFunc.data.memes 
    
    function handleChange(e){
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [e.target.name]: e.target.value
            }
        })
        console.log(e.target.name);
    }


    function getRandomMeme(){
        const randNumber = Math.floor(Math.random() *99);
        // console.log(randNumber);
        setRandomNumber(randNumber);
        // setUrl(memeArray[randomNumber].url);
    }

    return (
        
        <div className="memeDiv" >

            <div className="form">

                <input className="formInput" 
                type="text"
                onChange={handleChange}
                placeholder="Top text"
                name="firstName"      
                value={formData.firstName}
                />

                <input className="formInput"
                type="text"
                onChange={handleChange}
                placeholder="Bottom text"
                name="lastName"
                value={formData.lastName}
                />

                <button onClick={getRandomMeme} className="formButton">Get a new Meme</button>
            </div>

                <div className="memeContainer">
                <img src={url} alt="meme" className="memeImg"/>
                <h1 className="meme-topText">{formData.firstName} </h1>
                <h1 className="meme-bottomText">{formData.lastName}</h1>
                
                </div>
                
        </div>
    )
    
};
