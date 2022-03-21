import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import Articles from './components/pages/Articles'
import Article from "./components/pages/Article"
import{
  BrowserRouter as Router,
  Routes,
  Route
 } from 'react-router-dom'

function App() {
  const [articles,setArticles]= useState([])
  const [searchState,setSearchState]= useState('apple')
  console.log(searchState)
  let url = `https://newsapi.org/v2/everything?q=${searchState}&from=2022-03-20&sortBy=popularity&apiKey=${process.env.REACT_APP_API_KEY}`;
  const handleChange = (e)=>{
    return setSearchState(e.target.value),
    console.log(e.target.value)
    
}

const handleSearch = (e) =>{
  e.preventDefault()
  window.location.reload()
}

  useEffect(() => {
    axios.get(url)
      .then(response => {
        setArticles(response.data.articles)
      })
      .catch(console.log)

  }, [searchState])



  return (
    <Router>
    <div className="App">
      <Routes>
      
        <Route
          exact path = '/'
          element={<Articles articles={articles} searchState={searchState} setSearchState={setSearchState} handleChange={handleChange} handleSearch={handleSearch}/>}
        />
        <Route
          path = '/article/:idx'
          element={<Article articles={articles} />}
        />

      </Routes>
    </div>
    </Router>
  );
}

export default App;
