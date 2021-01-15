import { Container } from '@material-ui/core';
import React from 'react';
// import FilterComp from '../../components/FilterComp/FilterComp';
import NavBar from '../../components/Navbar/Navbar';

const Layout=(props)=>(
<div style={{backgroundColor:"#eceff1"}}>
<NavBar></NavBar>

 {props.children}

 </div>

)

export default Layout;