import * as React from 'react';
import { useState, useEffect } from "react";
import { DataGrid } from '@mui/x-data-grid'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import "../styles.css";

// const columns = [
//   { field: 'id', headerName: 'ID' },
//   { field: 'title', headerName: 'Title', width: 300 },
//   { field: 'author', headerName: 'Author', width: 300 },
//   { field: 'coverImage', headerName: 'CoverImage', width: 300 },
//   { field: 'description', headerName: 'Description', width: 300 }
// ]

const Novels= () => {

  const [tableData, setTableData] = useState([])  

  useEffect(() => {
  fetch(("https://localhost:9001/novel"),{
  })
    .then((data) => data.json())
    .then((data) => setTableData(data))
  }, [])

 console.log(tableData)

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Coverimage</TableCell>
            <TableCell align="left">Title</TableCell>
            <TableCell align="left">Author</TableCell>
            <TableCell align="left">Description</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((column) => (
            <TableRow
              key={column.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
              <img className="coverimage" src={column.coverImage} alt="No cover found"/>
              </TableCell>
              <TableCell align="left">{column.title}</TableCell>
              <TableCell align="left">{column.author}</TableCell>
              <TableCell align="left">{column.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    // <div style={{ height: 700, width: '100%' }}>
    //   <DataGrid
    //     rows={tableData}
    //     columns={columns}
    //   />
    // </div>
  )
}

export default Novels