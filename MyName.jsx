import React, { Component } from 'react'
import './Style.css'
export class MyName extends Component{
  render(){
    const Rushita={
      fontFamily:"Arial Black",
      texttransdorm:"uppercase",
      textShadow:"0px,0px,20px,red"
    }
    return(
      <div>
        <h1 className='myname'>Hello rushita</h1>
        <h1 style={Rushita}>Rushita</h1>
        <h1 style={{color:"cyan",fontFamily:'cursive'}}>sakshi</h1>
      </div>
    )
  }
}
export  default MyName