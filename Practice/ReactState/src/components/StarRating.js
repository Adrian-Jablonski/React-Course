import React, { Component } from "react";
import Star from './Star';

class StarRating extends Component {

  // Initialize a 'rating' state
  state = {
    rating: 0,
    mouseOverRating: 0
  }

  // Write a function that returns 5 Star components
  renderStars = () => {
    let stars = [];
    let maxRating = 5;

    // For loops are not supported inside of render method so this function needs to be passed inside of render instead
    for (let i = 0; i < maxRating; i++) {
      stars.push(
        <Star 
          isSelected={this.state.rating > i}
          isMoursedOver={this.state.mouseOverRating > i}
          handleClickStar={() => this.handleClickStar(i + 1)}
          handleMouseEnter={() => this.handleMouseEnter(i + 1)}
          handleMouseLeave={() => this.handleMouseLeave()}
          key={i}
        />
      );
    }
    return stars;
  }

  // Write an event handler that updates the rating state.
  handleClickStar = (star) => {
    if (this.state.rating === star) {
      this.setState({rating: 0})
    }
    else {
      this.setState({
        rating: star
      })
    }
  }

  handleMouseEnter = (star) => {
    this.setState({mouseOverRating: star});
  }

  handleMouseLeave = () => {
    this.setState({mouseOverRating: 0})
  }

  // Pass the function to a Star component via props
  
  render() {
    return (
      <ul className="course--stars">
        {/* Render the Star components */}
        { this.renderStars() }
      </ul>
    );
  }
}

export default StarRating;