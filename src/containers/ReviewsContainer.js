import React, { Component } from 'react';
import ReviewInput from '../components/reviews/ReviewInput';
import Reviews from '../components/reviews/Reviews';
import { connect } from 'react-redux'


class ReviewsContainer extends Component {

  render() {
    return (
      <div>
        <ReviewInput 
          restaurantId = {this.props.restaurant.id} 
          addReview = {this.props.addReview} 
        />
        <Reviews 
          reviews = {this.props.reviews} 
          deleteReview={this.props.deleteReview} 
          restaurantId = {this.props.restaurant.id}  
        />
      </div>
    )
  }
}

const mapStateToProps = state => {
  // debugger
  return {
    reviews: state.reviews //.filter( review => review.restaurantId === this.props.restaurant.id)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addReview: review => dispatch({ type: 'ADD_REVIEW', review}),
    deleteReview: id => dispatch({ type: 'DELETE_REVIEW', id})
  }
}

export default connect(mapStateToProps, mapDispatchToProps )(ReviewsContainer);

