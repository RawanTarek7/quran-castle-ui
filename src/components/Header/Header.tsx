import React, {useEffect, useState} from 'react';
import {AppBar, Toolbar, Box, Avatar} from '@mui/material';
import {useHistory} from 'react-router-dom';
import {GlobalButton} from '../../assets/styles/GlobalButton';
import {Menu, MenuItem} from '@mui/material';

const Header = () => {
    const history = useHistory();
    const [isLogged, setIsLogged] = useState(false);
    const [scrollBackground, setScrollBackground] = useState('black');
    const [prevScrollY, setPrevScrollY] = useState(0);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleAvatarClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
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
                setScrollBackground('black');
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

                {isLogged ? (
                    <div>
                        <Avatar
                            onClick={handleAvatarClick}
                            style={{marginLeft: '15px', marginRight: '15px', cursor: 'pointer'}}
                            src="/broken-image.jpg"
                        />
                        <Menu
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleMenuClose}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                        >
                            <MenuItem
                                onClick={() => {
                                    history.push('/user-profile');
                                    handleMenuClose();
                                }}
                            >
                                Profile
                            </MenuItem>
                            <MenuItem onClick={() => {
                                setIsLogged(false)
                                handleMenuClose()
                            }}
                            >Logout</MenuItem>
                        </Menu>
                    </div>
                ) : (
                    <div style={{display: 'flex', flexDirection: 'row', gap: '20px'}}>
                        <GlobalButton
                            sx={{
                                backgroundColor: 'black',
                                color: 'goldenrod',
                                border: '1px solid goldenrod',
                                '&:hover': {
                                    backgroundColor: 'goldenrod',
                                    color: 'black',
                                    borderColor: 'black',
                                },
                            }}
                            onClick={() => history.push('/plans')}
                        >
                            Subscribe
                        </GlobalButton>
                        <GlobalButton onClick={() => history.push('/auth')}>Sign In</GlobalButton>
                    </div>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Header;
