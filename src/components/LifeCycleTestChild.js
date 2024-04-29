import React, { Component } from 'react'

export class LifeCycleTestChild extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         data: 'Loading Child',
         conosole: console.log("ConstructorChild 1")
      }
    }


    getData() {
        setTimeout(() => {
            this.setState({
                data: 'Loaded Child'
                
            })
        }, 3000)
        console.log("getdataChild 3")
    }

    componentDidMount() {
        console.log("mountChild 2")
        this.getData()
        
    }




  render() {
    return (
      <div>{this.state.data}
      </div>
      
    )
  }
}

export default LifeCycleTestChild