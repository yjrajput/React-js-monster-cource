import styles from './ToggleBackgroundChange.module.css'
import { UseCustomhook } from './Context'
const ToggleBackgroundChange = () => {
    const {change, handleOnCLick} = UseCustomhook();
  return (
    <div className={`${styles.container} ${change ? 'black' : 'white'}`}>
        <h1 className={styles.heading}>Hello Wolrd.....</h1>
        <button  className={`${styles.btn} `} onClick={handleOnCLick}>{!change ? 'White' : 'Black'}</button>
    </div>
  )
}

export default ToggleBackgroundChange