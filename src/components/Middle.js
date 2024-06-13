import React from 'react';
import profil from '../images/profil.jpg';
import {Card, CardContent, CardMedia, TextField, Typography} from "@mui/material";
import information from "../images/information.jpg";
import evenement from "../images/evenement.png";
import image from "../images/image.png";
import it from "../images/it.jpg";

function Middle(props) {
    return (
        <div>
            <div style={{backgroundColor: "white", padding: "20px", borderRadius: "10px"}}>
                <img style={{width: "70px"}} src={profil}/>
                <TextField variant="outlined" label="Start a post" style={{width: "450px", marginLeft: "20px"}}
                           InputProps={{sx: {borderRadius: 300}}}/>
                <img style={{width: "40px", marginLeft:"275.65px"}} src={image}/>
                <img style={{width: "30px", marginLeft:"150px"}} src={evenement}/>
                <img style={{width: "30px", marginLeft:"150px"}} src={information}/>

            </div>
            <div style={{paddingTop:"20px"}}>
                <Card>
                    <CardContent>
                        <div style={{display:"flex"}}>
                            <img src={profil} style={{width: "40px"}}/>
                            <div style={{marginLeft:"10px"}}>
                                <Typography>Name</Typography>
                                <Typography sx={{color:"#BFBFBF"}}>Description</Typography>
                            </div>
                        </div>
                            <h5>Description</h5>

                    </CardContent>
                    <CardMedia component="img"
                               height={250}
                               image={it}>

                    </CardMedia>
                </Card>
            </div>
        </div>
    );
}

export default Middle;