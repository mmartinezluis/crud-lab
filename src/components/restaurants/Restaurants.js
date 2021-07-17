import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {
  
  render() {
    // console.log(this.props)
    const renderRestaurants = this.props.restaurants.map( restaurant => <Restaurant key={restaurant.id} id ={restaurant.id} text={restaurant.text} delete={this.props.deleteRestaurant} />)
    return(
      <ul>
        {renderRestaurants}
      </ul>
    );
  }
};

export default Restaurants;