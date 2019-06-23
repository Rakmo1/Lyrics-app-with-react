import React, {useContext} from 'react'
import {Context} from '../../context'
import axios from 'axios';

const  GetCharts=()=>{
    const {dispatch}=useContext(Context);
    const handleClick=(e)=>{
        axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&country=us&f_has_lyrics=1&apikey=${process.env.REACT_APP_MM_KEY}`)
        .then(res=>{
            const track_list=res.data.message.body.track_list;
            dispatch({type: 'GET_CHARTS', track_list});
        })
        .catch(err=>{
            console.log(err);
        })
        
    }
    return (
        <li><button className='nav-btn btn btn-small' onClick={handleClick}>Get Charts</button></li>
    )
}

export default GetCharts
