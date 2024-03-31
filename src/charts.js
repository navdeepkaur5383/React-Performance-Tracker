import React from 'react'
import {BarChart,Bar,CartesianGrid,XAxis,YAxis} from "recharts"

function Charts(prop) {
  const dataforchart=prop.data.map(emp=>({
    name:emp.employee,
    per:emp.performance
  }))
  if (dataforchart.length ===0 ){
    return null
  }
  return (
    <div style={{ textAlign: 'center' }}>
   <h2>Employee Performance</h2>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
       
   <BarChart height={400} width={400} data={dataforchart}>
    <Bar dataKey='per' fill='green'></Bar>
    <CartesianGrid stroke="#ccc"></CartesianGrid>
    <XAxis dataKey='name' />
    <YAxis />

   </BarChart>
   </div>
   </div>
   
  )
}

export default Charts