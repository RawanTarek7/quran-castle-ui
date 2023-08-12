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
    [theme.breakpoints.up('sm')]: {
        height: '70vh',
        minHeight: 500,
        maxHeight: 1300,
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
            <div
                style={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0,
                    backgroundColor: 'black',
                    opacity: 0.5,
                    zIndex: -1,
                }}
            />
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
                    <div style={{paddingLeft:'35px'}}>
                        <Typography variant="h2">
                            <strong> Quran With Us</strong>{' '}
                        </Typography>
                        <Typography style={{marginTop: '20px'}} color="inherit" variant="h6">
                            <strong> Plans starting from 48 EGP per month</strong>{' '}
                        </Typography>
                        <Typography
                            color="inherit"
                            style={{marginTop: '20px'}}
                            variant="h6"
                            sx={{mb: 4, mt: {xs: 4, sm: 10}}}
                        >
                            Join us on a transformative journey of learning and spiritual growth of Quran.{' '}
                        </Typography>
                    <GlobalButton color="primary" onClick={handleTrialSessionClick}>
                        Trial Session
                    </GlobalButton>
                    </div>

                </animated.div>
            </div>
        </HeroLayout>
    );
};

export default Hero;
