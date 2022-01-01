/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
// import { useState } from 'react'


const lofi = () => {

    // const [video , setVideo] = useState([])

    //    const base_url="http://www.youtube.com/embed/"

        async function fetchData(key, query) {
            const response = await fetch('https://www.googleapis.com/youtube/v3/search?key=' + key + '&type=video&part=snippet&maxResults=1&q=' + query)

            const data = await response.json()
            console.log(data)
            // setVideo(data)
        }
        fetchData()

        
    
    return (
        <div class="lofi">
            <input type="text" id="search" placeholder="Search for a video" />
            <button id="search-button" onClick={()=>fetchData('AIzaSyDPUDL2TjZDZLfrubqV8TGtIFigsXlEwD8', document.getElementById('search').value)}>Search</button>

            {/* <div id="results">
                <iframe id='video' title='video' width="560" height="315" src={base_url+ video[0].items[0].id.videoId}  ></iframe>
            </div> */}
        </div>
    )
}

export default lofi
