import { useState } from "react"

const ControlledForms1 = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [message,setMessage] =useState("");

    const handleFirstname = (e) =>{
        setFirstName(e.target.value);
    }
    const handleLastname = (e) =>{
        setLastName(e.target.value);
    }

    const handleForm = (e) =>{
        e.preventDefault();
        console.log("form submitted")
        // console.log({fullName:{"firstName":firstName,"lastName":lastName}});

        
         let data = {
         fullName:{firstName,lastName}
         }
         console.log(data);

         setMessage(`Welcome ${firstName} ${lastName}`);

         //clearing fields
         setFirstName("");
         setLastName("");
    }
  return (
    <div>
        <h1>Learn Controlled Forms 1</h1>
        <form onSubmit={handleForm}>
            <label htmlFor='firstName' >First Name: </label>
            <input type='text' id='firstName' value={firstName} onChange={handleFirstname}/>

            <br/>
            <br/>

            <label htmlFor='lastName' >Last Name: </label>
            <input type='text' id='lastName' value={lastName} onChange={handleLastname}/>

            <br/>
            <br/>

            <button >Submit</button>
        </form>

        {message && <h2>{message}</h2>}
    </div>
  )
}

export default ControlledForms1;

