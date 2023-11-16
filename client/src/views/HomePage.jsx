import { useEffect } from "react";
import TableRow from "../components/TableRow"
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom"

export default function HomePage(){
    const [news, setNews] = useState([])
    useEffect(()=>{
        // let ignore = false
        window.scrollTo(0,0);
        fetchDataNews()
        // return () =>(ignore = true)
    }, [])
    const handleDelete = async(id)=>{
      try {
        console.log(id);
        const {data} = await axios.delete(`http://localhost:3000/articles/${id}`, {
          headers:{ 
            Authorization: localStorage.getItem('Authorization')
          }
        })
        console.log(news);
        setNews(news.filter(el=> el.id !== id))
      } catch (error) {
        console.log(error);
      }
  
    }
    const fetchDataNews = async () => {
        try {
            const {data} = await axios.get("http://localhost:3000/menu", {
              headers:{ 
                Authorization: localStorage.getItem('Authorization')
              }
            })
            console.log(data.article);
            setNews(data.article)
        } catch (error) {
            console.log(error);
        }
    }

    return (
    <>
        {/* Hero Section Start */}
    <section className="hero" id="home">
    <main className="content">
        <h1>
        <span>Kicknews</span>
        </h1>
        <h1>Infotainment News Everyday</h1>
        <a href="#" className="cta">
        Check Now
        </a>
    </main>
    </section>
    {/* Hero Section End */}


 {/* News Table Section Start */}
  <section className="page w-full" id="home">
    <div id="home" className="mx-20">
      <div className="rows">
        <main>
          <div>
            <div id="login" className="login font-extrabold">
              <h2>
                <span>All News</span> in Kicknews
              </h2>
            </div>
            <button className="btn bg-[#4e89b1] text-white" type="button">
              {/* <span style={{ fontWeight: "bold", fontSize: "1.2rem" }}>+</span>{" "} */}
              <Link to={'/addNews'}>Add News</Link>
            </button>
            <table className="mt-7 table border border-[#4e89b1]">
              <thead className=" text-black">
                <tr>
                  <th scope="col" className="text-center">
                    Title
                  </th>
                  <th scope="col" className="text-center">
                    Content
                  </th>
                  <th scope="col" className="text-center">
                    Image
                  </th>
                  <th scope="col" className="text-center">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody
                className="table-group-divider text-black"
                id="table-movies"
              >
                {news && news.map((el) => {
                    return (
                    <TableRow handleDelete={()=>handleDelete(el.id)} key={el.id} title={el.title} content={el.content} image={el.imgUrl} id={el.id}/>)
                })}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  </section>
{/* News Section End */}
    </>
    )
}