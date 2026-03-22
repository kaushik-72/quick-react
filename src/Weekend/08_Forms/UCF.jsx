import React, { useRef } from 'react'

const UCF = () => {

    const emailRef =  useRef(null);
    const passwordRef =  useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(emailRef);
        // console.log(passwordRef);
        let user = {
            email: emailRef.current.value,
            password:passwordRef.current.value,  //? we do this to print the object.key.value
        };

        console.log(user);
     }
  return (
    <div>
        <h1>Uncontrolled Forms</h1>
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder='Enter Email' ref={emailRef}></input> 
            <br/>
            <input type='text' placeholder='Enter Password' ref={passwordRef}></input> 
           <br/>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default UCF