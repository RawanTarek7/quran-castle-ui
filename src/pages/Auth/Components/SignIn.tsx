import React, {FC, useEffect, useState} from 'react';
import {Typography, TextField, Link, Box, IconButton, InputAdornment} from '@mui/material';
import {GlobalButton} from '../../../assets/styles/GlobalButton';
import ForgotPassword from "./ForgetPassword";
import {Visibility, VisibilityOff} from '@mui/icons-material';

interface LoginFormProps {
    toggleForm: () => void;
}

const Signin: FC<LoginFormProps> = ({toggleForm}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [forgotPassword, setForgotPassword] = useState(false); // State to track if "Forgot Password" link is clicked
    const [showPassword, setShowPassword] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };
    const handleTogglePasswordVisibility = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log('Username:', username);
        console.log('Password:', password);
    };

    const handleForgotPassword = () => {
        setForgotPassword(true);
    };

    const handleGoBack = () => {
        setForgotPassword(false);
    };

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh',
                position: 'relative', // Add position property
                backgroundImage: `url(${process.env.PUBLIC_URL}/images/bg.png)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center', // Center the background image
            }}>
            <div style={{
                maxWidth: '400px',
                width: '100%',
                boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.16)',
                marginTop: '150px',
                padding: '20px',
                backgroundColor: 'rgba(255, 255, 255, 0.7)', // Apply semi-transparent overlay
                borderRadius: '8px',
                marginLeft: '15px',
                marginRight: '15px'
            }}>
                {forgotPassword ? (
                    <ForgotPassword goBack={handleGoBack}/>
                ) : (
                    <div>
                        <Typography style={{
                            display: 'flex',
                            justifyContent: 'center',
                            marginBottom: '15px',
                            fontWeight: 'bold'
                        }} variant={"h4"}>
                            Sign In</Typography>

                        <form onSubmit={handleSubmit}>
                            <TextField
                                label="Username"
                                variant="outlined"
                                value={username}
                                onChange={handleUsernameChange}
                                fullWidth
                                margin="normal"
                                required
                            />
                            <TextField
                                label="Password"
                                variant="outlined"
                                type={showPassword ? 'text' : 'password'}
                                value={password}
                                onChange={handlePasswordChange}
                                fullWidth
                                margin="normal"
                                required
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton onClick={handleTogglePasswordVisibility}>
                                                {showPassword ? <VisibilityOff/> : <Visibility/>}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                            />
                            <div style={{display: "flex", justifyContent: 'center', alignItems: 'center'}}>

                                <GlobalButton type="submit" color="primary" sx={{
                                    marginTop: '16px'
                                }}>
                                    Sign In
                                </GlobalButton></div>
                            <Box textAlign="center" sx={{marginTop: '12px'}}>
                                <Typography variant="body2">
                                    <Link component="button" underline="none"
                                          onClick={handleForgotPassword}>
                                        Forgotten Password ?
                                    </Link>
                                </Typography>
                            </Box>

                            <Typography style={{display: 'flex', alignItems: 'center', gap: '5px'}}>
                                Don't have an account?{' '}
                                <Link component="button" underline="none" onClick={toggleForm}>

                                    Create New Account
                                </Link>
                            </Typography>
                        </form>
                    </div>
                )}

            </div>
        </div>
    );
};

export default Signin;
