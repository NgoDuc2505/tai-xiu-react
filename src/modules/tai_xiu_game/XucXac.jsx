import { Component } from 'react'
import { connect } from 'react-redux'

class XucXac extends Component {
  render() {
    let { detailGet } = this.props;
    return (
        <div className="option">
        <button className='btnOption'
        onClick={()=>{
            const action ={
                type:'chon_Xuc_Xac',
                payload:true,
            }
            this.props.dispatch(action)
        }}
        >Tài</button>
        <div className="xucXacGr">
            {detailGet.xucXac.map((item,index)=>{
                return(<img key={index} src={item.img} alt={index} />)
            })}
        </div>
        <button className='btnOption'
        onClick={()=>{
            const action ={
                type:'chon_Xuc_Xac',
                payload:false,
            }
            this.props.dispatch(action)
        }}>Xỉu</button>
    </div>
    )
  }
}

const mapStateToProp = (rootReducer)=>{
    return {
        detailGet: rootReducer.gameReducer,
    }
}


export default connect(mapStateToProp)(XucXac)