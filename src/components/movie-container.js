import React from 'react';
import 'whatwg-fetch';
import MovieSearch from './movie-search';
import MovieList from './movie-list';


class MovieContainer extends React.Component {
  constructor(props){
    super(props);
    this.state={
      movie:[]
    }
  }


  componentWillMount() {
    this._fetchMovie();
  }

_fetchMovie(searchTerm) {

    if (searchTerm) {
      fetch(`//www.omdbapi.com/?t=${searchTerm}`)
      .then((response) => {
        return response.json()
      })
      .then((results) => {
        console.log(results);
        this.setState({
         movie: results
        })
      })
      .catch((ex) => {
        console.log('parsing failed', ex)
      })
  }
}

  render(){
    return (<div>
      <MovieSearch search={this._fetchMovie.bind(this)}/>
      <MovieList movie={this.state.movie}/>
    </div>)
  }
}

export default MovieContainer;
