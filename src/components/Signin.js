import React, {useState} from 'react';
import Grid from "@mui/material/Grid";
import linkedin from '../images/linkedin.png'
import {Button, TextField} from "@mui/material";
import dev from '../images/dev.jpg';
import { signInWithPopup} from 'firebase/auth';
import { auth,googleProvider, database} from "../firebase/setup";
import { doc,setDoc} from "firebase/firestore"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function  Signin(){

    const [username, setUsername]= useState("")
    const [description, setDescription]= useState("")

    const addUser = async ()=>{
        const userRef = doc( database, "Users", auth.currentUser?.uid)
        try{

            await setDoc(userRef, {
                username:username,
                email: auth.currentUser?.email
            })
        }catch (error){
            console.error(error)
        }
    }
    const signWithGoogle = async ()=>{
       !username  && toast.warning("please enter username")
        try{
            username && await signInWithPopup(auth, googleProvider)
            username && addUser()

        } catch(error){
            console.error(error);
        }
    }
    console.log(auth)
    return (
        <div>
            <Grid container>
                <Grid item xs={6} sx={{paddingLeft:"50px", paddingTop:"25px"}}>
                    <ToastContainer autoClose={2000} position="top-right"/>
                    <img style={{width:"130px"}} src={linkedin}  alt="Linkedin Logo"/>
                    <h2 style={{fontWeight:"100", fontSize:"60px", color:'brown'}}>Welcome to your professional community </h2>
                    <label style={{color:'grey'}}>Enter username</label>
                    <br/>
                    <TextField  onChange={(e)=> setUsername(e.target.value)}
                                    variant='outlined'
                                    label='username'
                                    sx={{width:"300px", mt:"5px"}}/>

                    <br/>
                    <TextField  onChange={(e)=> setDescription(e.target.value)}
                                variant='outlined'
                                label='Description'
                                sx={{width:"300px", mt:"5px"}}/>
                        <Button onClick={signWithGoogle}
                                size='large'
                                variant='contained'
                                sx={{width:"300px", borderRadius:"50px", mt:"5px", height:"25px"}}> Signin</Button>
                </Grid>
                <Grid item xs={6}>
                    <img style={{width:"500px"}} src={dev} alt="Developer working on a laptop"/>
                </Grid>
            </Grid>
        </div>
    )

}



export default Signin
