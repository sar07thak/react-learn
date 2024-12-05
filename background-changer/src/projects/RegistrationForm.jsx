import { useState } from "react";

export const Registeraion = () => {

  // ?  in this we have uses 5 useState 
  let [firstname ,setFirstname] = useState("");
  let [lastname , setlastname ] = useState("");
  let [userpassword ,setpassword ]= useState("");
  let [email,setemail] = useState("");
  let [phone , setphone] = useState("");

  const handleFirstname = (e) => {
    setFirstname(e.target.value);
  }

  const handlelastname = (e) => {
    setlastname(e.target.value);
  }

  const handleemail = (e) => {
    setemail(e.target.value);
  }

  const handlephone =(e)=>{
    setphone(e.target.value);
  }


  const handlePassword = (e) => {
    setpassword(e.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const formdata = {
      firstname,
      lastname,
      email,
      userpassword,
      phone,
    };

    console.log(formdata);
    
  }

    return(
        <>
        <form 
        className="bg-gray-200  flex justify-center p-2 "
        onSubmit={handleSubmit}
        >
          <div className="flex  flex-col  items-center">
          <p className="text-md text-gray-500 mb-5">
            Hello , My name is <span className="text-blue-500 font-bold">{firstname} {lastname} </span>
            ,My email address is <span className="text-blue-500 font-bold"> {email} </span>
            and my phone number is <span className="text-blue-500 font-bold">{phone}</span> 
         </p>
         <div className=" flex flex-col  p-10  rounded-xl  shadow-2xl shadow-gray-600 w-[80%] bg-white ">
          <h1 className="font-bold text-3xl mb-3">Sign Up</h1>
          <p className="text-md text-gray-500 mb-5">please fill in this form to create an account.</p>
          <h2 className="font-semibold mb-.5 ">First Name</h2>
          <input type="text"className="p-1.5 bg-gray-100 text-gray-600" value={firstname} onChange={handleFirstname} />

          <h2 className="font-semibold mb-.5 ">Last Name</h2>
          <input type="text" className="p-1.5 bg-gray-100 text-gray-600" value={lastname} onChange={handlelastname}/>
          
          <h2 className="font-semibold mb-.5 ">Email</h2>
          <input type="email" className="p-1.5 bg-gray-100 text-gray-600" value={email} onChange={handleemail} />
          
          <h2 className="font-semibold mb-.5 ">Password</h2>
          <input 
          type="password" 
          placeholder="Enter password" 
          name="password" 
          required  
          value={userpassword} 
          className="p-1.5 bg-gray-100 text-gray-600"
          onChange={handlePassword}
           />
          
          <h2 className="font-semibold mb-.5 ">Phone Number</h2>
          <input type="text" name="" id="" value={phone} className="mb-5 p-1.5 bg-gray-100 text-gray-600" onChange={handlephone} />
          
          <p className="text-md text-gray-500 mb-5">By Creating an account you agree to our ? <span className="text-blue-500 font-bold">Term and Policy</span></p>
          <button className=" p-2 text-white bg-blue-500 rounded-md"
           
           >Sign Up</button>
         </div>
          </div>
        </form>  
        </>
    );
}

// ! MORE BETTER WAY FOR USING STATE IN LOGIN FORM

// export const LoginForm = () => {

//   // ?  in this we have uses 5 useState 

//   const [user ,setuser] = useState({
//     firstname : "",
//     lastname : "",
//     email : "",
//     password : "",
//     phone : "",
//   })

//   const handleInputChange = (e) => {
//     const {name ,value} = e.target ;

//     setuser((prev)=>({...prev, name : value}))
//   }


//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const formdata = {
//       firstname,
//       lastname,
//       email,
//       password,
//       phone,
//     };

//     console.log(formdata);
    
//   }

//     return(
//         <>
//         <form 
//         className="bg-gray-200  flex justify-center p-2"
//         onSubmit={handleSubmit}
//         >
//           <div className="flex  flex-col  items-center">
//           <p className="text-md text-gray-500 mb-5">
//             Hello , My name is <span className="text-blue-500 font-bold">{user.firstname} {user.lastname} </span>
//             ,My email address is <span className="text-blue-500 font-bold"> {user.email} </span>
//             and my phone number is <span className="text-blue-500 font-bold">{user.phone}</span> 
//          </p>
//          <div className=" flex flex-col  p-10  rounded-xl  shadow-2xl shadow-gray-600 w-[55%] bg-white ">
//           <h1 className="font-bold text-3xl mb-3">Sign Up</h1>
//           <p className="text-md text-gray-500 mb-5">please fill in this form to create an account.</p>
//           <h2 className="font-semibold mb-.5 ">First Name</h2>
//           <input type="text"className="p-1.5 bg-gray-100 text-gray-600" name="firstname" value={user.firstname} onChange={handleInputChange} />

//           <h2 className="font-semibold mb-.5 ">Last Name</h2>
//           <input type="text" className="p-1.5 bg-gray-100 text-gray-600" name="lastname" value={user.lastname} onChange={handleInputChange}/>
          
//           <h2 className="font-semibold mb-.5 ">Email</h2>
//           <input 
//           type="email" 
//           className="p-1.5 bg-gray-100 text-gray-600" 
//           name="email" value={user.email} 
//           onChange={handleInputChange} />
          
//           <h2 className="font-semibold mb-.5 ">Password</h2>
//           <input 
//           type="password" 
//           placeholder="Enter password" 
//           name="password" 
//           required  
//           value={user.password} 
//           className="p-1.5 bg-gray-100 text-gray-600"
//           onChange={handleInputChange}
//            />
          
//           <h2 className="font-semibold mb-.5 ">Phone Number</h2>
//           <input type="text" name="phone" id="" value={user.phone} className="mb-5 p-1.5 bg-gray-100 text-gray-600" onChange={handleInputChange} />
          
//           <p className="text-md text-gray-500 mb-5">By Creating an account you agree to our ? <span className="text-blue-500 font-bold">Term and Policy</span></p>
//           <button className=" p-2 text-white bg-blue-500 rounded-md"
           
//            >Sign Up</button>
//          </div>
//           </div>
//         </form>  
//         </>
//     );
// }