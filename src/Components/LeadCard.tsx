'use client';
import { Button, Card, CardActions, CardContent, Dialog, DialogContent, TextField } from '@mui/material';
import React, { FunctionComponent, useEffect, useState } from 'react';
import Fade from '@mui/material/Fade';
import styles from './Navbar.module.css'
const LeadComponent = () => {
    const [email, setEmail] = useState('');
    const [openModal, setOpenModal] = useState(false);
    const [error,setError]=useState('');
    const setMail = (event: any): void => {
        let value: string = event.target.value;
        setEmail(value)
    }
    const submitResponse=()=>{
        let validmail = RegExp("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$");
        if(email.length==0 || validmail.test(email)){
           setError('please enter valid Email');
        }
        else{
            setError('')
        }
    }
    useEffect(() => {
        setTimeout(() => {
            setOpenModal(true)
        }, 2000)
    }, [])
    return (
        openModal && (<Card className={`${styles.leadcard} ${styles.leadmodal}`} sx={{ maxWidth: 500 }} >
            <CardContent >
                <p className={styles.leadpara}>Level up your partner discovery.Get Best offer from Dono Promote</p>
                <p className={styles.leadpara} style={{ textAlign: 'left' }}>Please enter your email.</p>
                <TextField className={styles.textField} value={email} onChange={setMail} variant='outlined' >

                </TextField>
                {error && <p style={{color:'white'}}>{error}</p>}
                <Button className={styles.newsletter} onClick={submitResponse} variant='contained'>
                    Get News Letter
                </Button>
            </CardContent>
            <CardActions >
                <Button className={styles.actionButton} onClick={()=>setOpenModal(false)} size="small">Close</Button>
                <Button className={styles.actionButton} size="small"> Open</Button>
            </CardActions>
        </Card>)
       
   );
}
export default LeadComponent;