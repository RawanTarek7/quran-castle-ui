import React from 'react';
import {Typography} from '@mui/material';
import {useHistory} from 'react-router-dom';
import {styled, SxProps} from '@mui/system';
import {useSpring, animated} from '@react-spring/web';
import {GlobalButton} from '../../assets/styles/GlobalButton';

const HeroLayoutRoot = styled('div')(({theme}) => ({
    color: 'white',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'start',
    paddingLeft: '0',

    [theme.breakpoints.up('sm')]: {
        height: '100vh',
        minHeight: 500,
        maxHeight: 1300,
        paddingLeft: '30px',

    },
}));

const Background = styled('div')({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    zIndex: -2,
});

interface HeroLayoutProps {
    sxBackground: SxProps;
    children: React.ReactNode;
}

const HeroLayout: React.FC<HeroLayoutProps> = ({sxBackground, children}) => {
    return (
        <HeroLayoutRoot>
            <Background sx={sxBackground}/>
            {children}
        </HeroLayoutRoot>
    );
};

interface HeroProps {
    startTrialSession: () => void;
}

const Hero: React.FC<HeroProps> = ({startTrialSession}) => {
    const history = useHistory();

    const slideUp = useSpring({
        transform: 'translateY(0)',
        from: {transform: 'translateY(100px)'},
        config: {duration: 500},
    });

    const handleTrialSessionClick = () => {
        history.push('/trialRegister');
        startTrialSession();
    };

    return (
        <HeroLayout
            sxBackground={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/images/hero-img.jpeg)`,
                backgroundPosition: 'center',
            }}
        >
            <div className="header-heading">
                <animated.div style={slideUp}>
                    <div
                        style={{
                            color: 'black',
                            backgroundColor: '#FFFFFF77',
                            borderRadius: '25px',
                            padding: '27px',
                        }}
                    >
                        <Typography variant="h3">
                            <strong> Quran With Us</strong>
                        </Typography>
                        <Typography
                            style={{marginTop: '15px', color: 'black', fontWeight: '600'}}
                            variant="h6"
                        >
                            <strong> Plans starting from 48 EGP per month</strong>
                        </Typography>
                        <Typography
                            style={{marginTop: '10px', color: 'black'}}
                            variant="h6"
                            sx={{mb: 4, mt: {xs: 2, sm: 4}}}
                        >
                            Join us for transformative Quranic learning and growth{' '}
                        </Typography>
                        <GlobalButton color="primary" sx={{marginTop: '0'}} onClick={handleTrialSessionClick}>
                            Trial Session
                        </GlobalButton>
                    </div>
                </animated.div>
            </div>
        </HeroLayout>
    );
};

export default Hero;
