import React, {useEffect, useState} from 'react';
import {AppBar, Toolbar, Box, Link, Hidden} from '@mui/material';
import {useHistory} from 'react-router-dom';
import {GlobalButton} from '../../assets/styles/GlobalButton';

const Header = () => {
    const history = useHistory();
    const [isLogged, setIsLogged] = useState(false);
    const [scrollBackground, setScrollBackground] = useState('white');
    const [prevScrollY, setPrevScrollY] = useState(0);

    const handleAvatarClick = (event: React.MouseEvent<HTMLElement>) => {
        setIsLogged(false);
    };

    const handleScroll = () => {
        const scrollY = window.scrollY;
        const maxScrollY = 200;
        const opacity = Math.min(0.7, scrollY / maxScrollY);
        setScrollBackground(`rgba(0, 0, 0, ${opacity})`);
        setPrevScrollY(scrollY);
    };

    useEffect(() => {
        setIsLogged(true);

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const handleScrollUp = () => {
            if (window.scrollY < prevScrollY) {
                setScrollBackground('white');
            }
            setPrevScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScrollUp);
        return () => {
            window.removeEventListener('scroll', handleScrollUp);
        };
    }, [prevScrollY]);

    const handleLogoClick = () => {
        history.push('/');
    };

    return (
        <AppBar position="fixed" sx={{backgroundColor: scrollBackground, padding: '5px'}}>
            <Toolbar>
                <Box sx={{display: 'flex', alignItems: 'center', flexGrow: 1, cursor: 'pointer'}}>
                    <img
                        onClick={handleLogoClick}
                        src={process.env.PUBLIC_URL + '/images/logo-light.png'}
                        alt="Quran Castle Logo"
                        style={{height: '75px', width: '75px', marginRight: '10px'}}
                    />
                </Box>

                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '15px',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Link
                        sx={{
                            color: 'goldenrod',
                            '&:hover': {
                                textDecoration: 'underline',
                            },
                        }}
                        underline="none"
                        href="/user-profile"
                    >
                        Profile
                    </Link>
                    <Link
                        sx={{
                            color: 'goldenrod',
                            '&:hover': {
                                textDecoration: 'underline',
                            },
                        }}
                        underline="none"
                        href="/plans"
                    >
                        Plans
                    </Link>
                    <Link
                        sx={{
                            color: 'goldenrod',
                            marginRight: '20px',
                            '&:hover': {
                                textDecoration: 'underline',
                            },
                        }}
                        underline="none"
                        href="/about-teachers"
                    >
                        Teachers
                    </Link>
                </div>

                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                    {isLogged ? (
                        <img
                            onClick={handleAvatarClick}
                            style={{
                                marginLeft: '15px',
                                marginRight: '15px',
                                cursor: 'pointer',
                                height: '35px',
                                width: '35px'
                            }}
                            src={process.env.PUBLIC_URL + '/images/logout.png'}
                            alt="Exit"
                        />
                    ) : (
                        <div>
                            <Hidden mdUp>
                                <img
                                    onClick={() => history.push('/auth')} style={{
                                    marginLeft: '15px',
                                    marginRight: '15px',
                                    cursor: 'pointer',
                                    height: '35px',
                                    width: '35px'
                                }}
                                    src={process.env.PUBLIC_URL + '/images/login.png'}
                                    alt="login"
                                />
                            </Hidden>
                            <Hidden mdDown>
                                <GlobalButton onClick={() => history.push('/auth')}>Sign In
                                </GlobalButton>
                            </Hidden>
                        </div>
                    )}
                </div>
            </Toolbar>
        </AppBar>
    )
        ;
};

export default Header;

