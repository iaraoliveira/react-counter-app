import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: ["this is a tag", "this is another tag", "and.. look!", "another one"]
  };

  render() {
    return (
      <React.Fragment>
        <div>
          <ul>{this.renderTags()}</ul>
          {this.state.tags.length === 0 && "Please, insert a new tag."}
        </div>
        <span className="">{this.formatCount()}</span>
        <button onClick={this.handlerIncrement} className="btn btn-secondary btn-sm">Click Me!</button>
      </React.Fragment>
    );
  }
  

  handlerIncrement = () => {
    this.setState({count: this.state.count + 1});
  }

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags</p>;

    return this.state.tags.map(tag => <li key={tag}>{tag}</li>);
  }

  getBadgeClasses(){

  }

  formatCount(){
    let n = this.state.count;
    return (n === 0)? "Zero": n;
  }
}

export default Counter;
