// Write your code here
import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {activeIndex: 0}

  onClickRight = () => {
    const {reviewsList} = this.props
    const {activeIndex} = this.state

    if (activeIndex < reviewsList.length - 1) {
      this.setState(prev => ({activeIndex: prev.activeIndex + 1}))
    }
  }
  onClicklift = () => {
    const {activeIndex} = this.state
    if (activeIndex > 0) {
      this.setState(prev => ({activeIndex: prev.activeIndex - 1}))
    }
  }

  render() {
    const {reviewsList} = this.props
    const {activeIndex} = this.state
    const currentData = reviewsList[activeIndex]
    const {imgUrl, username, companyName, description} = currentData
    return (
      <div className="app-container">
        <h1 className="username-para">Reviews</h1>
        <div className="button-container">
          <button
            type="button"
            onClick={this.onClicklift}
            data-testid="leftArrow"
            className="button-style"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>
          <div className="review-Data">
            <img src={imgUrl} alt={username} />
            <p className="username-para">{username}</p>
            <p className="companyName-style">{companyName}</p>
            <p className="description-style">{description}</p>
          </div>
          <button
            onClick={this.onClickRight}
            data-testid="rightArrow"
            type="button"
            className="button-style"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}
export default ReviewsCarousel
