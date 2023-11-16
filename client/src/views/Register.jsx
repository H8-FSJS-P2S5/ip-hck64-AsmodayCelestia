import { useNavigate } from "react-router-dom"
import ReusableButton from "../components/reusableButton";
import { useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom"

export default function login(){ 
    const navigate = useNavigate()
    const [form, setForm] =useState({
      username: "",
      email: "",
      password:"",
      phoneNumber:"",
      address:""
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
    const handleRegister =  async (event)=>{
      event.preventDefault()
      try {
        const { data } = await axios({
            url: `http://localhost:3000/register`,
            method: `POST`,
            data: form,
            headers: {
              Authorization: localStorage.getItem('Authorization')
            }
          })
        console.log(data);
        localStorage.Authorization = data.Authorization
        navigate('/')
    } catch (error) {
        console.log(error);
    }
    }
    return (
        <>
            <>
  {/* Login Section Start */}
  <section className="page">
    <div className="flex justify-center w-full font-extrabold">
      <div className="cols-6 w-1/2">
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="flex flex-col justify-center items-center">
          <div id="login" className="login">
            <h2>
              <span>Welcome</span> to Kicnews
            </h2>
            <h4>Sign Up and enjoy Kicknews full feature</h4>
          </div>
          <form onSubmit={handleRegister} id="login" className="flex flex-col w-2/3">
          <div className="flex flex-col w-full">
              <label htmlFor="register" id="register">
                Username
              </label>
              <input
                onChange={changeInput}
                name="username"
                className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                type="text"
              />
            </div>
            <div className="mt-7 flex flex-col w-full">
              <label htmlFor="register" id="register">
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
              <label htmlFor="register" id="register">
                Password
              </label>
              <input
                onChange={changeInput}
                name="password"
                className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                type="text"
              />
            </div>
            <div className="mt-7 flex flex-col w-full">
              <label htmlFor="register" id="register">
                Phone Number
              </label>
              <input
                onChange={changeInput}
                name="phoneNumber"
                className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                type="text"
              />
            </div>
            <div className="mt-7 flex flex-col w-full">
              <label htmlFor="register" id="register">
                Address
              </label>
              <input
                onChange={changeInput}
                name="address"
                className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                type="text"
              />
            </div>
            <div className="mt-7 flex justify-center py-7">
              <ReusableButton name={"Register"}/>
            </div>
          </form>
          <div>
            <h5>Login <Link to={'/login'} className="text-[#4e89b1]">here</Link> if you already have account</h5>
          </div>
        </div>
      </div>
      <div className="cols-6" style={{ height: "100vh", padding: 0 }}>
        <img
          src="./mission-impossible-dead-reckoning-part-1-phone-wallpaper-4k-uhdpaper.com-716@1@k.jpg"
          className="w-[1000px]"
        />
      </div>
    </div>
  </section>
  {/* login section end */}
</>

        </>
    )
}
