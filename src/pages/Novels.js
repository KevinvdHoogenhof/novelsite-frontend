import * as React from 'react';
import { useState, useEffect } from "react";
import { DataGrid } from '@mui/x-data-grid'
import "../styles.css";

const Novels= () => {
  const [tableData, setTableData] = useState([])  
  useEffect(() => {
  fetch(("https://localhost:9001/novel"),{
        crossDomain:true,
        method: 'GET',
        headers:{
          'Content-Type':'application/json',   
          'Accept': 'text/plain',
          'Content-Type': 'application/x-www-form-urlencoded'
        }
  })
    .then((data) => data.json())
    .then((data) => setTableData(data))
  }, [])
 console.log(tableData)
  return (
    <div>
      
    </div>
  )
}

export default Novels