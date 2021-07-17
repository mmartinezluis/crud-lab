import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const reviews = this.props.reviews.map( review => 
      <Review 
          key={review.id} 
          text={review.text} 
          id={review.id} 
          deleteReview={this.props.deleteReview}
      />)
    
    
    return (
      <ul>
        Reviews
        {reviews}
      </ul>
    );
  }
};

export default Reviews;