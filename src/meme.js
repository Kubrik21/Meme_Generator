import "./meme.css"
function Meme(){
return(
    <main>
        <div className="input">
            <input type="text" placeholder="Wpisz tekst u góry"></input>
            <input type="text" placeholder="Wpisz tekst u dołu"></input>
        </div>
        <button className="buttom">Generuj Mem!</button>
    </main>

)
}

export{Meme}