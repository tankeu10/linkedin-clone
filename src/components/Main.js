import React, {useEffect, useState} from 'react';
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import {doc, getDoc} from "firebase/firestore"
import {auth, database} from "../firebase/setup";



function Main(props) {
        const[userData, setUserData] = useState({});
    const getUser =    () => {
        setTimeout( async()=>{
            try {
                const userDocument = doc(database, "Users", `${auth.currentUser?.uid}`)
                const data = await getDoc(userDocument)
                setUserData(data)

            } catch (error) {
                console.log(error)
            }
        },1200)



    }

    useEffect(() => {
            getUser()
        },
        []);

    return (
        <div>
            <Navbar />
            <Home />
        </div>
    )

}

export default Main;