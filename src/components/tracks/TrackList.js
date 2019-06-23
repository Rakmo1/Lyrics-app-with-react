import React from 'react'
import Track from './Track'
import {Consumer} from '../../context'

function TrackList() {
    return (
        <div className='song-list row'>
            <Consumer>
                {(value)=>{
                        if(value.track_list && value.track_list.length){
                            return (
                                <div>
                                    <h5 className='center'>{value.heading}</h5>
                                    {value.track_list.map((item)=>{  
                                        return <Track track={item.track} key={item.track.track_id}/>
                                    })}
                                </div>
                            )
                        }
                        else{
                            return <p className='center'>Loading...</p>
                        }
                }}
            </Consumer>
        </div>
    )
}

export default TrackList
