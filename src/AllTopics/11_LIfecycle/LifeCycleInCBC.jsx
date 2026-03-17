import React, {Component} from "react";

export default class LifeCycleInCBC extends Component {
    constructor(){  //~1
        super();
        console.log("I am constructor");
        this.state = {count: 0}
    }

    increment = () =>{
        this.setState((prev)=>({count: prev.count+1,})) //& pass this inside () or else it will be seen as an expr not obj
    }
    
    componentDidMount(){
        console.log("component mounted succesfully");
        this.id = setInterval(() => {
            console.log("API Call");
        }, 2000);
    }

    componentDidUpdate(){
        console.log("comp update succesfully")
    }

    componentWillUnmount(){
        console.log("comp unmounted");
        clearInterval(this.id);
    }

    render(){ //~2
        console.log("I'm render");

        return (
    <div  className="p-5">
        <h1 className="text-center text-4xl">Learn Life-Cycle of ClassBasedComponent {this.state.count}</h1>
        <button onClick={this.increment}>increment</button>
    </div>
)
    }
}




