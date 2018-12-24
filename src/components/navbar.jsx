import React, { Component } from 'react';

class NavBar extends Component {
    render() { 
        return ( 
            <nav className="navbar navbar-light bg-light">
                <a href="" className="navbar-brand">
                    My counters
                    <span className="badge badge-pill badge-secondary">{this.props.totalCounters}</span>
                </a>
            </nav> 
        );
    }
}
 
export default NavBar;