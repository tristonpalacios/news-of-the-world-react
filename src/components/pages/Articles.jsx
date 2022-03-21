import { useEffect , useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

export default function Articles ({articles,setSearchState,searchState,handleChange,handleSearch}){
    
    const [search,setSearch]=useState('');
    
    
    
  
    
    console.log(search)
    console.log(searchState)
   
    console.log(articles)
    const allArticles = articles.map((art,idx)=>{
        return(
            <>
           
            
            <div key={`articleID-${idx}`}>
                <img src={art.urlToImage} alt="" />
                <h1>Title:{art.title}</h1>
                <h3>{art.description}</h3>
                <h4>Author:{art.author}</h4>
                <Link to={`/article/${idx}`}>Read Article</Link>
                <hr />
           
            </div>
            </>
        )
    })
    return(
        <>
        <form>
        <input type="text" name="userSearch" onChange={handleChange}/>
        <button onClick={handleSearch} type="submit">Search</button>

        </form>

        <div>
            {allArticles}
       </div>
        
        </>
       
    )
}