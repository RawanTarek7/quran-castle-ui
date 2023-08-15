import React, {useEffect, useState} from 'react';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import StarIcon from '@mui/icons-material/StarBorder';
import Box from '@mui/material/Box';
import GlobalStyles from '@mui/material/GlobalStyles';
import {GlobalButton} from "../../assets/styles/GlobalButton";
import {useSpring, animated} from '@react-spring/web';
import './plans.css'

const tiers = [
    {
        title: '4 hours',
        price: '48',
        description: ['2 live classes per week for 30 mins'],
    },
    {
        title: '6 hours ',
        price: '72',
        description: ['3 live classes per week for 30 mins'],
    },
    {
        title: '8 hours ',
        price: '96',
        description: ['4 live classes per week for 30 mins'],
    },
    {
        title: '10 hours ',
        price: '120',
        description: ['5 live classes per week for 30 mins'],
    },
    {
        title: '12 hours ',
        price: '144',
        description: ['3 live classes per week for 60 mins'],
    },
    {
        title: 'Customized ',
        price: 'Customize',
        description: ['The Plan That suits  you'],
    },
];

const defaultTheme = createTheme();

export default function Pricing() {
    const [selectedTier, setSelectedTier] = useState<number | null>(2);
    const [customizedPlan, setCustomizedPlan] = useState(false);
    const slideUp = useSpring({
        transform: 'translateY(0)',
        from: {transform: 'translateY(100px)'},
        config: {duration: 500}
    });
    const fadeIn = useSpring({opacity: 1, from: {opacity: 0}, config: {duration: 500}});


    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleSelectedPlan = (index: number) => {
        console.log('The Selected Plan', index)
    }


    const onSelectPlan = (index: number) => {
        setSelectedTier(index === selectedTier ? null : index)
        if (index === 5) {
            setCustomizedPlan(true)
        } else {
            setCustomizedPlan(false)

        }
    };


    return (
            <ThemeProvider theme={defaultTheme}>
                <GlobalStyles styles={{ul: {margin: 0, padding: 0, listStyle: 'none'}}}/>
                <CssBaseline/>

                <Container disableGutters maxWidth="sm" component="main" sx={{pt: 8, pb: 6}}>
                    <animated.div style={fadeIn}>

                        <Typography
                            variant="h3"
                            align="center"
                            color="text.primary"
                            gutterBottom
                        >
                            Plans
                        </Typography>
                    </animated.div>
                </Container>


                <Container maxWidth="md" component="main">
                    <Grid container sx={{justifyContent: 'center'}} spacing={5} alignItems="flex-end">
                        {tiers.map((tier, index) => (
                            <Grid
                                item
                                key={tier.title}
                                xs={12}
                                sm={tier.title === 'Enterprise' ? 12 : 6}
                                md={4}
                            >
                                <animated.div style={slideUp}>

                                    <Card
                                        sx={{
                                            borderRadius: '155px',
                                            border: '2px solid transparent',
                                            cursor: 'pointer',
                                            minHeight: '270px',
                                            width: '270px',
                                            marginLeft:'35px',
                                            transition: 'border-color 0.3s ease',
                                            '&:hover': {
                                                border: '2px solid goldenrod',
                                                boxShadow: '5px 10px 30px rgba(255, 217, 0, 0.336)'

                                            },
                                            borderColor: index === selectedTier ? 'goldenrod' : 'transparent',
                                        }}
                                        onClick={() => onSelectPlan(index)}
                                    >
                                        <CardHeader
                                            title={tier.title}
                                            titleTypographyProps={{align: 'center'}}
                                            action={tier.title === 'Pro' ? <StarIcon/> : null}
                                            subheaderTypographyProps={{
                                                align: 'center',
                                            }}
                                            sx={{
                                                backgroundColor: (theme) =>
                                                    theme.palette.mode === 'light'
                                                        ? theme.palette.grey[200]
                                                        : theme.palette.grey[700],
                                            }}
                                        />
                                        <CardContent>
                                            <Box
                                                sx={{
                                                    display: 'flex',
                                                    justifyContent: 'center',
                                                    alignItems: 'baseline',
                                                    mb: 2,
                                                }}
                                            >
                                                <Typography component="h2" variant="h3" color="text.primary">
                                                    {tier.price} {tier.price === 'Customize' ? '' : 'EGP'}
                                                </Typography>
                                                <Typography variant="h6" color="text.secondary">
                                                    {tier.price === 'Customize' ? '' : '/mo'}
                                                </Typography>
                                            </Box>
                                            <ul>
                                                {tier.description.map((line) => (
                                                    <Typography
                                                        component="li"
                                                        variant="subtitle1"
                                                        align="center"
                                                        key={line}
                                                    >
                                                        {line}
                                                    </Typography>
                                                ))}
                                            </ul>
                                        </CardContent>
                                    </Card>
                                </animated.div>
                            </Grid>
                        ))}
                    </Grid>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        marginTop: '35px',
                        paddingBottom: '35px',
                        alignItems: 'center'
                    }}>

                        <GlobalButton onClick={() => handleSelectedPlan(selectedTier || 0)} sx={{
                            marginTop: '16px',
                            display: 'flex',
                            fontSize: '20px',
                            width: '350px',
                            justifyContent: 'center',
                        }}>
                            {customizedPlan ? 'Request' : 'Subscribe'}
                        </GlobalButton>
                    </div>
                </Container>
            </ThemeProvider>
    );
}
