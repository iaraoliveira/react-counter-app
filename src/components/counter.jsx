import React, { Component } from "react";

class Counter extends Component {

  render() {
    return (
      <React.Fragment>
        <div>
          <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
          <button onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm">Click Me!</button>
          <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
        </div>
      </React.Fragment>
    );
  }


  getBadgeClasses(){
    let classes = "badge md-2 m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";

    return classes

  }

  formatCount(){
    let n = this.props.counter.value;
    return (n === 0)? "Zero": n;
  }
}

export default Counter;
