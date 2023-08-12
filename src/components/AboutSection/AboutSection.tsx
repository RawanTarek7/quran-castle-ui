import React from 'react';
import {Container, Typography, Grid, Box} from '@mui/material';
import {GlobalButton} from '../../assets/styles/GlobalButton';
import {useHistory} from 'react-router-dom';
import {useSpring, useScroll} from '@react-spring/web';
import {styled, useTheme} from '@mui/system';
import {animated} from '@react-spring/web';

const AboutLayoutRoot = styled('img')(({theme}) => ({
    color: 'white',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'start',
    [theme.breakpoints.up('sm')]: {
        height: '70vh',
        minHeight: 500,
        maxHeight: 1300,
    },
    width: '100%', // Set initial width to 100% for responsiveness
    [theme.breakpoints.up('md')]: {
        width: '650px', // Set width to 650px for medium screens
    },
}));

const AboutSection = () => {
        const history = useHistory();

        const slideUp = useSpring({
            transform: 'translateY(0)',
            from: {transform: 'translateY(40px)'},
            config: {duration: 1000},
        });

        const {scrollYProgress} = useScroll();

        const triggerAnimations = scrollYProgress.to(val => val > 0.5); // Adjust the threshold as needed

        return (
            <Container maxWidth="lg" sx={{height: '500px', borderRadius: '55px'}}>
                <Grid container spacing={2} alignItems="center">
                    <Grid item xs={12} md={6}>
                        <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'start', paddingLeft: '80px'}}>
                            <animated.div style={triggerAnimations ? slideUp : {}}>
                                <Typography variant="h5" sx={{
                                    color: 'white',
                                    lineHeight: '1.75',
                                    textAlign: 'start',
                                    marginBottom: '30px'
                                }}>
                                    Welcome to Quran Castle, where we provide quality Quran, Arabic, and Islamic studies
                                    classes for non-Arabic speakers of all ages worldwide.
                                </Typography>
                            </animated.div>
                            {/* Apply fade in and slide up animations based on triggerAnimations */}
                            <animated.div style={triggerAnimations ? slideUp : {}}>
                                <GlobalButton onClick={() => history.push('/about-us')}
                                              sx={{
                                                  marginTop: '20px',
                                                  backgroundColor: 'black',
                                                  color: 'goldenrod',
                                                  border: '1px solid goldenrod',
                                                  '&:hover': {
                                                      backgroundColor: 'goldenrod',
                                                      color: 'black',
                                                      borderColor: "black",

                                                  },
                                              }}

                                >
                                    Know More About Us
                                </GlobalButton>
                            </animated.div>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <animated.div style={triggerAnimations ? slideUp : {}}>
                            <AboutLayoutRoot alt='Logo' src={process.env.PUBLIC_URL + '/images/logo.png'}/>
                        </animated.div>
                    </Grid>
                </Grid>
            </Container>
        );
    }
;

export default AboutSection;
