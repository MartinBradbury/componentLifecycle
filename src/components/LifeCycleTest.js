import React, { Component } from 'react'
import LifeCycleTestChild from './LifeCycleTestChild'

export class LifeCycleTest extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         data: 'Loading',
         conosole: console.log("Constructor 1")
      }
    }


    getData() {
        setTimeout(() => {
            this.setState({
                data: 'Loaded'
                
            })
        }, 3000)
        console.log("getdata 3")
    }

    componentDidMount() {
        console.log("mount 2")
        this.getData()
        
    }




  render() {
    return (
      <div>
        {this.state.data}
        <LifeCycleTestChild />
      </div>
      
    )
  }
}

export default LifeCycleTest