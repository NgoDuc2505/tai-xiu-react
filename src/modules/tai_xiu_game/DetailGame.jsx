import { Component } from 'react'
import { connect } from 'react-redux'
class DetailGame extends Component {
  render() {
    const { detailGet } = this.props;
    return (
        <div className="detail_game">
        <h3>BẠN CHỌN: <span className='choose'>{detailGet.banChon ? 'Tài' : 'Xỉu'}</span></h3>
        <p>Só bàn thắng: <span className='win'>{detailGet.win}</span></p>
        <p>Tổng số màn chơi: <span className='ground'>{detailGet.ground}</span></p>
        <button className='play'
            onClick={()=>{
                const action ={
                    type:'play_game',
                    payload: detailGet.banChon,
                }
                this.props.dispatch(action)
            }}
        >Play game</button>
    </div>
    )
  }
}

const mapStateToProp = (rootReducer)=>{
    return {
        detailGet: rootReducer.gameReducer,
    }
}
export default connect(mapStateToProp)(DetailGame)