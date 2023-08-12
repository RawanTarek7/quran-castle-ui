import {Box, Typography} from "@mui/material";
import {GlobalButton} from "../../assets/styles/GlobalButton";
import React from "react";
import {useHistory} from "react-router-dom";

const NotFoundPage: React.FC = () => {
    const history = useHistory();


    const RedirectToHome = () => {
        history.push('/');

    }
    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            minHeight="100vh"
        >
            <img
                src={process.env.PUBLIC_URL + '/images/crossing-sign.png'}
                alt="404"
                width='450px'
                style={{marginBottom: '50px'}}
            /> <Typography variant="h6" color="textSecondary" gutterBottom>
            Oops! The page you are looking for doesn't exist.
        </Typography>
            <GlobalButton autoFocus onClick={RedirectToHome}
                          color="primary" sx={{marginTop: '16px', width: '200px', cursor: 'pointer'}}>
                Home
            </GlobalButton>
        </Box>
    );
};

export default NotFoundPage;
