import React from "react";
class Greeting extends React.Component{
    render(){
        return <b>Welcome {this.props.name} ,from Greeting2 class component</b>
    }
}

export default Greeting