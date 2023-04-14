import React from 'react'
import Navbar from './Components/Navbar'
import "./index.css"
import Info from './Components/Info'
import Coder from './Img/Coder.jpg'


const App = ()=>{

  return (
    <div>
      {/* <Navbar name="Mohit Tomar"/> */}
      <Navbar name="Mohit Tomar">
      Hello World
        {/* Hello World  will not visible you have to right {props.children} in Navbar file */}
      </Navbar>
      <Info propertyname = "info3"  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor asperiores iure quam sequi, placeat accusantium! Ipsam aliquid quo nemo accusantium expedita, at iusto asperiores fuga, saepe, tempora assumenda nulla quia!">
        <h2>About Me</h2>
        <img src={Coder} alt='coder'/>
      
      </Info>
      
      <Info propertyname = "info1" name="Skills" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor asperiores iure quam sequi, placeat accusantium! Ipsam aliquid quo nemo accusantium expedita, at iusto asperiores fuga, saepe, tempora assumenda nulla quia!" />
      <Info propertyname = "info2" name="Qualification" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor asperiores iure quam sequi, placeat accusantium! Ipsam aliquid quo nemo accusantium expedita, at iusto asperiores fuga, saepe, tempora assumenda nulla quia!" />
      <Info propertyname = "info1" name="Experience" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor asperiores iure quam sequi, placeat accusantium! Ipsam aliquid quo nemo accusantium expedita, at iusto asperiores fuga, saepe, tempora assumenda nulla quia!" />
      <Info propertyname = "info2" name="Projects" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor asperiores iure quam sequi, placeat accusantium! Ipsam aliquid quo nemo accusantium expedita, at iusto asperiores fuga, saepe, tempora assumenda nulla quia!" />

    </div>
    
  )
}

export default App