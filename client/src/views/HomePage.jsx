import { useEffect } from "react";
import CardItem from "../components/CardItem"
import axios from "axios";
import { useState } from "react";

export default function HomePage({changePage}){
    const [news, setNews] = useState([])
    const [currentPage, setPage] = useState(1)
    const [filterPage, setFilter] = useState("")
    const [sortPage, setSort] = useState("")
    const [dataLength, setLength] = useState(null)
    const [searchPage, setSearch] = useState("")
    const [isWork, setWork] =useState(true)

    useEffect(()=>{
        if(isWork){
            window.scrollTo(0,0);
            fetchDataNews()
        }
    }, [currentPage, filterPage, sortPage, isWork])

    const fetchDataNews = async () => {
        try {
            const {data} = await axios.get("http://localhost:3000/menu", { 
            params: {
                page: {
                    size: 9, 
                    number: currentPage
                  },
                  filter: {
                    category: filterPage, 
                  },
                  sort: sortPage,
                  keyword:{
                    title: searchPage
                  }
                }
        })
            console.log(data.menu, 'length');
            setNews(data.menu)
            setLength(data.menu.length)
            setWork(false)
            // console.log(params);
        } catch (error) {
            console.log(error);
        }
    }
    const nextPage = async () =>{
            setPage((currentPage) => {
                if(dataLength < 9){
                    return currentPage
                }else{
                    return currentPage+ 1
                }
            }) 
            setWork(true);
            console.log(currentPage, 'nxt')
      }
      const beforePage = async () =>{
            setPage(currentPage => {
                if(currentPage < 1){
                   return currentPage
                }else{
                   return currentPage-1
                }
            })
            setWork(true);
            console.log(currentPage, 'bfr') 
            // console.log(params);
      }
      const filter = async (typeId)=>{
            setFilter(typeId)
            setWork(true);
      }
      const sort = async (sort)=>{
            setSort(sort)
            setWork(true);
      }

      const searchSubmit = (event) => {
        event.preventDefault();
        setWork(true);
      }

      const searchInput = (event) => {
        const value = event.target.value;
        setSearch(value);
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

    {/* search sort filter */}
    <br />
    <br />
    <br />
    <br />
    <section className="mx-12">
    <div className="relative w-1/3">
        <form onSubmit={searchSubmit}>
            <input
            onChange={searchInput}
            type="search"
            id="search-dropdown"
            className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
            placeholder="Search Mockups, Logos, Design Templates..."
            required=""
            />
            <button
            type="submit"
            className="absolute top-0 right-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
            <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
            >
                <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
            </svg>
            <span className="sr-only">Search</span>
            </button>
        </form>
    </div>

        <div className="flex text-white">
        <div className="dropdown dropdown-hover">
            <label tabIndex={0} className="btn m-1 text-white">
            Filter By Category
            </label>
            <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
            <li style={{cursor: 'pointer'}} onClick={()=>filter(1)}>
                <a>
                    Breakfast
                </a>
            </li>
            <li style={{cursor: 'pointer'}} onClick={()=>filter(2)}>
                <a>
                    Lunch
                </a>
            </li>
            <li style={{cursor: 'pointer'}} onClick={()=>filter(3)}>
                <a>
                    Dinner
                </a>
            </li>
            <li style={{cursor: 'pointer'}} onClick={()=>filter(4)}>
                <a>
                    Music
                </a>
            </li>
            </ul>
        </div>
        <div className="dropdown dropdown-hover">
            <label tabIndex={0} className="btn m-1 text-white">
            Sort
            </label>
            <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
            <li style={{cursor: 'pointer'}} onClick={()=>sort("ASC")}>
                <a>ASC</a>
            </li>
            <li style={{cursor: 'pointer'}} onClick={()=>sort("DESC")}>
                <a>DESC</a>
            </li>
            </ul>
        </div>
        </div>
    </section>
    {/* search sort filter */}

    {/* Menu Section Start */}
    <br />
    <br />
    <section className="page" id="home">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
        {news.map(el => {
            return (
            <CardItem key={el.id} name={el.name} description={el.description} image={el.image} price={el.price} id={el.id}/>)
        })}
        </div>
        </section>
    {/* Menu Section End */}

    {/* pagination */}
    <section className="flex justify-center my-12 max-w-screen-xl mx-auto px-6">
        <div className="text-white">
        <button onClick={beforePage} className="btn bg-[#4e89b1] text-white" type="button">
            <span style={{ fontWeight: "bold", fontSize: "1.2rem" }} />
            Back
        </button>

        <button onClick={nextPage} className="btn bg-[#4e89b1] text-white" type="button">
            <span style={{ fontWeight: "bold", fontSize: "1.2rem" }} />
            Next
        </button>
        </div>
    </section>
    {/* pagination */}
    </>
    )
}