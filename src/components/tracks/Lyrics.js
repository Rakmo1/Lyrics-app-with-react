import React, { Component } from 'react'
import axios from 'axios'

class Lyrics extends Component {
    state={
        lyrics: '',
        track: null
    }
    componentDidMount(){
        axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${this.props.match.params.id}&apikey=${process.env.REACT_APP_MM_KEY}`)
        .then(res=>{
            this.setState({
                lyrics: res.data.message.body.lyrics.lyrics_body
            })
            return axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.get?track_id=${this.props.match.params.id}&apikey=${process.env.REACT_APP_MM_KEY}`)
        })
        .then((res)=>{
            this.setState({
                track: res.data.message.body.track
            })
        })
        .catch(err=>{
            console.log(err);
        })
    }
    render() {
        const content = (this.state.track && this.state.lyrics.length)?(
            <div>
                <p>Song By <strong>{this.state.track.artist_name}</strong></p>
                <p className='card-lyrics'>{this.state.lyrics}</p>
                <ul className="collection">
                    <li className="collection-item">Song: {this.state.track.track_name}</li>
                    <li className="collection-item">Album: {this.state.track.album_name}</li>
                    <li className="collection-item">Genre: {(this.state.track.primary_genres.music_genre_list[0])?this.state.track.primary_genres.music_genre_list[0].music_genre.music_genre_name:'None'}</li>
                    <li className="collection-item">Explicit: {this.state.track.explicit?'Yes':'No'}</li>   
                </ul>
            </div>
        ):(
            <p className='center'>Loading...</p>
        )
        return (
            <div className='lyrics section card z-depth-0'>
                <div className="card-content">
                    {content}
                </div>  
            </div>
        )
    }
}

export default Lyrics