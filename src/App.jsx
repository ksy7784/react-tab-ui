import { useState } from 'react'
import './App.css'
function App() {
  //페이지 번호
  const [tab, setTab] = useState(0);
  console.log(tab);

  return (
    <>
      <h1>App</h1>
      <div className='tab_ui'>
        <div className="tab_group">
          <a href="#tab1" style={tab==0 ? {color:'red'} : null } onClick={()=>setTab(0)}>HTML</a>
          <a href="#tab2" style={tab==1 ? {color:'red'} : null } onClick={()=>setTab(1)}>CSS</a>
          <a href="#tab3" style={tab==2 ? {color:'red'} : null } onClick={()=>setTab(2)}>JAVASCRIPT</a>
        </div>
        <div className="tab_contents">
          {  
            tab === 0 && 
            <article id='#tab1'>
              <h1>HTML</h1>
              <p>Hyper Text MarkUp language</p>
            </article> 
          }
          {
           tab === 1 && 
          <article id='#tab2'>
            <h1>CSS</h1>
            <p>Cascadong Style Sheet</p>
          </article>
          }
          {
          tab === 2 && 
          <article id='#tab3'>
            <h1>JAVASCRIPT</h1>
            <p>Web Programming Language</p>
          </article> 
          }
        </div>
      </div>
      
  
    </>
  )
}

export default App
