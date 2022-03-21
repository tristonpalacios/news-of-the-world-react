import { useEffect , useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import { useParams } from "react-router"



export default function Article ({articles}){
    const id = useParams()
    console.log(id)
   let artPull = id.idx
   let articleData=articles[artPull]
    console.log(articles[artPull])
    return(
       <>
        <h1>{articleData.title}</h1>
        <img src={articleData.urlToImage} alt="" />
        <p>{articleData.content}</p>
        </>

    )
}