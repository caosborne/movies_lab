import React from 'react';

class Movie extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return (<div>
      <h3>{this.props.movie.Title}</h3>
      <img src={this.props.movie.Poster}/>
      <p>{this.props.movie.Released}</p>
      <p>{this.props.movie.Plot}</p>
      <p>{this.props.movie.Rated}</p>

    </div>)
  }
}

export default Movie;

