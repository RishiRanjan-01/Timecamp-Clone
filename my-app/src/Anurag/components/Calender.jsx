import React,{useState} from 'react'
import Calendar from 'react-calendar'
import { AiOutlineRight, AiOutlineLeft, AiOutlineDown } from "react-icons/ai";
import styles from './Mycomponents.module.css'


// function MyApp() {
    
//    return (
    
//   )
// return console.log("x")
   
//   }

 
  const Calender = () => {
      const [show, setShow]=useState(false)
     
    //  console.log(show)
    const toggle=()=>{
         setShow(!show)
        console.log(show)
    }


    const [date, setDate] = useState(new Date());
    const onChange=()=>{
        setDate(date);
    }
   return (
    <>
    <div onClick={toggle} className={styles.a}>
        <div className={styles.b}>
        <div  className={styles.d}><AiOutlineLeft /></div>
        <div className={styles.c}>
            <div className={styles.d} ><AiOutlineDown/></div>
            <div className={styles.d}><AiOutlineRight/></div>
        </div>
        </div>
        
    </div>
    {show && <div>
        <div style={{width:"300px"}}>
    <Calendar onChange={onChange} value={date} />
  </div>
        </div>}
       
        
    </>
   )
}

export default Calender