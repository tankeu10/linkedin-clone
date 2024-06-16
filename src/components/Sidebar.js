import React from "react";
import reactjs from "../images/reactjs.png";
import profil from "../images/profil.jpg";

function sidebar({userData}) {


    return(
        <div style={{backgroundColor:"white",border:"1px solid #F5F5F5", width:"210px",height:"470px",borderRadius:"15px"}}>
            <img style={{height:"70px",width: "210.5px", borderTopRightRadius:"15px",borderTopLeftRadius:"15px"}} src={reactjs}/>
            <div style={{position:"relative", left:"37%"}}>
                <img src={profil} style={{width: "70px",borderRadius:"40px"}} alt="profil logo"/>
                <h3 style={{position:"relative", left:"2%" ,color: "#9B9B9B"}}></h3>
            </div>
            <h4 style={{position:"relative", left:"30%" ,color: "#9B9B9B"}}></h4>
            <div style={{color:"#9B9B9B",borderTop:"1px solid #F5F5F5", paddingLeft:"10px "}}>
                <h5 style={{fontWeight:"100"}}>Connections</h5>
                <h5 style={{fontWeight:"100"}}>Invitations</h5>
            </div>

        </div>
    )
}

export default sidebar