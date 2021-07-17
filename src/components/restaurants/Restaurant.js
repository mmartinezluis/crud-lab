import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer';

class Restaurant extends Component {
  render() {
    // console.log(this.props)
    const { restaurant } = this.props;
    return (
      <div>
        <li>
          {this.props.text}
          <button onClick={() => this.props.delete(this.props.id)}> X </button>
          <ReviewsContainer restaurant={this.props}/>
        </li>
      </div>
    );
  }
};

export default Restaurant;
