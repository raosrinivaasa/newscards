import {useState} from 'react';
import axios from 'axios';

const Myapi = (props) => {

    const [source, setSource] = useState("");
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [furl, setFurl] = useState("");
    const [iurl, setIurl] = useState("");
    const [publishedAt, setPublishedAt] = useState("");

        const getData = () =>{
        const url = axios.get(`https://saurav.tech/NewsAPI/top-headlines/category/${props.category}/${props.country}.json`)
        .then(
            (response) =>{
                setSource(response.data.articles[props.i].source.name)
                setTitle(response.data.articles[props.i].title)
                setDesc(response.data.articles[props.i].description)
                setFurl(response.data.articles[props.i].url)
                setIurl(response.data.articles[props.i].urlToImage)
                setPublishedAt(response.data.articles[props.i].publishedAt)
            }
        )
        
    }
   getData();
    return (
    <div>
         <section className="sec1">
         
             <div className="card mp8 cflex">
                <div className="mp8">{title}</div>
                <img className="imgSize mp8" src={iurl}></img>
                <a className="mp8 link" href={furl}>FULL NEWS HERE</a>
                <div className="mp8">{desc}</div>
                <div className="mpb8">SOURCE : {source}</div>
                <div className="mpb8">PUBLISHED AT : {publishedAt}</div>
            </div>
        
            </section>
    </div>
  )
}

export default Myapi;