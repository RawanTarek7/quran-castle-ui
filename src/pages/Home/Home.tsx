import React, {useEffect} from 'react';
import './Home.css';
import Hero from '../../components/Hero/Hero';
import AboutSection from '../../components/AboutSection/AboutSection';
import ContactUs from '../../components/ContactUs/ContactUS';
import {Typography, Box} from '@mui/material'; // Import Box component for applying responsive styles
import Features from '../Features/Features';
import Plans from "../Plans/Plans";
import Slider from "../../assets/styles/AutoPlayCarousel";

const Home: React.FC = () => {
    const [trialSession, setTrialSession] = React.useState(false);
    const sectionContactStyle = {
        padding: '10px',
        color: 'white',
    };
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const startTrialSession = () => {
        setTrialSession(true);
    };

    return (
        <div className="container">
            <div className="hero-section">
                <Hero startTrialSession={startTrialSession}/>
            </div>

            <div className='about-section'>
                <AboutSection/>
            </div>


            <div id='features' className="features-section">
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginBottom: '30px',
                        paddingTop: {xs: '250px', md: '35px'} // Use responsive values with the `sx` prop
                    }}
                >
                    <Typography variant="h3">
                        Key Features
                    </Typography>
                </Box>
                <Features></Features>
            </div>


            <div id='plans' className='plans-section'>
                <Plans></Plans>
            </div>


            <div className="teachers-section">
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginBottom: '30px',
                    }}
                >
                    <Typography variant="h3" style={{marginTop: '55px', textAlign: 'center'}}>
                        Our Teachers
                    </Typography>

                </Box>
                <div id='teachers' >
                    <Slider></Slider>
                </div>
            </div>


            <div id="contact-section" style={sectionContactStyle}>
                <ContactUs/>
            </div>
        </div>
    );
};

export default Home;
