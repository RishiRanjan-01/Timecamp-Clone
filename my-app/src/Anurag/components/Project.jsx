import { Box } from '@chakra-ui/react'
import React from 'react'
import axios from 'axios'
import Modal from "react-modal"
import { useEffect } from 'react'
import {FiSearch} from "react-icons/fi"
import {BsThreeDotsVertical, BsStar} from "react-icons/bs"
import { useDispatch, useSelector } from 'react-redux'
import { AddDataFailure, AddDataRequest, AddDataSuccess, getData } from '../Redux/actions/action.type'
import styles from "./Project.module.css"
import { useState } from 'react'
import { useParams } from 'react-router-dom'

// const updateProject = {
//     projectdata: ""
   
//   };
const Project = () => {
    const {id}=useParams()
    const [createProject, setCreateProject] = useState(false)
    const [query, setquery] =useState({ "name": "",
    "client": "kumar",
    "tracked": "0.00h",
    "amount": "0.00USD",
    "progress": "---",
    "access": "Public"} );
    const dispatch=useDispatch()
    const projects=useSelector((store)=>store.projects)
    const handlechangedetail = (e) => {
        const { name, value, type, checked } = e.target;
        let val = type === "checkbox" ? checked : value;
        setquery({
            ...query,
            [name]: val
        });
        console.log(query)
        };
      
        const split = (value) => {
            var str = "";
            for (var i = 0; i < value.length; i++) {
            if (value[i] !== " ") {
                str += value[i];
            }
            }
            return str;
        };

        const handleproject = () => {
           
            let payload = query
            dispatch(AddDataRequest());
            axios.post("http://localhost:8080/project",payload)
            .then((r)=>dispatch(AddDataSuccess()))
             .then(()=>dispatch(getData()))
            .catch((e)=>dispatch(AddDataFailure(e)))
            
            dispatch(getData(payload));
          
            };


    useEffect(()=>{
    dispatch(getData())
    },[])

  return (
    <Box>
        <Box className={styles.mainbox}> 
        <Box className={styles.create}>
        <h2>Projects</h2>
        <button className={styles.button}onClick = {() => setCreateProject(true)}>CREATE NEW </button>
        <Modal isOpen = {createProject} onRequestClose = {() => setCreateProject(false)} className = {styles.projectModal} >
                                <h1 className = {styles.modalHeading}>Create new project</h1>
                                <hr/>
                                <Box className = {styles.inputBox}>
                                    <input type="text" placeholder = "Enter Project Name" name="name" value={query.name} onChange={handlechangedetail}/>
                                    <input type="text" placeholder = "Select Client"  />
                                </Box>
                                <hr/>
                                <Box className = {styles.selectBox}>
                                    <select name="clientsoption" value={query.clientsoption} onChange={handlechangedetail}>
                                    <option value="">No template</option>
                                       {/* client data */}
                                    </select>
                                </Box>
                                <hr/>
                                <Box className = {styles.projectModalButtons} >
                                    <button  onClick = {() => setCreateProject(false)} >Cancel</button>
                                    <button onClick={handleproject} >CREATE</button>
                                </Box>
                    </Modal>
        </Box>
        <hr/>
        
        <Box className={styles.filterbox}>

                <h4>FILTER</h4>
                {/* <select>
                    <option value="active">Active</option>
                </select>
                <select >
                    <option value="clients">Clients</option>
                    <option value="all">All</option>
                    <option value="pushkar">Pushkar</option>
                </select>
                <select>
                    <option value="">Access</option>
                    <option value="">Public</option>
                    <option value="">Private</option>
                </select>
                <select>
                    <option value="">Billable</option>
                    <option value="">Non billable</option>
                </select> */}
                <h1><FiSearch/></h1>
                <p>Note</p>
                <input type="text" placeholder = "Project name"name="projecttitle" value={query.projecttitle} onChange={handlechangedetail} />
                <button>APPLY FILTER</button>
            </Box>
            <Box  className = {styles.heading}>
                
                <h5>Projects</h5>
            </Box>
            <table className = {styles.projectDetails}>
                <input className={styles.checkbox} type="checkbox"/>
                <label className={styles.name} >NAME</label>
                <label className = {styles.clientsLabel}></label>
                <label className = {styles.trackedLabel}></label>
                <label className = {styles.amountLabel}></label>
                <label className = {styles.progressLabel}></label>
                <label className = {styles.accessLabel}></label>
            </table>                                         
            {projects.map((item) => {
                return <Box className = {styles.projectDataDetails} key = {item.id}>
                            <h4  className = {styles. namesData}>{item.name}</h4>
                            <h4  className = {styles. clientsData}>{item.client}</h4>
                            <h4  className = {styles.projectstracked }> {item.tracked} </h4>
                            <h4  className = {styles.projectamountLabel}> {item.amount} </h4>
                            <h4  className = {styles.projectprogressLabel}> {item.progress} </h4>
                            <h4  className = {styles.projectaccessLabel}> {item.access} </h4>
                            {/* <h4 >0.00 USD</h4>
                            <h4 >-</h4>
                            <h4 >Public</h4> */}
                        <button  className = {styles.favouriteButton} ><BsStar size = "20px"/></button>
                        <button><BsThreeDotsVertical size = "25px"/></button>
                    </Box>
                })}
            
            </Box>
        
    </Box>
  )
}

export default Project