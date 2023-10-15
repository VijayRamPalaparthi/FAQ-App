// Write your code here.
import {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  state = {isHide: true}

  onChangeA = () => {
    this.setState(prev => ({
      isHide: !prev.isHide,
    }))
  }

  render() {
    const {listItem} = this.props
    const {isHide} = this.state
    const {questionText, answerText} = listItem

    const imageUrl = isHide
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
    const altName = isHide ? 'plus' : 'minus'

    return (
      <li className="listItem-container">
        <div className="q-container">
          <h1 className="q-heading">{questionText}</h1>
          <button className="button" type="button" onClick={this.onChangeA}>
            <img src={imageUrl} alt={altName} className="image" />
          </button>
        </div>
        {isHide ? null : (
          <div className="a-container">
            <hr className="horizontal-line" />
            <p className="answer">{answerText}</p>
          </div>
        )}
      </li>
    )
  }
}

export default FaqItem
