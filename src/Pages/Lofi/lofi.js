/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import { useState} from 'react'
import './lofi.scss';
import ReactPlayer from 'react-player';
import Lvideos from './lofiVideos';

const lofi = () => {

    //const [video , setVideo] = useState()

    //const base_url="http://www.youtube.com/embed/"
     
    /*async function fetchData(key, query) {
        const response = await fetch('https://www.googleapis.com/youtube/v3/search?key=' + key + '&type=video&part=snippet&maxResults=1&q=' + query)

        const data = await response.json()
        console.log(data)
        setVideo(base_url + data.items[0].id.videoId)
    }
    fetchData()*/

    const randomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min)) + min;
    };

    

        
    return (
        <div className="lofi">
            <div className="form">
            
            </div>
            { <div id="results" className='iframeVideo'>
            <ReactPlayer
               url={Lvideos[randomNumber(0,16)].value}
            />
            
            </div> }
        </div>
    )
}

export default lofi
