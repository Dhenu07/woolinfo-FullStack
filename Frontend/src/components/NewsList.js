import React,{useEffect,useState} from "react";
import axios from "axios";
import NewsItem from './Newsitem';
import '../pages/styles/news.css';
const NewsList=()=>{
    const [articles,setArticles]=useState([]);
    useEffect(()=>{
        const getArticles=async()=>{
            const response=await axios.get('https://newsapi.org/v2/everything?q=wool&apiKey=fd11a103ee194b3ba6bdb4c78e4cb34d');
            setArticles(response.data.articles);
        }
        getArticles()
    },[]);
    return(
        <div className="News-full">
            {articles.map(article=>{
                return(
                       <NewsItem
                       title={article.title}
                       description={article.description}
                       url={article.url}
                       urlToImage={article.urlToImage}/>
                )
            })}    
        </div>
    );
}
export default NewsList;