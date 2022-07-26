import React from "react";
import "./meme.css"
import {Memy} from "./memes"
import {useState} from "react"

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
    } 

    


function Meme(){
    const [image,setImage]=useState("non");
    const [firstText,setFirstText]=useState('');
    const [seccondText,setSeccondText]=useState('');
    const [text,setText]=useState(['',''])

function Create_text()
{
    setText(elem=>[firstText, seccondText])
}
    
return(
    <main>
        <div className="input">
            <input type="text" placeholder="Wpisz tekst u góry" onChange={elem=>setFirstText(elem.target.value)}></input>
            <input type="text" placeholder="Wpisz tekst u dołu" onChange={elem=>setSeccondText(elem.target.value)}></input>
        </div>
        <button className="buttom" onClick={()=>setImage(Memy.data.memes[getRndInteger(0,1)])}>Zmień obrazek!</button>
        <button className="buttom" onClick={()=>Create_text()}>Generuj Mem!</button>
        <div className="meme-element">
            {text[0]!==''&&<p className="meme-text-top">{text[0]}</p>}
            {image!=="non"&&<img src={image.url} alt="meme" width={image.width} height={image.height} className="meme"></img>}
            {text[1]!==''&&<p className="meme-text-bottom">{text[1]}</p>}
        </div>
    </main>

)
}

export{Meme}