import React, { Component } from 'react';
import Child from './child.js';
import OtherChild from './child.js';

class Parent extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        fieldVal: ""
      }
    }
  
    onUpdate = (val) => {
      this.setState({
        fieldVal: val
      })
    };
  
    render() {
      return (
        <div>
          <h2>Parent</h2>
          Value in Parent Component State: {this.state.fieldVal}
          <br/>
          <Child onUpdate={this.onUpdate} />
        </div>
      )
    }
  }
  export default Parent;