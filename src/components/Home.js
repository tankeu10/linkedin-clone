import React from 'react';
import Sidebar from "../components/Sidebar";
import Middle from "../components/Middle";
import Rigtbar from "../components/Rightbar";
import Grid from "@mui/material/Grid";


function Home({userData}) {
    return (
        <div style={{backgroundColor:"#F4F4F4", height:"100vh", padding:"40px"}}>
            <Grid container spacing={4}>
                <Grid item xs={3}>
                    <Sidebar userData={userData}/>
                </Grid>
                <Grid item xs={6}>
                    <Middle userData={userData}/>
                </Grid >
                <Grid item xs={3}>
                    <Rigtbar />
                </Grid>
            </Grid>
        </div>
    );
}

export default Home;