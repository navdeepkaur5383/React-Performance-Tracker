import React, { useEffect, useState } from 'react'
import Charts from './charts'


function Inputs() {
  const [inputdata,setinputdata]=useState({
    employee:"",
    performance:""
  })
  const [finaldata,setfinaldata]=useState([])

  function handleChange(e){
    const {name,value}=e.target 
    console.log(name,value)
    setinputdata((pre)=>{
      return {...pre,[name]:value}
    })

  }
  
  function handleSubmit(e){
    console.log(finaldata)
    e.preventDefault()
  }
  function handleClick(){
    setfinaldata([...finaldata,inputdata])
    
   

  }
  console.log(finaldata)
  return (
    <div>
      
<form onSubmit={handleSubmit} name='myform' >
<div className="form-group">
        <label htmlFor="employee">Employee Name:</label>
<input type='text' name='employee' onChange={handleChange} placeholder='Enter Name'></input>
</div>
<div className="form-group">
        <label htmlFor="performance">Performance:</label>
<input type='number' name='performance' onChange={handleChange} placeholder='Enter Performance'></input>
</div>
<button type='button' onClick={handleClick} className="btn-submit">submit</button>






</form>
<br/>

{
  finaldata.length > 0 &&
  <div style={{ display: 'flex', justifyContent: 'center' }}>
  <table className="styled-table" >
<tr >

<th>Employee Name</th>
            <th>Employee Performance</th>

</tr>
{
  finaldata.map((data,ke)=>
       
<tr key={ke}>

  <td >{data.employee}</td>
  <td >{data.performance}</td>
</tr>




 
  
  )
}
</table>
</div>


}
<br/>

<Charts data={finaldata}/>

    </div>
  )
}

export default Inputs