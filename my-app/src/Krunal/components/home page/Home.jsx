import React from 'react'
import {
  Box,
  Text,
  Image,
  Flex
} from '@chakra-ui/react';
import Styles from "../home page/Home.module.css"
import google from "../../images/google.svg"
import Navbar from "../Navbar"
const Home = () => {
  return (
    <>
   <Box  className={Styles.back} >

    <Flex className={Styles.row} direction={{base:'column',sm:'column',md:'column',lg:'row'}} >

        <Box className={Styles.left} w={{base:'100%',sm:'100%',md:'100%',lg:'47%'}} >
             <h1>Free time tracking software</h1>
            <h2>
               Increase project profitability with time tracking
             </h2>
             <ul>
               <li>✓ Unlimited users</li>
               <li>✓ Unlimited projects</li>
               <li>✓ 30+ integrations</li>
               <li>✓ Automated time tracking</li>
             </ul>
             <Box my='10' w='100%' px='4' py='2' bgColor='white' borderRadius='20px' boxShadow='md'  bg='white'>
                <input type='email' placeholder='your e-mail address' className={Styles.input}/>
             </Box>
             <Text my='10' fontSize='12px'>By signing up you agree to our <b className={Styles.g}>Terms and Conditions</b> and <b className={Styles.g}>Privacy Policy.</b>.</Text>
             <Flex className={Styles.btndiv} direction={{base:'column',sm:'column',md:'column',lg:'row'}}>
               <button className={Styles.btn1}>Start tracking time</button>
              
               <button className={Styles.btn2}>Or sign up with <img src={google} alt="google" className={Styles.btnimg} /></button>
             </Flex>
        </Box>

        <Flex className={Styles.right} w={{base:'100%',sm:'100%',md:'100%',lg:'47%'}} mt={{base:'3rem',sm:'3rem',md:'3rem',lg:'20rem'}}>

             <Flex className={Styles.homo}>
               <img src="https://cdn-m.timecamp.com/img/person.jpg" alt="" />
             </Flex>

             <Box className={Styles.homoheader}>
               Adam Wagner, Co-owner and Chief Strategy Officer
             </Box>

             <Box className={Styles.homopara}>
               „TimeCamp proved to be an essential management tool that gives us
               clear insight into a projects efficiency and helps to avoid an
               overblown workload for our team.”
             </Box>
             <Image className={Styles.logo}
               src="https://cdn-m.timecamp.com/img/raindrop_logo.svg"
               alt=""
             />
           </Flex>
    </Flex>
   </Box>

   <Box className={Styles.green}>

        <Box className={Styles.headdiv}>
             <h3>
               Trusted by 18,000 teams from all over the world (and still
               growing!)
             </h3>
        </Box>

         <Flex className={Styles.Row} direction={{base:'column',sm:'column',md:'column',lg:'row'}} w={{base:'100%',sm:'100%',md:'100%',lg:'80%'}}>

           <Box className={Styles.Imgdiv}>
             <img
               src="https://cdn-m.timecamp.com/img/greenbranding/social-proof-section/usp-logo-white.png"
               alt=""/>
           </Box>

           <Box className={Styles.Imgdiv}>
            <img
               src="https://cdn-m.timecamp.com/img/greenbranding/social-proof-section/dsv-logo-white.png"
               alt="" />
           </Box>

           <Box className={Styles.Imgdiv}>
             <img
               src="https://cdn-m.timecamp.com/img/greenbranding/social-proof-section/raindrop-logo-white.png"/>
          </Box>
           <Box className={Styles.Imgdiv}>
            <img
              src="https://cdn-m.timecamp.com/img/greenbranding/social-proof-section/saatchi-logo-white.png"
               alt=""  />
          </Box>
          <Box className={Styles.Imgdiv}>
             <img
               src="https://cdn-m.timecamp.com/img/greenbranding/social-proof-section/blitz-logo-white.png"
               alt=""
             />
           </Box>
           <Box className={Styles.Imgdiv}>
             <img
               src="https://cdn-m.timecamp.com/img/greenbranding/social-proof-section/havas-logo-white.png"
               alt=""
             />
           </Box>
         </Flex>
         </Box>
   
   </>
  )
}

export default Home