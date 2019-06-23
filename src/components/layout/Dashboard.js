import React, { Component } from 'react'
import TrackList from '../tracks/TrackList'
import SearchSong from '../tracks/SearchSong'
import Navbar from './Navbar'

class Dashboard extends Component {
    render() {
        return (
            <div className='Dashboard'>
                <Navbar/>
                <SearchSong/>
                <TrackList/>
            </div>
        )
    }
}

export default Dashboard

