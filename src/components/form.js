import React from "react"

export default function Form() {

    const [formData,setFormData] = React.useState(
        {firstName:"",lastName:""}
    );
    
    const[randomNumber,setRandomNumber]= React.useState(0);
    
    const [url,setUrl] = React.useState("") 
    
        React.useEffect(()=>{
    
            fetch(`https://api.imgflip.com/get_memes`)
            .then(res => res.json())
            .then(obj => setUrl(obj.data.memes[randomNumber].url))
    
        },[randomNumber])


    
    function handleChange(e){
    
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [e.target.name]: e.target.value
            }
        })
    
    }


    function getRandomMeme(){

        const randNumber = Math.floor(Math.random() *99);
        setRandomNumber(randNumber);

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
