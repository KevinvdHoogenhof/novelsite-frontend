// import React from 'react';
// const Novels = () =>{
//   return (
//     <div>
//       <h3>Novels</h3>
//     </div>
//   );
// }
// export default Novels;

import * as React from 'react';
import { useState, useEffect } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import "../styles.css";
import novelservice from '../services/NovelService';

// function createData(title, author, coverImage, description) {
//   return { title, author, coverImage, description };
// }

// const rows = novelservice.getAllNovels()
// .then(response => {
//   this.setstate({
//       rows: response.data
//     });
// })
// const rows = [
//   createData('Frozen yoghurt', 159, `https://www.taxci.nl/images/noimage.png`, 24),
//   createData('Ice cream sandwich', 237, 9.0, 37),
//   createData('Eclair', 262, 16.0, 24),
//   createData('Cupcake', 305, 3.7, 67),
//   createData('Gingerbread', 356, 16.0, 49),
// ];

export default function Novels() {
  const [rows, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const getData = async () => {
      try {
        const response = novelservice.getAllNovels()
        setData(response.data);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);
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
          {rows.map((row) => (
            <TableRow
              key={row.coverImage}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
              <img className="coverimage" src={row.coverImage} alt="No cover found"/>
              </TableCell>
              <TableCell align="left">{row.title}</TableCell>
              <TableCell align="left">{row.author}</TableCell>
              <TableCell align="left">{row.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
