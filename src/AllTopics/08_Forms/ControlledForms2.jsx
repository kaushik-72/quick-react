import { useState } from "react"

const ControlledForms2 = () => {

    const[formData,setformData] = useState(
        {
            username:"",
            email:"",
            password:"",
        }
    );

    const handleChange =(e)=>{
        let {name,value} =e.target;
        setformData({...formData, [name]: value});  
        //! here name is use to create a key for uname,email pswd
        //* ...formData (spread)to store and handle empty data

    }
    //* handling the error: "You provided a `value` prop to a form field without an `onChange` handler."

    const handleSubmit = (e)=>{
        e.preventDefault();
        alert("Form Submitted");
        console.log(formData);

        let users = JSON.parse(localStorage.getItem("users")) || []
        console.log(users);

        //* to get existing users from local storage , if users are present parse it else initalize with empty array[].

        //create user data with ID
        let userData = {...formData,id:Math.random()};

        //add userData to users array
        users.push(userData);

        //set users array to local storage after converting into json
        localStorage.setItem("users", JSON.stringify(users));

        // clear input fields
        setformData({username:"", email:"", password:""});
    }
  return (
    <div>
    <h1>Learn Controlled Forms</h1>
    <p>Manage multiple input with single state</p>

    <form onSubmit={handleSubmit}>
        
        <input type="text" name="username" placeholder="Enter Username" value={formData.username} onChange={handleChange}/>
        
        <br/>
        <br/>

        <input type="text" name="email" placeholder="Enter Email" value={formData.email} onChange={handleChange}/>
        
        <br/>
        <br/>

        <input type="password" name="password" placeholder="Enter Password" value={formData.password} onChange={handleChange}/>

        <br/>
        <br/>

        <button>Submit</button>

    </form>
    </div>
  )
}

export default ControlledForms2