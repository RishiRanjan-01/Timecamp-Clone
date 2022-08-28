import React from 'react'
import Upnav from './Upnav'
import Navbar from "../landing/Navbar"
import Home from './home page/Home'
import Toue from "./Toue"
import Demo from "./demo/Demo"
import Star from "./Star"
import Integrations from "./Integrations"
import Tab from "./Tab"
import SSL from "./SSl"
import Faq from "./FAQ/Faq"
import Blog from "./Blog"
import Footer from "./Footer"
import Bottom from './Bottom'
const Landing = () => {
  return (
    <div>
<Upnav/>
<Navbar/>
<Home/>
<Demo/>
<Toue/>
<Star/>
<Integrations/>
<Tab/>
<SSL/>
<Faq/>
<Blog/>
<Footer/>
<Bottom/>
    </div>
  )
}

export default Landing