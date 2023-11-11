import Header from "./Header";
import {useRef, useState} from "react";
import { isFormValide } from "../utils/Validate";

const Login = () => {

    const [signInForm, setSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] =useState(null);

    const email = useRef(null);
    const password = useRef(null);

const handleButton = () =>{
   
    const message = isFormValide (email.current.value, password.current.value);
    setErrorMessage(message);
}

const toggleSignIn =() =>{
            setSignInForm(!signInForm);
}

    return(
        <div>
            <Header />
            <div className="absolute">
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/ab4b0b22-2ddf-4d48-ae88-c201ae0267e2/0efe6360-4f6d-4b10-beb6-81e0762cfe81/IN-en-20231030-popsignuptwoweeks-perspective_alpha_website_large.jpg"
            alt="logo"
            />
        </div>
        <form 
         onSubmit={(e)=>e.preventDefault()}
        className="absolute w-3/12 p-12 bg-black  my-36 mx-auto right-0 left-0 text-white bg-opacity-80">

            <h1 className="text-xl py-2">{signInForm ? "Sign in" : "Sign up"}</h1>

            {!signInForm && <input type="text" placeholder="Full Name" className="p-2 my-2 text-sm w-full text-black " />}
            
            <input 
            ref={email}
            type="text" placeholder="Email Address" className="p-2 my-2 text-sm w-full text-black" />

            {!signInForm && <input type="text" placeholder="Mobile Number" className="p-2 my-2 text-sm w-full text-black " />}   

            <input 
            ref={password}
            type="password" placeholder="Password" className="p-2 my-2 text-sm w-full  text-black" />

            <p className="text-red-600 text-sm">{errorMessage}</p>
        
         <button 
            className="p-4 my-4 bg-red-700 w-full text-sm" onClick={handleButton}>{signInForm ? "Sign in" : "Sign up"}</button>
            
            <p className="text-sm py-2 cursor-pointer hover:underline" onClick={toggleSignIn}>{signInForm ? "New to Netflix? Sign up now." : "Already a user Sign in to Netflix."}</p>
        </form>
        </div>
    );

};
export default Login;