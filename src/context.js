import React, { Component, createContext } from 'react'
import axios from 'axios'

const reducer=(state, action)=>{
    switch(action.type){
        case 'SEARCH_SONG':
            return {
                ...state,
                heading: 'Search Results',
                track_list: action.track_list
            }
        case 'GET_CHARTS':
            return {
                ...state,
                heading: 'Top 10 tracks',
                track_list: action.track_list
            }
        default: 
            return state;
    }
}
export const Context = createContext();
class Provider extends Component {
    state={
        track_list: [],
        heading: 'Top 10 tracks',
        dispatch: (action)=>{this.setState(state=>reducer(state,action))}
    }
    componentDidMount(){
        axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&country=us&f_has_lyrics=1&apikey=${process.env.REACT_APP_MM_KEY}`)
        .then(res=>{
            this.setState({
                track_list: res.data.message.body.track_list
            })
        })
        .catch(err=>{
            console.log(err);
        })
    }
    
    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

const Consumer=Context.Consumer;

export { Provider, Consumer }