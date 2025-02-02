import React, { useState, useEffect } from "react";
import {
  Route,
  Routes as BrowserRoutes,
  BrowserRouter,
  Redirect,
} from "react-router-dom";
import { Routes } from "../routes";

// pages
import Presentation from "./Presentation";
import Upgrade from "./Upgrade";
import DashboardOverview from "./dashboard/DashboardOverview";
import Transactions from "./Transactions";
import Settings from "./Settings";
import BootstrapTables from "./tables/BootstrapTables";
import Signin from "./examples/Signin";
import Signup from "./examples/Signup";
import ForgotPassword from "./examples/ForgotPassword";
import ResetPassword from "./examples/ResetPassword";
import Lock from "./examples/Lock";
import NotFoundPage from "./examples/NotFound";
import ServerError from "./examples/ServerError";

// documentation pages
import DocsOverview from "./documentation/DocsOverview";
import DocsDownload from "./documentation/DocsDownload";
import DocsQuickStart from "./documentation/DocsQuickStart";
import DocsLicense from "./documentation/DocsLicense";
import DocsFolderStructure from "./documentation/DocsFolderStructure";
import DocsBuild from "./documentation/DocsBuild";
import DocsChangelog from "./documentation/DocsChangelog";

// components
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Preloader from "../components/Preloader";

import Accordion from "./components/Accordion";
import Alerts from "./components/Alerts";
import Badges from "./components/Badges";
import Breadcrumbs from "./components/Breadcrumbs";
import Buttons from "./components/Buttons";
import Forms from "./components/Forms";
import Modals from "./components/Modals";
import Navs from "./components/Navs";
import Navbars from "./components/Navbars";
import Pagination from "./components/Pagination";
import Popovers from "./components/Popovers";
import Progress from "./components/Progress";
import Tables from "./components/Tables";
import Tabs from "./components/Tabs";
import Tooltips from "./components/Tooltips";
import Toasts from "./components/Toasts";

const RouteWithLoader = ({ component: Component, ...rest }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Route
      {...rest}
      render={(props) => (
        <>
          {" "}
          <Preloader show={loaded ? false : true} /> <Component {...props} />{" "}
        </>
      )}
    />
  );
};

const RouteWithSidebar = ({ component: Component, ...rest }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const localStorageIsSettingsVisible = () => {
    return localStorage.getItem("settingsVisible") === "false" ? false : true;
  };

  const [showSettings, setShowSettings] = useState(
    localStorageIsSettingsVisible
  );

  const toggleSettings = () => {
    setShowSettings(!showSettings);
    localStorage.setItem("settingsVisible", !showSettings);
  };

  return (
    <>
      <Preloader show={loaded ? false : true} />
      <Sidebar />

      <main className="content">
        <Navbar />
        <Component />
        <Footer toggleSettings={toggleSettings} showSettings={showSettings} />
      </main>
    </>
  );
};

export default () => (
  <BrowserRoutes>
    <Route path={Routes.Signin.path} Component={Signin}></Route>
    {/* <RouteWithLoader exact path={Routes.Signin.path} component={Signin} /> */}

    <Route path={Routes.Presentation.path} Component={Presentation}></Route>
    {/* <RouteWithLoader
      exact
      path={Routes.Presentation.path}
      component={Presentation}
    /> */}

    <Route exact path={Routes.Signup.path} Component={Signup}></Route>
    <Route
      exact
      path={Routes.ForgotPassword.path}
      Component={ForgotPassword}
    ></Route>
    <Route
      exact
      path={Routes.ResetPassword.path}
      Component={ResetPassword}
    ></Route>
    <Route exact path={Routes.Lock.path} Component={Lock} />
    <Route exact path={Routes.NotFound.path} Component={NotFoundPage}></Route>
    <Route exact path={Routes.ServerError.path} Component={ServerError}></Route>

    {/* pages */}
    <Route
      path={Routes.DashboardOverview.path}
      element={<RouteWithSidebar component={DashboardOverview} />}
    ></Route>

    <Route
      exact
      path={Routes.Upgrade.path}
      element={<RouteWithSidebar component={Upgrade} />}
    ></Route>
    <Route
      exact
      path={Routes.Transactions.path}
      element={<RouteWithSidebar component={Transactions} />}
    ></Route>
    <Route
      exact
      path={Routes.Settings.path}
      element={<RouteWithSidebar component={Settings} />}
    ></Route>
    <Route
      exact
      path={Routes.BootstrapTables.path}
      element={<RouteWithSidebar component={BootstrapTables} />}
    ></Route>

    {/* components */}
    <Route
      exact
      path={Routes.Accordions.path}
      element={<RouteWithSidebar component={Accordion} />}
    ></Route>
    <Route
      exact
      path={Routes.Alerts.path}
      element={<RouteWithSidebar component={Alerts} />}
    ></Route>
    <Route
      exact
      path={Routes.Badges.path}
      element={<RouteWithSidebar component={Badges} />}
    ></Route>
    <Route
      exact
      path={Routes.Breadcrumbs.path}
      element={<RouteWithSidebar component={Breadcrumbs} />}
    ></Route>
    <Route
      exact
      path={Routes.Buttons.path}
      element={<RouteWithSidebar component={Buttons} />}
    ></Route>
    <Route
      exact
      path={Routes.Forms.path}
      element={<RouteWithSidebar component={Forms} />}
    ></Route>
    <Route
      exact
      path={Routes.Modals.path}
      element={<RouteWithSidebar component={Modals} />}
    ></Route>
    <Route
      exact
      path={Routes.Navs.path}
      element={<RouteWithSidebar component={Navs} />}
    ></Route>
    <Route
      exact
      path={Routes.Navbars.path}
      element={<RouteWithSidebar component={Navbars} />}
    ></Route>
    <Route
      exact
      path={Routes.Pagination.path}
      element={<RouteWithSidebar component={Pagination} />}
    ></Route>
    <Route
      exact
      path={Routes.Popovers.path}
      element={<RouteWithSidebar component={Popovers} />}
    ></Route>
    <Route
      exact
      path={Routes.Progress.path}
      element={<RouteWithSidebar component={Progress} />}
    ></Route>
    <Route
      exact
      path={Routes.Tables.path}
      element={<RouteWithSidebar component={Tables} />}
    ></Route>
    <Route
      exact
      path={Routes.Tabs.path}
      element={<RouteWithSidebar component={Tabs} />}
    ></Route>
    <Route
      exact
      path={Routes.Tooltips.path}
      element={<RouteWithSidebar component={Tooltips} />}
    ></Route>
    <Route
      exact
      path={Routes.Toasts.path}
      element={<RouteWithSidebar component={Toasts} />}
    ></Route>

    {/* documentation */}
    <Route
      exact
      path={Routes.DocsOverview.path}
      Component={DocsOverview}
    ></Route>
    <Route
      exact
      path={Routes.DocsDownload.path}
      Component={DocsDownload}
    ></Route>
    <Route
      exact
      path={Routes.DocsQuickStart.path}
      Component={DocsQuickStart}
    ></Route>
    <Route exact path={Routes.DocsLicense.path} Component={DocsLicense}></Route>
    <Route
      exact
      path={Routes.DocsFolderStructure.path}
      Component={DocsFolderStructure}
    ></Route>
    <Route exact path={Routes.DocsBuild.path} Component={DocsBuild}></Route>
    <Route
      exact
      path={Routes.DocsChangelog.path}
      Component={DocsChangelog}
    ></Route>
  </BrowserRoutes>
); /*  */
