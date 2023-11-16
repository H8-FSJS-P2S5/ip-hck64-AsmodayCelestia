import { useEffect } from "react";
// import { AiOutlineMenu } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar(){
    const navigate = useNavigate()

    const logout = ()=>{
        // console.log("masuk");
        localStorage.clear()
        navigate("/")
    }
    return( 
    <>
  {/* Navbar Start */}
  <nav className="navbar">
      <Link className="navbar-logo ml-5" to={'/'}>Kick<span>news</span>.</Link>
    <div className="flex w-full navbar-nav sm:flex-row flex-col sm:justify-center justify-start">
      <Link to={'/'}>Home</Link>
      {/* <Link to={'/category'}>Category</Link> */}
      <Link to={'/register'}>Register</Link>
      <a onClick={logout}>{localStorage.Authorization ? "Logout" : ""}</a>
    </div>
    {/* <div className="flex-auto navbar-extra mr-5 justify-end"> */}
            {/* <a href="#" id="hamburger-menu">
                <AiOutlineMenu/>
            </a> */}
        {/* </div> */}
  </nav>
  {/* Navbar End */}

    </>
    )
}