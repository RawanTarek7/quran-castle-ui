import React from 'react';
import {Box, Link, Typography} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import {styled} from '@mui/system';

const StyledFooter = styled('footer')(({theme}) => ({
    backgroundColor: 'white',
    color: 'black',
    padding: theme.spacing(5, 0), // Adjust padding
}));

const FooterContent = styled(Box)(({theme}) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    alignItems: 'center',

    paddingBottom: '25px',
    backgroundColor: 'white',
    [theme.breakpoints.up('md')]: {
        flexDirection: 'row',
        alignItems: 'center',

        justifyContent: 'space-evenly',
    },
}));

const SocialIcons = styled(Box)(({theme}) => ({
    display: 'flex',
    justifyContent: 'center',
    gap: '25px',
}));


function Copyright(props: any) {
    return (
        <Typography variant="body2" color="goldenrod" align="start" textAlign='start' paddingLeft="35px" {...props}>
            {'Copyright © '}
            <Link underline='none' color="inherit" href="/">
                Quran Castle
            </Link>
            {'  '}{new Date().getFullYear()}{' '}All Rights Reserved
        </Typography>
    );
}

const Footer: React.FC = () => {

    return (
        <div>
            <StyledFooter>
                <FooterContent>
                    <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                        <Link underline='none' href="/about-us" color="inherit">About Us</Link>
                        <Link underline='none' href="/about-teachers" color="inherit">About Teachers</Link>
                        <Link underline='none' href="/terms-conditions" color="inherit">Terms And Conditions</Link>

                    </div>
                    <div>
                        <Typography style={{marginBottom: '15px', textAlign: 'center'}} variant="h6">Contact
                            Us</Typography>
                        <Typography>Email: info@example.com</Typography>
                        <Typography>Phone: (123) 456-7890</Typography>

                    </div>
                    <div>
                        <Typography style={{marginBottom: '15px', textAlign: 'center'}} variant="h6">Follow
                            Us</Typography>
                        <SocialIcons>
                            <Link href="#" color="inherit">
                                <FacebookIcon fontSize="large"/>
                            </Link>
                            <Link href="#" color="inherit">
                                <TwitterIcon fontSize="large"/>
                            </Link>
                            <Link href="#" color="inherit">
                                <InstagramIcon fontSize="large"/>
                            </Link>
                        </SocialIcons>
                    </div>
                </FooterContent>

            </StyledFooter>
            <div style={{display: 'flex', justifyContent:'end',backgroundColor: 'white', padding: '25px'}}>
                <Copyright/>
            </div>
        </div>
    );
};

export default Footer;
