import React from 'react';
import NavBar from '../../components/Navbar/Navbar';

const Layout=(props)=>(
<div style={{backgroundColor:"#eceff1"}}>
<NavBar></NavBar>

 {props.children}

 </div>

)

export default Layout;