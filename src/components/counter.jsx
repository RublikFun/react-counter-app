import React, { Component } from 'react';

class Counter extends Component { 
  componentDidUpdate(prevProps, prevState) {
    console.log('prevProps', prevProps);
    console.log('prevState', prevState);

    // if (prevProps.counter.value !== this.props.counter.value) {
    //   // Ajax call and get new data fron the server
    // }
  }

  componentWillUnmount() {
    console.log('Counter - Unmount')
  }

  render() {
    console.log('Counter - Rendered');    

    // Destructuring Arguments
    const {counter, onDelete, onIncrement, onDecrement} = this.props
    
    return (
      <div className="row">
        <div className="col-1">        
          <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        </div>
        <div className="col">
          <button 
            onClick={() => onIncrement(counter)} 
            className="btn btn-secondary btn-sm"
          >
          +
          </button>    
          <button 
            onClick={() => onDecrement(counter)} 
            className="btn btn-secondary btn-sm m-2"
            disabled={counter.value === 0 ? 'disabled' : ''} 
          >
          -
          </button>    
          <button 
            onClick={() => onDelete(counter.id)} 
            className="btn btn-danger btn-sm"
          >
          Delete
          </button>        
        </div>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = 'badge m-2 badge-';
    classes += (this.props.counter.value === 0) ? 'warning' : 'primary';
    return classes;
  }

  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? 'Zero' : count;
  }
}
 
export default Counter;