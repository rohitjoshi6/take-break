/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import './activities.scss'
import activityImg from './4453.jpg'
import {Card} from 'antd'
import acts from './act';


const activities = () => {

    const refreshPage = () =>{
        window.location.reload();
    }

    const randomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min)) + min;
    };

    //const [activity, setActivity] = useState([]);

    /*useEffect(() => {
        async function fetchData() {
            const response = await fetch('http://www.boredapi.com/api/activity?type=recreational')
            const data = await response.json()
            console.log(data)
            setActivity(data)
        }
        fetchData()
    }, [])*/

    return (
        <div className="activities">
            <Card className='activity-card'>
                  <div className='title'>
                    <h2>Activity</h2>
                  </div>
                  <hr></hr>
                  <div className='activity-content'>
                    <p>{acts[randomNumber(1,10)].value}</p>
                    <br></br>
                  </div>
                  <button className='button' onClick = {refreshPage} >Get Another Activity</button>
            </Card>
                <img className="img" src={activityImg} alt="activity" />
        </div>
    )
}

export default activities
