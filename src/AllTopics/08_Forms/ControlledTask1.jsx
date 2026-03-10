import { useState } from "react";

const ControlledTask1 = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob,setDob] = useState("");
  const [email,setEmail] = useState("");
  const [mNumber,setmNumber] = useState("");

  const handleFirstname = (e) =>{
    setFirstName(e.target.value);
  }  

   const handleLastname = (e) =>{
    setLastName(e.target.value);
  } 
  
   const handleDob = (e) =>{
    setDob(e.target.value);
  } 
  
   const handleEmail = (e) =>{
    setEmail(e.target.value);
  }  

   const handleNumber = (e) =>{
    setmNumber(e.target.value);
  }  

const handleForm = (e) =>{
        e.preventDefault();
        console.log("form submitted")
        alert("form submitted")
        // console.log({fullName:{"firstName":firstName,"lastName":lastName}});

        
         let data = {
         fullName:{firstName,lastName,dob,email,mNumber}
         }
         console.log(data);

         setFirstName("");
         setLastName("");
         setDob("");
         setEmail("");
         setmNumber("");
    }



  return (
    <div>
    <h1>HTML Form</h1>
        <form onSubmit={handleForm}>
            <label htmlFor='firstName'>First Name: </label>
            <input type='text' id='firstName' value={firstName} onChange={handleFirstname}/>

            <br/>
            <br/>

            <label htmlFor='lastName'>Last Name: </label>
            <input type='text' id='lastName' value={lastName} onChange={handleLastname}/>

            <br/>
            <br/>

            <label htmlFor='dateOfBirth'>Date of Birth: </label>
            <input type='date' id='dateOfBirth' value={dob} onChange={handleDob}/>

            <br/>
            <br/>

            <label htmlFor='email'>Email ID: </label>
            <input type='email' id='email' value={email} onChange={handleEmail}/>

            <br/>
            <br/>

            <label htmlFor='mobileNumber'>Mobile Number: </label>
            <input type='number' id='mobileNumber' value={mNumber} onChange={handleNumber}/>

            <br/>
            <br/>

            <button >Submit</button>

            <button >Reset</button>

        </form>
    </div>
  )
}

export default ControlledTask1