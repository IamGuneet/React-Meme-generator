import dataObj from "../Data/memeData"


export default function Form() {
    const memeFunc = dataObj()
    const memeArray = memeFunc.data.memes 

    function check(){
        console.log(memeArray);
    }
    return (
        <div >
            <div className="form">
                <input className="formInput" 
                type="text"
                placeholder="text"

                />
                <input  className="formInput"
                type="text"
                placeholder="text"
                />
                <button onClick={check} className="formButton">Get a new Meme</button>
            </div>
        </div>
    )
    
};
