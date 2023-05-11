// Write your code here
import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {
    isTimeRunning: false,
    seconds: 0,
  }

  onClickStop = () => {
    clearInterval(this.timerID)
  }

  onClickStart = () => {
    this.timerID = setInterval(this.tick, 1000)
    this.setState({isTimeRunning: true})
  }

  onClickRestart = () => {
    clearInterval(this.timerID)
    this.setState({
      seconds: 0,
      isTimeRunning: false,
    })
  }

  tick = () => {
    this.setState(prev => ({
      seconds: prev.seconds + 1,
    }))
  }

  minutesTimer = () => {
    const {seconds} = this.state
    const min = Math.floor(seconds / 60)
    if (min < 10) {
      return `0${min}`
    }
    return min
  }

  secondsTimer = () => {
    const {seconds} = this.state
    const sec = Math.floor(seconds % 60)
    if (sec < 10) {
      return `0${sec}`
    }
    return sec
  }

  render() {
    const {isTimeRunning} = this.state
    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="stopwatch">Stopwatch</h1>
          <div className="timer-container">
            <div className="timer-text">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
                className="image"
              />
              <p className="timer">Timer</p>
            </div>

            <h1 className="stopwatch">{`${this.minutesTimer()}:${this.secondsTimer()}`}</h1>
            <div className="btn-container">
              <button
                type="button"
                className="button start"
                onClick={this.onClickStart}
                disabled={isTimeRunning}
              >
                Start
              </button>
              <button
                type="button"
                className="button stop"
                onClick={this.onClickStop}
              >
                Stop
              </button>
              <button
                type="button"
                className="button reset"
                onClick={this.onClickRestart}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
