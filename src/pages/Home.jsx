import './Home.css'
import movies from "../assets/components/Movies";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
const Home = () => {
    const [getMovies, setMovies] = useState(movies)
    const [search, setSearch] = useState('')
        const sorted = [...movies].sort((a,b) => a.year - b.year)
        const sorted2 = [...movies].sort((a,b) => b.year - a.year)
        const sorted3 = [...movies].sort((a,b) => a.rating - b.rating)
        const sorted4 = [...movies].sort(function (a,b) {if(a.title < b.title) return -1}  )
        const sorted5 = [...movies].sort(function (a,b) {if(a.title > b.title) return -1}  )
        const inputChange = (e) =>{
            const searchTerm = e.target.value
            setSearch(searchTerm)
        }
        const filteredMovies = movies.filter((movie)=> movie.title.toLowerCase().includes(search.toLowerCase()))
    return ( 
        <>
        <h1 className="h1">Movies for You</h1>
        <h2 className="h2">The best MovieDB</h2>
        <form>
            <div>
                <input type="text" name="search" id="" value={search} onChange={inputChange} className="searchinput"/>
                <input type="button" value="SEARCH" onClick={(()=>{setMovies(filteredMovies)})} className="searchbtn"/>
                
            </div>
            <div className="divbtn">
                
                <input type="button" value="YEAR UP" onClick={(()=>{setMovies(sorted)})} className="onbtn"/>
                <input type="button" value="YEAR DOWN" onClick={(()=>{setMovies(sorted2)})} className="onbtn"/>
                <input type="button" value="BEST RATE" onClick={(()=>{setMovies(sorted3)})} className="onbtn"/>
                <input type="button" value="A-Z" onClick={(()=>{setMovies(sorted4)})} className="onbtn"/>
                <input type="button" value="Z-A" onClick={(()=>{setMovies(sorted5)})} className="onbtn"/>
            </div>
        </form>
        <section>
        {getMovies.map((movie)=>
            
            (<div key={uuidv4()}>
                <h2>{movie.title}</h2>
                <p>{movie.year}</p>
                <h3>{movie.director}</h3>
                <p>{movie.duration}</p>
                <p >{movie.genre.reduce((p, c) => [ p, <br key={uuidv4()}/>, c ])}</p>
                <p>{movie.rate}</p>
            </div>)
        )}
        </section>
        </>
    );
}

export default Home;