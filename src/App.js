import React from 'react'
import Brand  from './components/brand/Brand'
import Feature from './components/feature/Feature'
import CTA from './components/cta/CTA'
import Navbar from './components/navbar/Navbar'

import Blog from './containers/blog/Blog'
import  Features from './containers/features/Features'
import Footer from './containers/footer/Footer'
import Header from './containers/header/Header'
const App = () => {
  return (
    <div>
    <div>
      <h1>fghjklfghjfghjk uuu</h1>
      <Brand />
      <Feature/>
      <CTA />
      <Navbar />
   </div>
   <Blog/>
<Features/>
<Footer/>
<Header/>
    </div>
  )
}

export default App;
