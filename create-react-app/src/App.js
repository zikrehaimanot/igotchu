import React from 'react';
import './css/App.css';
import LoginPage from "./LoginPage";
import LandingPage from "./LandingPage"
// import Layout from "./layout"
// import SellerInfo from "./sellerInfo"
// import IndividualItemImage from "./components/IndividualItemImage"
import IndividualItemPage from "./IndividualItemPage"
// import IndividualItemTitle from "./components/IndividualItemTitle"
// import ItemDescription from "./components/ItemDescription"
// import ContactSeller from "./components/ContactSeller"
// import SectionMain from './SectionMain';
// import Footer from './components/Footer';
// import Filter from './components/Filter';
// import UserDetails from './UserDetails'
// import ProfilePage from './ProfilePage'
// import ItemView from './components/ItemView'
// import {ThemeProvider} from 'styled-components'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link,
  // HashRouter
} from "react-router-dom";

function App() {
  return (
<Router>
<div className="App">   
      <Switch>
        <Route exact path="/">
          <LandingPage/>
        </Route>
        <Route exact path="/Login">
          <LoginPage/>
        </Route>
        <Route exact path="/Newsfeed">
        </Route>
        <Route exact path="/ItemPage">
          <IndividualItemPage/>
        </Route>
        <Route exact path="/ProfilePage">
          {/* <ProfilePage/>
          <MailToPage/>
          <FeedSectionMain/>
          <ItemPageSellerInfo />
          <ItemPageItemDescription />
          <ItemView/>
          <ItemPageContactSeller />
          <NewsFeedFilter/>
          <IndividualItemTitle /> */}
        </Route>
        <Route exact path="/SellerPage">
        </Route>
        <Route exact path="/ItemPage">
        </Route>
      </Switch>
    
      <div>
        <div className="individualItemContainer">
          <div className="leftSideIndividualItemContainer">
            {/*<SingleItem id="5"/>*/}
            {/* <UserDetails/> */}
          </div>
          <div className="rightSideIndividualItemContainer">
          </div>
            {/* <Footer/> */}
          </div>
        </div>
      </div>
</Router>
  );
}

export default App;
