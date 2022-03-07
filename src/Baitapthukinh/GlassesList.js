import React, { Component } from 'react'
import GlassItemt from './GlassItemt';

export default class GlassesList extends Component {
    renderGlasses = () =>{
        let {dataGlasses} = this.props;
        return dataGlasses.map((glass,index)=>{
            return <div className='col-3 mt-2' key={index}>
                    <GlassItemt glass={glass}/> 
                </div>
        })
    }
  render() {
    return (
      <>
          {this.renderGlasses()}
      </>
    )
  }
}
