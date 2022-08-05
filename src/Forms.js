import {useState} from "react"

function Forms(){
    const[form,setForm]=useState({
        mail:"",
        passwd:"",
        passwd_sec:"",
        newsletter:false
    })

    

function Handlestate(event){

setForm(prev=>{
    return{
    ...prev,
    [event.target.name]:event.target.type==="checkbox"? !prev.newsletter :event.target.value
    }
})

console.log(form)
}
function SendState(event){
    event.preventDefault()
    if(event.target.passwd.value===event.target.passwd_sec.value)
        {console.log("Poprawnie zarejestrowano!")}
    else {console.log("Hasła się różnią, popraw to")}
    if(event.target.newsletter.checked){console.log("Dzięki za zarejestrowanie do newslettera")}


}

    return(
        <form onSubmit={SendState}>
            <input name="mail" value={form.mail} placeholder="Set email" onChange={Handlestate} required>

            </input>
            <input type="password" value={form.passwd} minLength="8" required name="passwd" placeholder="Set password" onChange={Handlestate}>

            </input>
            <input  type="password" value={form.passwd_sec} minLength="8" required name="passwd_sec" placeholder="Set password again" onChange={Handlestate}></input>
            <input id="check" name="newsletter" type="checkbox" checked={form.newsletter} onChange={Handlestate}></input>
            <label htmlFor="check">Czy zapisać do newslettera?</label>
            <button>wyślij</button>
        </form>

    )
}

export {Forms}