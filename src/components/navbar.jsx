import React, { Component } from 'react';

// stateless functional component

// visto que nosso componente não tem um state definido,
// podemos criar uma função ao invés de uma classe ao criar o componente
// o react vai passar as propriedades (props) por parâmetro

// algum devs usam esse método, mas é opcional

const Navbar = (props) => {
    return ( 
        <nav className="navbar navbar-light bg-light">
            <a href="" className="navbar-brand">
                My counters
                <span className="badge badge-pill badge-secondary">{props.totalCounters}</span>
            </a>
        </nav> 
     );
}
 
export default Navbar;


// classe antiga:

// class NavBar extends Component {
//     render() { 
//         return ( 
//             <nav className="navbar navbar-light bg-light">
//                 <a href="" className="navbar-brand">
//                     My counters
//                     <span className="badge badge-pill badge-secondary">{this.props.totalCounters}</span>
//                 </a>
//             </nav> 
//         );
//     }
// }
 
// export default NavBar;