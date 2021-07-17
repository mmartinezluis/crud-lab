import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {
  
  render() {
    // console.log(this.props)
    const renderRestaurants = this.props.restaurants.map( (restaurant,index) => <Restaurant key={index} restaurant ={restaurant} delete={this.props.deleteRestaurant} />)
    return(
      <ul>
        {renderRestaurants}
      </ul>
    );
  }
};

export default Restaurants;