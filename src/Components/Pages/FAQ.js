import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import Navbar from '../Layout/Navbar'

const FAQ = () => {
    return (

        <>
            <Navbar />
            <Container maxWidth='xl' sx={{ padding: "25px" }}>
                <Typography variant='h4' textAlign={'center'} color={"red"} sx={{ textDecoration: "underline" }}>
                    Frequently Asked Questions
                </Typography>
            </Container>
            <Container maxWidth='xl' className='border border-4 border-dark p-5 ' >
                <Container maxWidth="xl" className='mb-3' >
                    <Box padding={3} border={5} borderColor={'orange'} borderRadius={3} boxShadow={3} >
                        <Typography variant='h5' textAlign={'left'} color={"black"}>
                            Question : What is Kinniho ?
                        </Typography>
                        <Typography variant='h6' textAlign={'left'} color={"black"}>
                            Answer : Kinniho is an e-commerce website.
                        </Typography>
                    </Box>
                </Container>
                <Container maxWidth="xl" className='mb-3' >
                    <Box padding={3} border={5} borderColor={'orange'} borderRadius={3} boxShadow={3} >
                        <Typography variant='h5' textAlign={'left'} color={"black"}>
                            Question : What is Kinniho ?
                        </Typography>
                        <Typography variant='h6' textAlign={'left'} color={"black"}>
                            Answer : Kinniho is an e-commerce website.
                        </Typography>
                    </Box>
                </Container>
                <Container maxWidth="xl" className='mb-3' >
                    <Box padding={3} border={5} borderColor={'orange'} borderRadius={3} boxShadow={3} >
                        <Typography variant='h5' textAlign={'left'} color={"black"}>
                            Question : What is Kinniho ?
                        </Typography>
                        <Typography variant='h6' textAlign={'left'} color={"black"}>
                            Answer : Kinniho is an e-commerce website.
                        </Typography>
                    </Box>
                </Container>
                <Container maxWidth="xl" className='mb-3' >
                    <Box padding={3} border={5} borderColor={'orange'} borderRadius={3} boxShadow={3} >
                        <Typography variant='h5' textAlign={'left'} color={"black"}>
                            Question : What is Kinniho ?
                        </Typography>
                        <Typography variant='h6' textAlign={'left'} color={"black"}>
                            Answer : Kinniho is an e-commerce website.
                        </Typography>
                    </Box>
                </Container>
                <Container maxWidth="xl" className='mb-3' >
                    <Box padding={3} border={5} borderColor={'orange'} borderRadius={3} boxShadow={3} >
                        <Typography variant='h5' textAlign={'left'} color={"black"}>
                            Question : What is Kinniho ?
                        </Typography>
                        <Typography variant='h6' textAlign={'left'} color={"black"}>
                            Answer : Kinniho is an e-commerce website.
                        </Typography>
                    </Box>
                </Container>
            </Container>


        </>
    )
}

export default FAQ