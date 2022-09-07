import React from "react";


class Child extends React.Component{
    constructor(){
        super()
        this.state={
            number:0
        }
    }
    change=()=>{
        this.setState({number:this.state.number+1})
    }
    componentDidMount(){
        console.log("componentDidMount");
    }
    componentDidUpdate(preProps,preState){
        // if(preState.number!==this.state.number){
        console.log("componentDidUpdate");
        // }
    }
    componentWillUnmount(){
        console.log("componentWillUnmount");
    }
    render(){
        return(
            <>
            <h1>{this.state.number}</h1>
            <button onClick={this.change}>increment</button>
            </>
        )
    }
}

export default Child;