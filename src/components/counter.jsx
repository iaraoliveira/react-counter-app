import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.counter.value
  };

  render() {
    return (
      <React.Fragment>
        <div>
          <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
          <button onClick={this.handlerIncrement} className="btn btn-secondary btn-sm">Click Me!</button>
          <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
        </div>
      </React.Fragment>
    );
  }
  

  handlerIncrement = () => {
    this.setState({value: this.state.value + 1});
  }

  getBadgeClasses(){
    let classes = "badge md-2 m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";

    return classes

  }

  formatCount(){
    let n = this.state.value;
    return (n === 0)? "Zero": n;
  }
}

export default Counter;
