import React, { Component } from "react";

class Counter extends Component {

  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-1">
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
          </div>
          <div className="col">
            <button onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-secondary px-3 btn-sm"> + </button>
            <button onClick={() => this.props.onDecrement(this.props.counter)} className="btn btn-secondary px-3 m-2 btn-sm" disabled={this.props.counter.value === 0}> - </button>
            <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger px-3 btn-sm"> Delete </button>
          </div>
        </div>
      </React.Fragment>
    );
  }


  getBadgeClasses(){
    let classes = "badge md-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";

    return classes

  }

  formatCount(){
    let n = this.props.counter.value;
    return (n === 0)? "Zero": n;
  }
}

export default Counter;
