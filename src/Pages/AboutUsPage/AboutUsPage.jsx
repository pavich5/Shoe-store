import React from 'react';
import { Container, Grid, Typography, TextField, Button } from '@mui/material';
import './AboutUsPage.css';
import { motion } from "framer-motion"


const AboutUsPage = () => {
  return (
    <motion.div className="AboutUsPage"
    initial={{ opacity: 0}}
    animate={{ opacity: 1}}
    transition={{ duration: 0.5 }}>
      <Container>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <div className="about-image">
              <img src="https://hrdailyadvisor.blr.com/app/uploads/sites/3/2018/07/Workers-Diverse-5.jpg" alt="About Us" />
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <div className="about-text">
              <Typography variant="h4" gutterBottom>
                About Us
              </Typography>
              <Typography variant="body1" gutterBottom>
                Welcome to Happy Feet, the ultimate destination for trendy and stylish shoes.
                Our passion for footwear has led us to curate a collection that caters to everyone's taste
                and preferences. Whether you're looking for casual sneakers, elegant heels, or durable boots,
                we have got you covered.
              </Typography>
              <Typography variant="body1" gutterBottom>
                At Happy Feet, we believe that the right pair of shoes can elevate any outfit
                and boost your confidence. Our dedicated team of fashion enthusiasts handpicks each shoe
                to ensure quality and style.
              </Typography>
              <Typography variant="body1" gutterBottom>
                Explore our diverse selection of footwear and find your perfect fit. Join us in our mission
                to provide comfort, fashion, and happiness, one pair of shoes at a time.
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12}>
            <div className="fill-in-form">
              <Typography variant="h4" gutterBottom>
                Contact Us
              </Typography>
              <form>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <TextField label="Name" fullWidth required />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField label="Email" fullWidth required />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Message"
                      multiline
                      rows={4}
                      fullWidth
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      variant="contained"
                      color="primary"
                      size="large"
                      fullWidth
                    >
                      Send Message
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </div>
          </Grid>
        </Grid>
      </Container>
    </motion.div>
  );
};

export default AboutUsPage;
