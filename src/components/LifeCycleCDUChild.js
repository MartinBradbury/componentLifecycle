import React, { Component } from 'react'

export class LifeCycleCDUChild extends Component {
    constructor(props) {
        console.log('Constructor Updated Child')
      super(props)
    
      this.state = {
         greeting: "Hello"
      }
    }

    updateGreeting = () => {
        console.log('updated Greeting Called Child')
        this.setState(prevState => {
            return{
                greeting: prevState.greeting === "Hello" ? "Goodbye" : "Hello"
            }
        })
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("Component Updated Child")
        console.log("prevProps", prevProps)
        console.log("prevState", prevState)
        if (prevProps.parentGreeting !== this.props.parentGreeting){
            console.log("Parent Greeting has changed.")
        }
     
    }


  render() {
    console.log('render Method Child')
    return (
      <div>
        <h1>{this.state.greeting}</h1>
        <button onClick={this.updateGreeting}>Update Greeting</button>
        </div>
    )
  }
}

export default LifeCycleCDUChild