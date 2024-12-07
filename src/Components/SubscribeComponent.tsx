"use client";
import Image from 'next/image';
import React, { useState } from 'react';
import Styles from './Navbar.module.css'
import { Button, TextField } from '@mui/material';
import profilepic from '../../public/logogifbg.gif'
const SubscribeComponent=()=>{
    const [email,setEmail]=useState('');
    const [name,setName]=useState('');

    return(
       <div className={`${Styles.d_flex} ${Styles.subscribeComponentbackground}`}>
        <div>
            <Image width={200} height={200} src={profilepic} alt='profilepic'/>
        </div>
        <div className={Styles.heading}>
         Beautiful Products,<br/>  of your niche!.
        </div>
        <div>
        <TextField placeholder='First Name' className={Styles.textField} value={name} onChange={(event)=>setName(event.target.value)} variant='outlined'/ >
        <TextField placeholder='Email' className={Styles.textField} value={email} onChange={(event)=>setEmail(event.target.value)} variant='outlined'/ >
            <div style={{textAlign:'center'}}>
            <Button className={Styles.yesimin}>Yes,I'm IN</Button>
            </div>
        
        </div>
       </div>
    );
}
export default SubscribeComponent