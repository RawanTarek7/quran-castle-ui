import React, {FC, useEffect, useState} from 'react';
import {
    Typography,
    TextField,
    Link,
    FormControl,
    FormLabel,
    RadioGroup,
    Radio,
    FormControlLabel,
    InputAdornment, IconButton, SelectChangeEvent,
} from '@mui/material';
import {GlobalButton} from "../../../assets/styles/GlobalButton";
import {Visibility, VisibilityOff} from "@mui/icons-material";
import CustomSelect from "../../../assets/styles/SubjectCustomSelect";
import {useHistory} from "react-router-dom";

interface RegisterFormProps {
    toggleForm: () => void;
}

const RegisterTrial: FC<RegisterFormProps> = ({toggleForm}) => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [preferredTeacher, setPreferredTeacher] = useState('');
    const [classTime, setClassTime] = useState('');
    const [timesPerWeek, setTimesPerWeek] = useState('');
    const [selectedSubjects, setSelectedSubjects] = useState<string[]>([]);
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const history = useHistory();


    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    const handleAgeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAge(event.target.value);
    };
    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };
    const handleTogglePasswordVisibility = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };


    const handleCountryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCountry(event.target.value);
    };

    const handleCityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCity(event.target.value);
    };

    const handlePhoneNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPhoneNumber(event.target.value);
    };

    const handlePreferredTeacherChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPreferredTeacher(event.target.value);
    };

    const handleClassTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setClassTime(event.target.value);
    };

    const handleTimesPerWeekChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTimesPerWeek(event.target.value);
    };

    const handleSubjectChange = (event: SelectChangeEvent<string[]>) => {
        setSelectedSubjects(event.target.value as string[]);
    };
    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        setSubmitted(true); // Set submitted to true on form submission

        if (
            name &&
            age &&
            country &&
            city &&
            password &&
            phoneNumber &&
            preferredTeacher &&
            classTime &&
            timesPerWeek &&
            selectedSubjects.length &&
            email
        ) {
            console.log('Registration form submitted');
        } else {
            console.log('Please fill in all required fields');
        }
    };

    // @ts-ignore
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
                    maxWidth: '500px',
                    width: '100%',
                    padding: '20px',
                    marginTop: '150px',
                    marginLeft: '15px',
                    marginRight: '15px',
                    marginBottom: '45px',
                    boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.16)',
                    backgroundColor: 'rgba(255, 255, 255, 0.7)', // Apply semi-transparent overlay
                    borderRadius: '8px', // Add border radius for the content
                }}
            ><Typography style={{display: 'flex', justifyContent: 'center', marginBottom: '15px', fontWeight: 'bold'}}
                         variant={"h4"}>
                Register for A Trial Session </Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        label="Name of the student"
                        variant="outlined"
                        value={name}
                        onChange={handleNameChange}
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
                        label="Age"
                        variant="outlined"
                        value={age}
                        onChange={handleAgeChange}
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
                        label="Phone number"
                        variant="outlined"
                        value={phoneNumber}
                        onChange={handlePhoneNumberChange}
                        fullWidth
                        margin="normal"
                        required
                    />
                    <CustomSelect
                        labelId="subject-label"
                        selectedSubjects={selectedSubjects}
                        handleSubjectChange={handleSubjectChange}
                    />
                    <div>
                        <FormControl component="fieldset" margin="normal" required>
                            <FormLabel component="legend">Preferred teacher (male / female)</FormLabel>
                            <RadioGroup
                                aria-label="Preferred Teacher"
                                name="preferredTeacher"
                                value={preferredTeacher}
                                onChange={handlePreferredTeacherChange}
                                row
                            >
                                <FormControlLabel value="male" control={<Radio/>} label="Male"/>
                                <FormControlLabel value="female" control={<Radio/>} label="Female"/>
                            </RadioGroup>
                        </FormControl>
                    </div>
                    <FormControl component="fieldset" margin="normal" required>
                        <FormLabel component="legend">Time of the class</FormLabel>
                        <RadioGroup
                            aria-label="Class Time"
                            name="classTime"
                            value={classTime}
                            onChange={handleClassTimeChange}
                            row
                        >
                            <FormControlLabel value="30min" control={<Radio/>} label="30 min"/>
                            <FormControlLabel value="60min" control={<Radio/>} label="60 min"/>
                        </RadioGroup>
                    </FormControl>
                    <TextField
                        label="How many times per week"
                        variant="outlined"
                        value={timesPerWeek}
                        onChange={handleTimesPerWeekChange}
                        fullWidth
                        margin="normal"
                        required
                    />
                    <Typography variant="caption">By clicking Sign Up, you agree to our <span
                        style={{textDecoration: "underline", cursor: "pointer"}}
                        onClick={() => history.push('/terms-conditions')}>Terms And
                        Conditions</span></Typography>

                    <div style={{display: "flex", justifyContent: 'center', alignItems: 'center'}}>

                        <GlobalButton type="submit" color="primary" sx={{
                            marginTop: '16px',
                        }}>
                            Sign Up
                        </GlobalButton>
                    </div>
                    {submitted && (!name || !age || !country || !city || !phoneNumber || !preferredTeacher || !classTime || !timesPerWeek || selectedSubjects.length === 0 || !email) && (
                        <Typography variant="body2" color="error">
                            Please fill in all required fields.
                        </Typography>
                    )}

                </form>
                <Typography style={{display: 'flex', alignItems: 'center', gap: '5px'}}>
                    Already have an account?{' '}
                    <Link component="button" underline="none" onClick={() => history.push('/auth')}>
                        Login
                    </Link>
                </Typography>
            </div>
        </div>
    );
};

export default RegisterTrial;
