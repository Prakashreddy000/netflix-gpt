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
        <form className="relative p-12 bg-black">
            <input type="text" placeholder="email address" className="p-2 m-2"/>
            <input type="password" placeholder="password" className="p-2 m-2" />
            <button className="p-2 m-2">Sign in</button>
        </form>
        </div>
    );

};
export default Login;