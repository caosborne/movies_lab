import React from 'react';
import Movie from './movie';

class MovieList extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div>
      <Movie movie={this.props.movie}/>

      </div>
    );
  }
}

export default MovieList;

