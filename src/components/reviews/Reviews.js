import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {

    const restaurantReviews = this.props.reviews.filter (review => review.restaurantId === this.props.restaurantId)

    const reviews = restaurantReviews.map( (review,index) => 

      <Review 
          key={index} 
          review = {review}
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