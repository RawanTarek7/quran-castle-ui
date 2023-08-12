// ForgotPassword.tsx

import React, {FC} from 'react';
import {Typography, TextField, Box, Link} from '@mui/material';
import {GlobalButton} from "../../../assets/styles/GlobalButton";

interface ForgotPasswordProps {
    goBack: () => void;
}

const ForgotPassword: FC<ForgotPasswordProps> = ({goBack}) => {
    const handleResetPassword = () => {
        console.log('Reset Password clicked');
    };

    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
        >
            <Typography style={{display: 'flex', justifyContent: 'center', marginBottom: '15px', fontWeight: 'bold'}}
                        variant={"h4"}>Find Your Account</Typography>
            <form>
                <TextField
                    label="Email"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    required
                />

                <Typography variant="caption">We'll send you a code to your email address
                </Typography>
                <div style={{display: "flex", justifyContent: 'center', alignItems: 'center'}}>
                    <GlobalButton type="button" color="primary" sx={{marginTop: '16px'}}
                                  onClick={handleResetPassword}>
                        Continue
                    </GlobalButton></div>
                <Typography style={{display: 'flex', alignItems: 'center', gap: '5px'}}>
                    Log in with password?{' '}
                    <Link underline="none" component="button" onClick={goBack}>

                        Login
                    </Link>
                </Typography>
            </form>
        </Box>
    );
};

export default ForgotPassword;
