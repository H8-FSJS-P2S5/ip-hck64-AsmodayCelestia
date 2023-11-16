import { useNavigate } from "react-router-dom"
import { useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom"
import ReusableButton from "../components/reusableButton";
import { GoogleLogin } from '@react-oauth/google';

export default function login(){ 
    const navigate = useNavigate()
    const [form, setForm] =useState({
      email: "",
      password:""
    })
    const changeInput = (event) =>{
      const {name, value} = event.target 
      setForm(()=>{
        return{
          ...form,
          [name]: value
        }
      })
    }
    const handleLogin =  async (event)=>{
      event.preventDefault()
      try {
        const {data} = await axios.post("http://localhost:3000/login", form)
        console.log(data);
        localStorage.Authorization = `${data.Authorization}`
        navigate('/')
      } catch (error) {
          console.log(error);
      }
    }

    const googleLogin = async (credentialResponse)=>{
      try {
        console.log(credentialResponse);
        const {data} = await axios({
          method: "POST",
          url: "http://localhost:3000/googleLogin",
          headers: {
            google_token: credentialResponse.credential
          }
        })
        localStorage.Authorization = `${data.Authorization}`
        navigate('/')
      } catch (error) {
        console.log('Login Failed');
      }
    }
    return (
        <>
  {/* Login Section Start */}
  <section className="page">
    <div className="flex justify-center w-full font-extrabold">
      <div className="cols-6 w-1/2">
        <br />
        <br />
        <br />
        <br />
        <div className="flex flex-col justify-center items-center">
          <div id="login" className="login">
            <h2>
              <span>Welcome</span> to Kicnews
            </h2>
            <h4>Log in and enjoy Kicknews full feature</h4>
          </div>
          <form onSubmit={handleLogin} id="login" className="flex flex-col w-2/3">
            <div className="flex flex-col w-full">
              <label htmlFor="login" id="login">
                Email
              </label>
              <input
                onChange={changeInput}
                name="email"
                className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                type="text"
              />
            </div>
            <div className="mt-7 flex flex-col w-full">
              <label htmlFor="login" id="login">
                Password
              </label>
              <input
                onChange={changeInput}
                name="password"
                className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                type="password"
              />
            </div>
            <div className="mt-7 flex justify-center py-7">
            <ReusableButton name={"Login"}/>
            </div>
          </form>
          <GoogleLogin
            onSuccess={googleLogin}
          />
          <div>
            <h5>Register <Link to={'/register'} className="text-[#4e89b1]">here</Link> if you dont have account</h5>
          </div>
        </div>
      </div>
      <div className="cols-6" style={{ height: "100vh", padding: 0 }}>
        <img
          src="..//berdamage.jpeg"
          className="w-[1000px]"
        />
      </div>
    </div>
  </section>
  {/* login section end */}
</>
    )
}
