import React from 'react'
import { useState } from 'react'
import styles from './ToggleButton.module.css'
const ToggleButton = () => {
    const [isOn, setIsOn] =  useState(false);
    const handleOnCLick = () =>{
        setIsOn(!isOn)
    }
  return (
    <div className={styles.container}>
        <div className={styles['btn-container']}>
            <button className={`${styles.togglebtn} ${isOn ? 'on' : 'off'}`} onClick={handleOnCLick}>{isOn ? 'On' : 'Off'}</button>
        </div>
    </div>
  )
}

export default ToggleButton