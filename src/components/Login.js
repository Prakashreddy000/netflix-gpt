import Header from "./Header";

const Login = () => {
    return(
        <div>
            <Header />
            <div className="absolute">
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/ab4b0b22-2ddf-4d48-ae88-c201ae0267e2/0efe6360-4f6d-4b10-beb6-81e0762cfe81/IN-en-20231030-popsignuptwoweeks-perspective_alpha_website_large.jpg"
            alt="logo"
            />
        </div>
        <form className="absolute w-3/12 p-12 bg-black  my-36 mx-auto right-0 left-0 text-white bg-opacity-80">
            <h1 className="text-xl py-2">Sign in</h1>
            <input type="text" placeholder="email address" className="p-2 my-2 text-xl w-full text-black " />
            <input type="password" placeholder="password" className="p-2 my-2 text-xl w-full" />
            <button className="p-4 my-4 bg-red-700 w-full text-lg">Sign in</button>
            <p className="text-lg py-2">New to Netflix? Sign up now.</p>
        </form>
        </div>
    );

};
export default Login;