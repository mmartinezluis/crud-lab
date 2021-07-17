import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {

  state = {
    text: "",
    restaurantId: this.props.restaurantId
  }

  handleOnSubmit = event => {
    event.preventDefautl()
    debugger
    // console.log(this.state)
    this.props.addReview(this.state)
    this.setState({...this.state, text: ""})
  }

  handleOnChange = event => {
    this.setState({
      text: event.target.value
    })
  }

  render() {
    // debugger
    return (
      <div>
        <span>Review Input</span>
        <form onSubmit={this.handleOnSubmit} >
          <input type="text" onChange={this.handleOnChange} value={this.state.text} />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default ReviewInput;
