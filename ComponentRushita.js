import React, { Component } from 'react'

 class  ComponentRushita extends Component    {
    constructor(props){
        super(props)

        console.log("Component Rushita Constructor()")
        this.state={
            name:"Rushita"
        }
    }
    updateName=()=>{
        this.setState({
            name:"Rushita"
        })
    }

    static getDrivedStateFromProps(props){
        console.log("Component Rushita getDrivedstateFromPrpos()")
        return null;
    }
  render() {
    console.log("Compunent Rushita render()")

    return (
      <>
      <h3>WELCOME REACT</h3>
      <button onClick={this.updateName}>CLICK ME</button>
      </>
      


    

    )
  }
}
export default ComponentRushita
