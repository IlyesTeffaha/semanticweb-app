import React, { useState, useEffect, useContext } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import { Routes } from "../routes";
// pages
import Presentation from "./Presentation";

// import Upgrade from "./Upgrade";
import DashboardOverview from "./dashboard/DashboardOverview";

import Signin from "./examples/Signin";
import Signup from "./examples/Signup";
import ForgotPassword from "./examples/ForgotPassword";
import ResetPassword from "./examples/ResetPassword";
import Lock from "./examples/Lock";
import NotFoundPage from "./examples/NotFound";
import ServerError from "./examples/ServerError";


// components



import Preloader from "../components/Preloader";




import axios from "axios"
import { AuthContext } from '../ContextApi/AuthContext';


import AccountConfirmed from '../components/AccountConfirmed';





const RouteWithLoader = ({ component: Component, ...rest }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

   

  return (


    <Route {...rest} render={props => ( <> <Preloader show={loaded ? false : true} /> <Component {...props} /> </> ) } />
   
  );
};

const RouteWithSidebar = ({ component: Component, ...rest }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const localStorageIsSettingsVisible = () => {
    return localStorage.getItem('settingsVisible') === 'false' ? false : true
  }

  const [showSettings, setShowSettings] = useState(localStorageIsSettingsVisible);

  const toggleSettings = () => {
    setShowSettings(!showSettings);
    localStorage.setItem('settingsVisible', !showSettings);
  }

 
const{authState,setAuthState}=useContext(AuthContext)
  
    


  return (
  <AuthContext.Provider value={{authState,setAuthState}}>

    <Route {...rest} render={props => (
      <>
        <Preloader show={loaded ? false : true} />


        <main className="content">

          <Component {...props} />
        
        </main>
      </>
    )}
    />
 </AuthContext.Provider>
  );
};





 export default()=> {
  
const [authState,setAuthState]=useState({
  username:"",
  email:"",
  status:false,
  role:"",
  id:0,
  birthday:"",
  gender:"",
  address:"",
  occupation:"",



  
});

const [globalstate,setGlobalstate]=useState({
  blogimage:"blog"
})

// //prevent login and registration from apearing again once page is refreshed because they dissapeared the first time when we pressed logind and the authstate changed to true but since it's set to false by default any rerendering of the app returns it to false and hence login and register appear again also validating the authanticity of the token


useEffect(() => {
axios
  .get("http://localhost:3001/auth/validate", {
    headers: {
      accessToken: localStorage.getItem("accessToken"),
    },
  })
  .then((response) => {
    if (response.data.error) {
      // keep the old fields of the object the same and only change the authState using this deconstractor
      setAuthState({...authState,status:false});
    } else {
      // we already got this response data through the auth/validate function
      setAuthState({
        username:response.data.username,
        status:true,
        role:response.data.role,
        email:response.data.email,
        id:response.data.id,
        birthday:response.data.birthday,
        PostalCode:response.data.PostalCode,
        PhoneNumber:response.data.PhoneNumber,
        gender:response.data.gender,
  
        
       

       
      });
    }
  });
   // eslint-disable-next-line
}, []);





const ProtectedRoute = ({ auth, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (auth) return <Component {...props} />;
        if (!auth)
          return (
            <Redirect to="/examples/sign-in" />
          );
      }}
    />
  );
};




  return(
  <AuthContext.Provider value={{authState,setAuthState}} >

  <Switch>
  
    <ProtectedRoute path={Routes.ForgotPassword.path} component={ForgotPassword} auth={ authState.status}/>
   




    <Route exact path={Routes.AccountConfirmed.path} component={AccountConfirmed} /> 

  
    
    <RouteWithLoader exact path={Routes.Presentation.path} component={Presentation} />
    <RouteWithLoader exact path={Routes.Signin.path} component={Signin} />
    <RouteWithLoader exact path={Routes.Signup.path} component={Signup} />
    <RouteWithLoader exact path={Routes.ForgotPassword.path} component={ForgotPassword} />
    <RouteWithLoader exact path={Routes.ResetPassword.path} component={ResetPassword} />
    <RouteWithLoader exact path={Routes.Lock.path} component={Lock} />
    <RouteWithLoader exact path={Routes.NotFound.path} component={NotFoundPage} />
    <RouteWithLoader exact path={Routes.ServerError.path} component={ServerError} />

    {/* pages */}
=
    <RouteWithLoader exact path={Routes.DashboardOverview.path} component={DashboardOverview} />

    {/* components */}
    {/* <RouteWithSidebar exact path={Routes.Accordions.path} component={Accordion} />
    <RouteWithSidebar exact path={Routes.Alerts.path} component={Alerts} />
    <RouteWithSidebar exact path={Routes.Badges.path} component={Badges} />
    <RouteWithSidebar exact path={Routes.Breadcrumbs.path} component={Breadcrumbs} />
    <RouteWithSidebar exact path={Routes.Buttons.path} component={Buttons} />
    <RouteWithSidebar exact path={Routes.Forms.path} component={Forms} />
    <RouteWithSidebar exact path={Routes.Modals.path} component={Modals} />
    <RouteWithSidebar exact path={Routes.Navs.path} component={Navs} />
    <RouteWithSidebar exact path={Routes.Navbars.path} component={Navbars} />
    <RouteWithSidebar exact path={Routes.Pagination.path} component={Pagination} />
    <RouteWithSidebar exact path={Routes.Popovers.path} component={Popovers} />
    <RouteWithSidebar exact path={Routes.Progress.path} component={Progress} />
    <RouteWithSidebar exact path={Routes.Tables.path} component={Tables} />
    <RouteWithSidebar exact path={Routes.Tabs.path} component={Tabs} />
    <RouteWithSidebar exact path={Routes.Tooltips.path} component={Tooltips} />
    <RouteWithSidebar exact path={Routes.Toasts.path} component={Toasts} /> */}



    <Redirect to={Routes.NotFound.path} />
  </Switch>
  </AuthContext.Provider>
  )


  }