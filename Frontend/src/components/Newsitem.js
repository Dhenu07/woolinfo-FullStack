import React from "react";
import '../pages/styles/news.css'
const NewsItem=({title,description,url,urlToImage})=>{
    return(
            <div className="news-item">
                <img className="news-Img" src={urlToImage} alt={urlToImage} />
                <p><a id="hh" href={url}>{title}</a></p>
                <p>{description}</p>
        </div>
    )
}
export default NewsItem;