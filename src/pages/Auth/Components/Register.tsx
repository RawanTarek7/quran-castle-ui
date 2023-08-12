import React, {FC, useEffect, useState} from 'react';
import {TextField, Typography, InputAdornment, IconButton, Link} from '@mui/material';
import {GlobalButton} from '../../../assets/styles/GlobalButton';
import {Visibility, VisibilityOff} from "@mui/icons-material";
import {useHistory} from "react-router-dom";

interface RegisterFormProps {
    toggleForm: () => void;
}

const Register: FC<RegisterFormProps> = ({toggleForm}) => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [nationality, setNationality] = useState('');
    const [username, setUsername] = useState('');
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [gender, setGender] = useState('');
    const [nationalId, setNationalId] = useState('');
    const [age, setAge] = useState('');
    const [payoneerAccountNo, setPayoneerAccountNo] = useState('');
    const history = useHistory();
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    const handleFullNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFullName(event.target.value);
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };
    const handleTogglePasswordVisibility = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handleAddressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAddress(event.target.value);
    };

    const handleNationalityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNationality(event.target.value);
    };

    const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    };

    const handleCountryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCountry(event.target.value);
    };

    const handleCityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCity(event.target.value);
    };

    const handleGenderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setGender(event.target.value);
    };

    const handleNationalIdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNationalId(event.target.value);
    };

    const handleAgeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAge(event.target.value);
    };

    const handlePayoneerAccountNoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPayoneerAccountNo(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // Add your registration logic here
        console.log('Registration form submitted');
    };

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh',
                position: 'relative',
                backgroundImage: `url(${process.env.PUBLIC_URL}/images/bg.png)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div
                style={{
                    boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.16)',
                    maxWidth: '500px',
                    width: '100%',
                    padding: '20px',
                    marginTop: '150px',
                    marginLeft: '15px',
                    marginRight: '15px',
                    marginBottom: '45px',
                    backgroundColor: 'rgba(255, 255, 255, 0.7)',
                    borderRadius: '8px',
                }}
            >
                <Typography
                    style={{display: 'flex', justifyContent: 'center', marginBottom: '15px', fontWeight: 'bold'}}
                    variant={"h4"}>Register for
                    free</Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        label="Full Name"
                        variant="outlined"
                        value={fullName}
                        onChange={handleFullNameChange}
                        fullWidth
                        margin="normal"
                        required
                    />
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
                        label="Email"
                        variant="outlined"
                        value={email}
                        onChange={handleEmailChange}
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
                    <TextField
                        label="Confirm Password"
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
                    <TextField
                        label="Address"
                        variant="outlined"
                        value={address}
                        onChange={handleAddressChange}
                        fullWidth
                        margin="normal"
                        required
                    />
                    <TextField
                        label="Nationality"
                        variant="outlined"
                        value={nationality}
                        onChange={handleNationalityChange}
                        fullWidth
                        margin="normal"
                        required
                    />

                    <TextField
                        label="Country"
                        variant="outlined"
                        value={country}
                        onChange={handleCountryChange}
                        fullWidth
                        margin="normal"
                        required
                    />
                    <TextField
                        label="City"
                        variant="outlined"
                        value={city}
                        onChange={handleCityChange}
                        fullWidth
                        margin="normal"
                        required
                    />
                    <TextField
                        label="Gender"
                        variant="outlined"
                        value={gender}
                        onChange={handleGenderChange}
                        fullWidth
                        margin="normal"
                        required
                    />
                    <TextField
                        label="National ID"
                        variant="outlined"
                        value={nationalId}
                        onChange={handleNationalIdChange}
                        fullWidth
                        margin="normal"
                        required
                    />
                    <TextField
                        label="Age"
                        variant="outlined"
                        value={age}
                        onChange={handleAgeChange}
                        fullWidth
                        margin="normal"
                        required
                    />
                    <TextField
                        label="Payoneer Account No"
                        variant="outlined"
                        value={payoneerAccountNo}
                        onChange={handlePayoneerAccountNoChange}
                        fullWidth
                        margin="normal"
                        required
                    />
                    <Typography variant="caption">By clicking Sign Up, you agree to our <span
                        style={{textDecoration: "underline", cursor: "pointer"}}
                        onClick={() => history.push('/terms-conditions')}>Terms And
                        Conditions</span></Typography>

                    <div style={{display: "flex", justifyContent: 'center', alignItems: 'center'}}>
                        <GlobalButton type="submit" color="primary" sx={{marginTop: '16px'}}>
                            Sign Up
                        </GlobalButton></div>
                    <Typography variant="body2">
                        Already have an account?{' '}
                        <Link component="button" underline="none" onClick={toggleForm}>
                            Sign In
                        </Link>
                    </Typography>
                </form>

            </div>
        </div>);
};

export default Register;
