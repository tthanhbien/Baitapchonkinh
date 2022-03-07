import React, { Component } from 'react'
import {connect} from 'react-redux'
 class GlassItemt extends Component {
  render() {
      let {glass} = this.props;
    return (
      <div className='card'>
          <button onClick={()=>{
              this.props.glassDetail(glass);
          }} className='btn'>
            <img style={{width: 100}} className='mt-2' src={glass.url}></img>
            <p style={{fontSize:14,}} >{glass.name}</p>
            </button>
      </div>
    )
  }
}
const mapDispatchToProps = (dispatch) =>{
    return {
        glassDetail : (glass) =>{
            const action = {
                type: 'XEM_KINH',
                glass:glass
            }
            dispatch(action);
        }
    } 
}
export default connect(null,mapDispatchToProps)(GlassItemt)
