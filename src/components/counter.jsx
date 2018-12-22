import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0
  };

  render() {
    return (
      <React.Fragment>
        <div>
          <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
          <button onClick={this.handlerIncrement} className="btn btn-secondary btn-sm">Click Me!</button>
        </div>
      </React.Fragment>
    );
  }
  

  handlerIncrement = () => {
    this.setState({count: this.state.count + 1});
  }

  getBadgeClasses(){
    let classes = "badge md-2 m-2 badge-";
    classes += this.state.count == 0 ? "warning" : "primary";

    return classes

  }

  formatCount(){
    let n = this.state.count;
    return (n === 0)? "Zero": n;
  }
}

export default Counter;
