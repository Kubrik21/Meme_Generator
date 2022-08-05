import React from "react"
function Form(){

    const [firstName,setFirstName]= React.useState({imie:"",nazwisko:""})
    function handleChange(event)
    {
        setFirstName(prev=>{
                return {...prev,
                        [event.target.name]: event.target.value
                }
            })   

        console.log(event.target.value)//<-- WYŚWIETLI dom KTÓRY GO WYWOŁAŁ-->
        console.log(firstName)
    }
    return(
        <form>
            <input type="text" placeholder="Imie" onChange={handleChange} name="imie" value={firstName.imie}/>
            <input type="text" placeholder="Nazwisko" onChange={handleChange} name="nazwisko" value={firstName.nazwisko} />
        </form>
)

}
export {Form}