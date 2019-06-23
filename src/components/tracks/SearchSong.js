import React, { Component } from 'react'
import {Consumer} from '../../context'
import axios from 'axios'

class SearchSong extends Component {
    state={
        name: ''
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit=(dispatch, e)=>{
        e.preventDefault();
        axios.get(`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_track=${this.state.name}&page_size=5&page=1&s_track_rating=desc&apikey=${process.env.REACT_APP_MM_KEY}`)
            .then(res=>{
                const track_list=res.data.message.body.track_list;
                this.setState({
                    name: ''
                })
                dispatch({type: 'SEARCH_SONG', track_list});
            })
            .catch((err)=>{
                console.log(err);
            })
    }
    render() {
        return (
            <div className='section search '>
                <h5 className='center'>Search Song</h5>
                <Consumer>
                    {(value)=>{
                        const {dispatch} = value;
                        return (
                            <form onSubmit={this.handleSubmit.bind(this, dispatch)}>
                                <div className="input-field center">
                                    <label htmlFor="name">Song Name</label>
                                    <input type="text" id='name' value={this.state.name} onChange={this.handleChange}/>
                                </div>
                                <div className="input-field">
                                    <button type='submit' className='btn btn-small'>Search</button>
                                </div>
                            </form>
                        )
                    }}
                </Consumer>
                   
                
            </div>
        )
    }
}

export default SearchSong

