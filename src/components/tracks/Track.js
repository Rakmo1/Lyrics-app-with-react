import React from 'react'
import {Link} from 'react-router-dom'

function Track(props) {
    const {track}=props;
    return (
        <div className='col m6 track'>
                <div className="card z-depth-0 center">
                    <div className="card-content black-text">
                        <strong><p >{track.track_name}</p></strong> 
                        <p>Artist: {track.artist_name}</p>
                        <p>Album: {track.album_name}</p>
                        <Link to={'/lyrics/'+track.track_id} className='btn btb-large'>> View Lyrics</Link>
                    </div>
                </div>
        </div>
        
    )
}

export default Track

