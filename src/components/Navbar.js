import React from 'react';
import Grid from "@mui/material/Grid";
import logo from '../images/logo.png'
import glass from '../images/glass.jpg'
import home from '../images/home.jpg'
import message from '../images/message.png'
import network from '../images/network.png'
import profil from '../images/profil.jpg'


function Navbar() {
    return (
        <div style={{padding:"10px", borderBottom:"1px solid #F5F5F5"}}>
            <Grid container>
                <Grid items xs={6}>
                    <img style={{width: "25px", marginLeft:"80px"}} src={logo} alt=" petit logo"/>
                    <img style={{width: "25px", marginLeft:"20px"}} src={glass} alt="glass logo"/>
                </Grid>
                <Grid items xs={6}>
                    <img style={{width: "25px", marginLeft:"20px"}} src={home} alt="home logo"/>
                    <img style={{width: "25px", marginLeft:"20 px"}} src={message} alt="message logo"/>
                    <img style={{width: "25px", marginLeft:"20 px"}} src={network} alt="network logo"/>
                    <img style={{width: "25px", marginLeft:"20 px"}} src={profil} alt="profil logo"/>
                </Grid>
            </Grid>

        </div>
    );
}


export default Navbar;