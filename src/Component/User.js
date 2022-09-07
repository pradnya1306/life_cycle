
import axios from 'axios'
import React, { Component } from 'react' 


export default class user extends Component {
    constructor(){
        super()
        this.state={
            counter:1,
            post:[]
            
        }
    }
    componentDidMount(){
        axios.get(`https://jsonplaceholder.typicode.com/posts/${this.state.counter}`)
        .then(responce=>{
                // console.log(responce)
                this.setState({post:responce.data})
                // console.log(this.state.post);
        })
        // console.log("componentDidMount")
    }


    componentDidUpdate(){
    
             axios.get(`https://jsonplaceholder.typicode.com/posts/${this.state.counter}`)
            .then(responce=>{
                   this.setState({post:responce.data})
            })
        
    //     console.log("componentDidUpdate");
        

    }
    increase=()=>{
        this.setState({counter:this.state.counter+1})
    }

    decrease=()=>{
        this.setState({counter:this.state.counter-1})
    }
  render() {

    return (
        <div className='maindiv'>
             {/* {this.state.post.map(ele=>{
                    
                return(
                <div>
                <h1>{ele.title}</h1>
                <p>{ele.body}</p>
                </div>
                )
            
            })} */}
            <h1>{this.state.post.title}</h1>
            <p>{this.state.post.body}</p>
            <hr></hr>
            <h1>Post :-{this.state.counter}</h1>
            <button className='btn' onClick={this.increase}>Increase</button>
            <button  className='btn' onClick={this.decrease}>Decrease</button>
        </div>
    )
  }
}

