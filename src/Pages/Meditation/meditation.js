/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import ReactPlayer from 'react-player';
import videos from './videos';
import './meditation.scss';
const meditation = () => {

    

    //const [num , setNum] =useState(0)

    //const base_url="http://www.youtube.com/embed/"

    const randomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min)) + min;
    };

    const refreshPage = () =>{
        window.location.reload();
    }

    /*useEffect (() => {
    async function fetchData(key='AIzaSyCjczfDfdVDCbiragHe0z_XxU9is33D0iY', query="meditation") {
        
        const response = await fetch('https://www.googleapis.com/youtube/v3/search?key=' + key  + '&type=video&part=snippet&maxResults=5&q=' + query)

        const data = await response.json()
        console.log(data)
        // randomNumber(0,100)
        //setNum(randomNumber(0,100))
        setVideo(base_url + data.items[randomNumber(0,5)].id.videoId)
        }
        fetchData()
    }, [randomNumber])*/


        
    return (
        <div className="lofi">
            
            <div id="results" className='iframeVideo'>
            <ReactPlayer
               url={videos[randomNumber(0,16)].value}
            />
            </div> 
            <button className='button-med' onClick = {refreshPage} >Get Another Meditation Video</button>
        </div>
    )
}

export default meditation

