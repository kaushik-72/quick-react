import { useState } from "react";
import axios from "axios";

const CreateUserPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    let { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCreateUser = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      // // using fetch method
      // let resp = await fetch("http://localhost:9000/users", {
      //   method: "POST",
      //   headers: {
      //     "Content-type": "application/json",
      //   },
      //   body: JSON.stringify(formData),
      // });
      // console.log(resp);

      {
        
            
            let resp = await axios.post("http://localhost:9000/users", formData);
            console.log(resp);
            navigate("/all-users");
            
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    
      <article className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
        <div className="bg-white rounded-2xl shadow-md w-full max-w-md p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Create Account
          </h2>

          <form onSubmit={handleCreateUser} className="flex flex-col gap-5">
            {/* USERNAME */}
            <div className="flex flex-col gap-1">
              <label
                htmlFor="username"
                className="text-sm font-medium text-gray-600"
              >
                Username
              </label>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Enter Username"
                value={formData.username}
                onChange={handleChange}
                className="border border-gray-300 rounded-lg px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-gray-800 transition"
              />
            </div>

            {/* EMAIL */}
            <div className="flex flex-col gap-1">
              <label
                htmlFor="email"
                className="text-sm font-medium text-gray-600"
              >
                Email
              </label>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Enter Email"
                value={formData.email}
                onChange={handleChange}
                className="border border-gray-300 rounded-lg px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-gray-800 transition"
              />
            </div>

            {/* PASSWORD */}
            <div className="flex flex-col gap-1">
              <label
                htmlFor="password"
                className="text-sm font-medium text-gray-600"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter Password"
                value={formData.password}
                onChange={handleChange}
                className="border border-gray-300 rounded-lg px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-gray-800 transition"
              />
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="bg-gray-800 text-white rounded-lg py-2 font-semibold hover:bg-gray-700 active:scale-95 transition mt-2"
            >
              Create Account
            </button>
          </form>
        </div>
      </article>
   
  );
};

export default CreateUserPage;
