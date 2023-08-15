import React, {useState} from 'react';
import {Container, Typography, TextField, Grid} from '@mui/material';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import {GlobalButton} from "../../assets/styles/GlobalButton";

const theme = createTheme();

const ContactUs: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handleMessageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Message:', message);
    };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Container maxWidth="md" sx={{
                paddingTop: '40px', paddingBottom: '60px',
            }}>
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <Typography style={{color: 'black', marginBottom: '75px'}} variant="h3" gutterBottom>
                        Contact Us
                    </Typography>
                </div>
                <Grid style={{
                    boxShadow: '5px 10px 30px rgba(252, 251, 246, 0.47)',
                    padding: '35px',
                    backgroundColor: 'rgba(252,251,246,0.68)',borderRadius:'25px'
                }} container
                      spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="Name"
                            variant="outlined"
                            fullWidth
                            value={name}
                            onChange={handleNameChange}
                            margin="normal"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="Email"
                            variant="outlined"
                            fullWidth
                            value={email}
                            onChange={handleEmailChange}
                            margin="normal"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Message"
                            variant="outlined"
                            multiline
                            fullWidth
                            sx={{borderColor: 'goldenrod'}}
                            rows={4}
                            value={message}
                            onChange={handleMessageChange}
                            margin="normal"
                        />
                    </Grid>
                    <Grid item xs={12}>

                        <GlobalButton color="primary"
                                      onClick={handleSubmit}>
                            Submit
                        </GlobalButton>
                    </Grid>
                </Grid>
            </Container>
        </ThemeProvider>
    );
};

export default ContactUs;
