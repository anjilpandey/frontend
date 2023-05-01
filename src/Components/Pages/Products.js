import { Button, Card, CardActions, CardContent, CardMedia, Checkbox, Container, FormControl, FormControlLabel, FormGroup, Grid, Radio, RadioGroup, Typography } from '@mui/material'
import { warning } from '@remix-run/router'
import React from 'react'
import Navbar from '../Layout/Navbar'
import ShareIcon from '@mui/icons-material/Share';
import ReadMoreIcon from '@mui/icons-material/ReadMore';

const Products = () => {
  return (
    <>
      <Navbar />
      <Container maxWidth="xl" >
      <Grid container>
        <Grid item xs={3} textAlign="left">
          <Typography variant='h5' pl={3} className="mt-3" color="primary">
            <Button variant='contained' size='xl'>Departments</Button>
          </Typography>
          <FormGroup>
            <FormControlLabel control={<Checkbox defaultChecked/>} label="Mobiles" />
            <FormControlLabel control={<Checkbox />} label="Laptops" />
            <FormControlLabel control={<Checkbox />} label="Smartwatches" />
            <FormControlLabel control={<Checkbox />} label="Apparels" />
            <FormControlLabel control={<Checkbox />} label="Watch" />
            <FormControlLabel control={<Checkbox />} label="Electronics" />
            {/* <FormControlLabel disabled control={<Checkbox />} label="Disabled" /> */}
          </FormGroup>
          <Typography variant='h5' pl={3} className="mt-3" color="primary">
          <Button variant='contained' size='xl' >Prices</Button>
          </Typography>
          <FormControl>
            <RadioGroup>
              <FormControlLabel value="0" control={<Radio />} label="Below Rs.1000" />
              <FormControlLabel value="1" control={<Radio />} label="Rs.1000 - Rs.10000" />
              <FormControlLabel value="2" control={<Radio />} label="Rs.10000 - Rs.100000"/>
              <FormControlLabel value="3" control={<Radio />} label="Above Rs.100000"/>
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={9} borderLeft={3} borderColor="orange" marginTop={3}>
        <Typography variant='h5' textAlign="center" color="primary" className='mt-3'><Button  variant='contained' color='primary' size='xl'>Products</Button></Typography>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 200 }}
                    image="./Department-images/dimage1.jpeg"
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Lizard
                    </Typography>
                    <Typography variant="body2" color="red">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="medium">Share<ShareIcon/></Button>
                    <Button size="medium">Learn More<ReadMoreIcon/></Button>
                </CardActions>
            </Card>
            </Grid>
          <Grid item xs={4}>
          <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 200 }}
                    image="./Department-images/dimage1.jpeg"
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Lizard
                    </Typography>
                    <Typography variant="body2" color="red">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="medium">Share<ShareIcon/></Button>
                    <Button size="medium">Learn More<ReadMoreIcon/></Button>
                </CardActions>
            </Card>
          </Grid>
          <Grid item xs={4}>
          <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 200 }}
                    image="./Department-images/dimage1.jpeg"
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Lizard
                    </Typography>
                    <Typography variant="body2" color="red">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="medium">Share<ShareIcon/></Button>
                    <Button size="medium">Learn More<ReadMoreIcon/></Button>
                </CardActions>
            </Card>
          </Grid>
          <Grid item xs={4}>
          <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 200 }}
                    image="./Department-images/dimage1.jpeg"
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Lizard
                    </Typography>
                    <Typography variant="body2" color="red">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="medium">Share<ShareIcon/></Button>
                    <Button size="medium">Learn More<ReadMoreIcon/></Button>
                </CardActions>
            </Card>
          </Grid>
          <Grid item xs={4}>
          <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 200 }}
                    image="./Department-images/dimage1.jpeg"
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Lizard
                    </Typography>
                    <Typography variant="body2" color="red">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="medium">Share<ShareIcon/></Button>
                    <Button size="medium">Learn More<ReadMoreIcon/></Button>
                </CardActions>
            </Card>
          </Grid>
          <Grid item xs={4}>
          <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 200 }}
                    image="./Department-images/dimage1.jpeg"
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Lizard
                    </Typography>
                    <Typography variant="body2" color="red">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="medium">Share<ShareIcon/></Button>
                    <Button size="medium">Learn More<ReadMoreIcon/></Button>
                </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Grid>
      </Grid>
      </Container>
    </>
  )
}

export default Products