import React, {useEffect} from 'react';
import styles from './styles.module.scss'

const NotesAlert = ({type, msg, removeAlert, list}) =>{
    useEffect(()=>{
        const timeout = setTimeout(()=>{
            removeAlert();
        },3000)
        return () => clearTimeout(timeout);
    },[list])
    return <p className={styles.alert}>{msg}</p>
}

export default NotesAlert;