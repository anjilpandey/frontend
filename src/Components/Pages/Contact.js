import { Box, Button, TextField, Typography } from '@mui/material'
import { blue } from '@mui/material/colors'
import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Layout/Navbar'

const Contact = () => {
    return (
        <>
            <Navbar />
            {/* Address */}
            <Box className='container-fluid d-flex justify-content-evenly mt-5' padding={5} backgroundColor="grey" border={3} borderColor="ButtonShadow">
                <Box className='w-50' backgroundColor={'cornsilk'} padding={5} borderRight={3} borderColor="dark">
                    <Typography variant='h4' className='text-center text-primary'>Address</Typography>
                    <Typography variant='h6' className=' '>Kinni Ho Pvt. Ltd.</Typography>
                    <Typography variant='h6' className=' '>Anamnagar, Kathmandu, Nepal</Typography>
                    <Typography variant='h6' className=' '>Email: kinniho.official@gmail.com</Typography>
                    <Typography variant='h6' className=' '>Website: <Link to="www.kinniho.com" className='text-decoration-none'>kinniho</Link></Typography>
                </Box>
                <Box className='w-50 ' backgroundColor={'cornsilk'} padding={5} >
                    <Typography variant='h4' className='text-center text-primary'>Contact Form</Typography>
                    <form>
                        <TextField label="Email" variant='filled' multiline fullWidth color='warning' placeholder='Enter your Email' required size='small'>
                        </TextField>
                        <TextField id="subject" label="Subject" variant='filled' multiline fullWidth color='warning' placeholder='Enter your Email' required="Fill out the Box" autoComplete='off' size='small'>
                        </TextField>
                        <TextField label="Body" variant='filled' multiline fullWidth color='warning' placeholder='Enter your Email' autoComplete='off' required size='small' minRows={5} maxRows={5}>
                        </TextField>
                        {/* <Button variant="contained" className='my-3' color='warning'>Submit</Button>*/}
                        <Button color='warning' variant='contained'><button>Submit</button></Button>
                    </form>
                </Box>
            </Box>
            <Box backgroundColor="cornsilk" className='mt-5' textAlign="center" margin={5}>
                <Typography color="primary" variant='h4'> Map</Typography>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.558641326996!2d85.32424227515638!3d27.700032976186765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb196a83d01359%3A0x67b966aafb25aee7!2sKinniho!5e0!3m2!1sen!2snp!4v1672679557327!5m2!1sen!2snp" 
                width="100%" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </Box>
        </>
    )
}

export default Contact