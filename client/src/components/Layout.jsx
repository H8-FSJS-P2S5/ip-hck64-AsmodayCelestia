import Navbar from "./navbar";
import { Outlet } from "react-router-dom";
import { GoogleOAuthProvider } from '@react-oauth/google';

export default function Layout(){
    return(
        <>
        <GoogleOAuthProvider clientId="770065709347-c3052vfr69lljkpgprgca0ukc4322f04.apps.googleusercontent.com">
            <Navbar/>
            <Outlet/>
        </GoogleOAuthProvider>;
        {/* <Footer/> */}
        </>
    )
}