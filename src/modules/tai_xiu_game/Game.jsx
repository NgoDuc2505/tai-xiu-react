import  { Component } from 'react'
import './game.css'
import XucXac from './XucXac'
import DetailGame from './DetailGame'

export default class Game extends Component {
  render() {
    return (
      <div className='main_Screen'>
        <h1 className='heading'>Game đổ xúc xắc</h1>
        <XucXac/>
        <DetailGame/>
      </div>
    )
  }
}
