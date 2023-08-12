import React, {useEffect} from 'react';
import {useSpring, animated} from '@react-spring/web';
import Typography from '@mui/material/Typography';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import SchoolIcon from '@mui/icons-material/School';
import GroupIcon from '@mui/icons-material/Group';
import PublicIcon from '@mui/icons-material/Public';
import {styled, Theme} from '@mui/system';

const AboutRoot = styled('div')(({theme}: { theme: Theme }) => ({
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    minHeight: '100vh',
    textAlign: 'center',
    flexDirection: 'column',
    position: 'relative',
    backgroundImage: `url(${process.env.PUBLIC_URL}/images/bg.png)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    [theme.breakpoints.down('sm')]: {
        justifyContent: 'center',
        padding: theme.spacing(4),
    },
}));

const AboutItem = styled('div')(({theme}: { theme: Theme }) => ({
    display: 'flex',
    alignItems: 'center',
    marginBottom: '45px',
    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: '30px',
    },
}));

const About: React.FC = () => {
    const slideUp = useSpring({
        transform: 'translateX(0)',
        from: {transform: 'translateX(100px)'},
        config: {duration: 1000},
    });

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const fadeIn = useSpring({opacity: 1, from: {opacity: 0}, config: {duration: 1000}});

    return (
        <AboutRoot>
            <animated.div style={fadeIn}>
                <Typography variant="h3" style={{marginTop: '55px'}}>
                    About
                    <span style={{color: 'goldenrod'}}> Quran Castle</span>
                </Typography>
            </animated.div>
            <animated.div style={slideUp}>
                <animated.div style={fadeIn}>
                    <AboutItem>
                        <CheckCircleOutlineIcon style={{marginRight: '10px', color: 'goldenrod'}}/>
                        <Typography variant="subtitle2" sx={{lineHeight: '1.6'}}>
                            <strong> Join us </strong>on a transformative journey of learning and spiritual growth of
                            Quran.
                        </Typography>
                    </AboutItem>
                    <AboutItem>
                        <PublicIcon style={{marginRight: '10px', color: 'goldenrod'}}/>
                        <Typography variant="subtitle2" sx={{lineHeight: '1.6'}}>
                            We provide quality Quran, Arabic, and Islamic studies classes for non-Arabic speakers
                            of{' '}
                            <strong>all ages worldwide.</strong>
                        </Typography>
                    </AboutItem>
                    <AboutItem>
                        <SchoolIcon style={{marginRight: '10px', color: 'goldenrod'}}/>
                        <Typography variant="subtitle2" sx={{lineHeight: '1.6'}}>
                            Our mission is to make learning the Quran and Islamic teachings <strong>accessible and
                            convenient</strong> for
                            everyone, regardless of their language or location.
                        </Typography>
                    </AboutItem>
                    <AboutItem>
                        <GroupIcon style={{marginRight: '10px', color: 'goldenrod'}}/>
                        <Typography variant="subtitle2" sx={{lineHeight: '1.6'}}>
                            With a team of <strong>experienced teachers</strong> and a passion for spreading knowledge,
                            we aim to create a
                            positive and enriching learning experience for our students.
                        </Typography>
                    </AboutItem>
                    <AboutItem>
                        <PublicIcon style={{marginRight: '10px', color: 'goldenrod'}}/>
                        <Typography variant="subtitle2" sx={{lineHeight: '1.6'}}>
                            At Quran Castle, we are an esteemed online institution dedicated to offering comprehensive
                            and engaging{' '}
                            <strong>online classes</strong> for non-Arabic speakers.
                        </Typography>
                    </AboutItem>
                    <AboutItem>
                        <SchoolIcon style={{marginRight: '10px', color: 'goldenrod'}}/>
                        <Typography variant="subtitle2" sx={{lineHeight: '1.6'}}>
                            With a focus on Arabic, Quran, and Islamic studies, our programs cater to students of{' '}
                            <strong>all ages and proficiency levels</strong>.
                        </Typography>
                    </AboutItem>


                    {/* Repeat the above pattern for other About items */}
                </animated.div>
            </animated.div>
        </AboutRoot>
    );
};

export default About;
