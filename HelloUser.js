import React,{Component} from 'react'
export class HelloUser extends Component{
    constructor(){
        super()

        this.state = {
            msg:"You have not subscribed",
            val:'SUBSCRIBE'
        }
    }
    chngmessage(){
        this.setState({
            msg:"Hi you have subscribed",
            val:'SUBSCRIBE'
        })
    }
    render(){
        return{
        <div>{this.state.msg}</div>
        <button onclick={()=>this.chngmessage()}>{this.state.val}</button>
    }
}
