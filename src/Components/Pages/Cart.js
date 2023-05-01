import { Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, tableRowClasses, Typography } from '@mui/material'
import { width } from '@mui/system';
import React from 'react'
import Navbar from '../Layout/Navbar'

const Cart = () => {

  function createData(name, price, image) {
    return { name, price, image };
  }

  const rows = [
    createData('OnePlus 7 Pro', 110000, "https://fatafatsewa.com/storage/media/3281/mzDqD02312.jpg"),
    createData('OnePlus 7 Pro', 110000, "https://fatafatsewa.com/storage/media/3281/mzDqD02312.jpg"),
    createData('OnePlus 7 Pro', 110000, "https://fatafatsewa.com/storage/media/3281/mzDqD02312.jpg")
  ];

  return (
    <>
      <Navbar />
      <Typography 
      variant='h4'
      align='center' 
      fontWeight="bold" 
      sx={{color:"red", textDecoration:"underline"}} 
      paddingY={"10px"}>
        Cart Items
      </Typography>
      <Container className='m-auto' maxWidth="md" >
      <TableContainer component={Paper} sx={{boxShadow:"3"}}>
        <Table sx={{ minWidth: 650,}} aria-label="simple table" border="3" borderColor="green">
          <TableHead>
            <TableRow>
              <TableCell>S.N</TableCell>
              <TableCell align="center">Product Image</TableCell>
              <TableCell align="center">Product Information</TableCell>
              <TableCell align="center">Price</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, i) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {i+1}
                </TableCell>
                <TableCell align="center"><img src={row.image} style={{height:"120px"}} alt={row.name}/></TableCell>
                <TableCell align="center">{row.name}</TableCell>
                <TableCell align="center">{row.price}</TableCell>
                <TableCell align='center'><Typography color={"red"}>Delete</Typography>
                  <i className='bi bi-arrows-collapse'/>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </Container>
    </>
  )
}

export default Cart