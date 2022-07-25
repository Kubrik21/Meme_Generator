import React from "react";
import "./meme.css"
import {Memy} from "./memes"
import {useState} from "react"

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
    } 

    


function Meme(){
    const [image,setImage]=useState("non");
    
return(
    <main>
        <div className="input">
            <input type="text" placeholder="Wpisz tekst u góry"></input>
            <input type="text" placeholder="Wpisz tekst u dołu"></input>
        </div>
        <button className="buttom" onClick={()=>setImage(Memy.data.memes[getRndInteger(0,1)])}>Generuj Mem!</button>
        {image!=="non"&&<img src={image.url} alt="meme" width={image.width} height={image.height} className="meme"></img>}
    </main>

)
}

export{Meme}