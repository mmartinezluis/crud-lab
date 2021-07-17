import React, { Component } from 'react';

class RestaurantInput extends Component {
  state = {
    text: ""
  }

  handleOnChange = event => {
    this.setState({
      text: event.target.value
    })
  }

  handleOnSubmit = event => {
    // console.log(this.state)
    event.preventDefault()
    this.props.addRestaurant( this.state.text )
    this.setState({ text: "" })
  }


  render() {
    return (
      <div>
        Restaurant Input
        <form onSubmit={this.handleOnSubmit}>
          <input type="text" name="text" id="text" onChange={this.handleOnChange} value={this.state.text}/>
          <input type="submit" />
        </form>
      </div>
    
    );
  }
};

export default RestaurantInput;
