import React from "react";

import "./styles.css";

const Header = () => <header id="main-header">JSHunt</header>;

export default Header;

// Estruturas Equivalentes:

// class Header extends Component {
//     render(){
//         return <h1>Hello</h1>
//     }
// }
// Esse modelo eh usado quando se tem estados

// const Header = () => (
//     <h1>Hello</h1>
// );
