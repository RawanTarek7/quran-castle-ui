import React, {useEffect} from 'react';
import {Typography} from '@mui/material';
import { useSpring, animated } from '@react-spring/web';

const TermsAndConditionsPage: React.FC = () => {
    const fadeIn = useSpring({opacity: 1, from: {opacity: 0}, config: {duration: 500}});
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
        <div style={{
            padding: '20px', minHeight: '100vh',
            display: 'flex', flexDirection: 'column',
            marginTop: '75px', textAlign: 'center'
        }}>
            <animated.div style={fadeIn}>

                <Typography variant="h2"
                            gutterBottom>
                    Terms and Conditions
                </Typography></animated.div>
            <div style={{

                display: 'flex', flexDirection: 'column',

                justifyContent: 'center',
                alignItems: 'center'
            }}><Typography variant="body1" paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id ante ut
                erat auctor tempus. Donec non facilisis libero. Quisque in urna in dolor
                interdum euismod vel non leo. Fusce a felis eu odio suscipit ullamcorper
                nec vitae libero. Integer vel elit nec mi ultrices faucibus et ac neque.
            </Typography>
                <Typography variant="body1" paragraph>
                    Curabitur quis magna et justo facilisis blandit. Pellentesque varius urna a
                    dolor posuere, at tempor lectus bibendum. Vivamus sit amet iaculis erat. Nam
                    non orci eu lorem euismod tincidunt. Vestibulum ante ipsum primis in faucibus
                    orci luctus et ultrices posuere cubilia Curae; Nulla facilisi. Nullam nec
                    arcu nec nisi fringilla luctus. Fusce non metus ut nisi cursus ultricies a a
                    mauris. Sed sed arcu id odio dapibus sollicitudin sit amet nec odio.
                </Typography>
                <Typography variant="body1" paragraph>
                    Curabitur quis magna et justo facilisis blandit. Pellentesque varius urna a
                    dolor posuere, at tempor lectus bibendum. Vivamus sit amet iaculis erat. Nam
                    non orci eu lorem euismod tincidunt. Vestibulum ante ipsum primis in faucibus
                    orci luctus et ultrices posuere cubilia Curae; Nulla facilisi. Nullam nec
                    arcu nec nisi fringilla luctus. Fusce non metus ut nisi cursus ultricies a a
                    mauris. Sed sed arcu id odio dapibus sollicitudin sit amet nec odio.
                </Typography>
            </div>
        </div>
    );
};

export default TermsAndConditionsPage;
