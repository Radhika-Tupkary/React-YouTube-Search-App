import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import SearchBar from './components/search_bar'
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'
import YTSearch from 'youtube-api-search';
const API_KEY = 'AIzaSyA_MuUS8j-XU-3N_65gS6c9iF5mScTaoJY';


class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {videos: [], selectedVideo: null};

        this.videoSearch('');
    }

    render(){
        return(
            <div>
                <SearchBar onSearchTermChange={(searchTerm) => this.videoSearch(searchTerm)}/>
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList videos = {this.state.videos} onVideoSelect = {(video) => this.setState({selectedVideo:video})}/>
            </div>
        );
    }

    videoSearch(searchTerm) {
        YTSearch({key:API_KEY, term: searchTerm}, (videos) => {
            this.setState({videos:videos, selectedVideo: videos[0]});
        });
    }

}

ReactDOM.render(<App />, document.querySelector('.container'));
