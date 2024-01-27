// Write your code here

import {Component} from 'react'
import './index.css'

const headImgUrl = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const tailImgUrl = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {
    tossResultImg: headImgUrl,
    headsCount: 0,
    tailsCount: 0,
  }

  onClickButton = () => {
    const {headsCount, tailsCount} = this.state
    const tossResult = Math.floor(Math.random() * 2)
    let tossImage = ''
    let newHeadsCount = headsCount
    let newTailsCount = tailsCount
    if (tossResult === 0) {
      tossImage = headImgUrl
      newHeadsCount += 1
    } else {
      tossImage = tailImgUrl
      newTailsCount += 1
    }

    this.setState({
      tossResultImg: tossImage,
      headsCount: newHeadsCount,
      tailsCount: newTailsCount,
    })
  }

  render() {
    const {tossResultImg, headsCount, tailsCount} = this.setState
    const totalCount = headsCount + tailsCount

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="para">Heads (or) Tails</p>
          <div className="img-container">
            <img src={tossResultImg} alt="toss result" />
          </div>
          <button type="button" className="button" onClick={this.onClickButton}>
            Toss Coin
          </button>

          <div className="bottom-container">
            <p>Total:{totalCount}</p>
            <p>Heads:{headsCount}</p>
            <p>Tails:{tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
