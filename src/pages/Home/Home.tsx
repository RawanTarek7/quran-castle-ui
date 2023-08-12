import React, { useEffect } from 'react';
import './Home.css';
import Hero from '../../components/Hero/Hero';
import AboutSection from '../../components/AboutSection/AboutSection';
import ContactUs from '../../components/ContactUs/ContactUS';
import TeacherSection from '../../components/TeachersSection/TeacherSection';
import { Typography, Box } from '@mui/material'; // Import Box component for applying responsive styles
import Features from '../Features/Features';

const Home: React.FC = () => {
    const [trialSession, setTrialSession] = React.useState(false);
    const sectionContactStyle = {
        background: 'linear-gradient(to Top, gray, rgba(218, 165, 32, 0.5)), #FFD70052',
        padding: '20px',
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
                <Hero startTrialSession={startTrialSession} />
            </div>

            <div style={{ backgroundColor: 'black' }} className={'about-section'}>
                <AboutSection />
            </div>

            <div className="features-section">
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginBottom: '30px',
                        paddingTop: { xs: '250px', md: '35px' } // Use responsive values with the `sx` prop
                    }}
                >
                    <Typography variant="h4" style={{ color: 'goldenrod' }}>
                        Key Features
                    </Typography>
                </Box>
                <Features></Features>
            </div>

            <div className="teachers-section">
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginBottom: '30px', // Adjust margin for mobile
                    }}
                >
                    <Typography variant="h4" style={{ color: 'goldenrod', marginTop: '55px' }}>
                        About Our Teachers
                    </Typography>
                </Box>
                <TeacherSection></TeacherSection>
            </div>



            <div id="contact-section" style={sectionContactStyle}>
                <ContactUs />
            </div>
        </div>
    );
};

export default Home;
