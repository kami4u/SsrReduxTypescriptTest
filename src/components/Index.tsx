import React from "react";
import { Provider as ReduxRrovider } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./common/Header";
import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";
import PageNotFound from "./PageNotFound";
import CoursePage from "./courses/CoursesPage";
import ManageCoursePage from "./courses/ManageCoursePage";
import configureStore from "../redux/configureStore";

const Index = () => {
  return (
    <ReduxRrovider store={configureStore({})}>
      <div className="container-fluid">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/courses" component={CoursePage} />
          <Route path="/course/:slug" component={ManageCoursePage} />
          <Route path="/course" component={ManageCoursePage} />
          <Route component={PageNotFound} />
        </Switch>
        <ToastContainer autoClose={3000} hideProgressBar></ToastContainer>
      </div>
    </ReduxRrovider>
  );
};

export default Index;
