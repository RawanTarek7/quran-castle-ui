import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Auth from "./pages/Auth/Auth";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import Plans from "./pages/Plans/Plans";
import Layout from "./pages/Layout/Layout";
import RegisterTrial from "./pages/Auth/Components/RegisterTrialClass";
import Videos from "./pages/Videos/Videos";
import TermsAndConditions from "./pages/TermsAndConditions/TermsAndConditions";
import UserProfile from "./pages/Profile/UserProfile/UserProfile";
import TeacherProfileCard from "./pages/Profile/TeacherProfile/TeacherProfile";
import './index.css'
import TeacherSection from "./components/TeachersSection/TeacherSection";

const App = () => {

    return (
        <Router>
            <Layout>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/home" exact component={Home}/>
                    <Route path="/about-us" exact component={About}/>
                    <Route path="/about-teachers" exact component={TeacherSection}/>
                    <Route path="/auth" exact component={Auth}/>
                    <Route path="/trialRegister" exact component={RegisterTrial}/>
                    <Route path="/videos" exact component={Videos}/>
                    <Route path="/plans" exact component={Plans}/>
                    <Route path="/teacher-profile" exact component={TeacherProfileCard}/>
                    <Route path="/user-profile" exact component={UserProfile}/>
                    <Route path="/forget-password" exact component={Auth}/>
                    <Route path="/terms-conditions" exact component={TermsAndConditions}/>
                    <Route component={NotFoundPage}/>
                </Switch>
            </Layout>

        </Router>
    );
};

export default App;
