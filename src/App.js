import React from 'react';
import { Route } from 'react-router-dom';
import PostListPage from './pages/PostListPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import RegisterSelectPage from './pages/RegisterSelectPage'
import WritePage from './pages/WritePage';
import PostPage from './pages/PostPage';
import HostRegisterPage from './pages/host/HostRegisterPage';
import { Helmet } from 'react-helmet-async';
import TpTestPage from './pages/TpTestPage';
import CompoTestPage from './pages/CompoTestPage';
import UiTestPage from './pages/UiTestPage';
import LandingListPage from './pages/LandingListPage';

const App = () => {
  return (
    <>
      <Helmet>
        <title>ASUM</title>
      </Helmet>
      <Route component={LandingListPage} path={['/@:username', '/']} exact />
      <Route component={LoginPage} path="/auth/login" />
      <Route component={PostListPage} path="/postlist" />
      <Route component={RegisterPage} path="/register" />
      <Route component={RegisterSelectPage} path="/registerSelect" />
      <Route component={WritePage} path="/write" />
      <Route component={PostPage} path="/@:username/:postId" />
      <Route component={TpTestPage} path="/tptest" />
      <Route component={CompoTestPage} path="/compotest" />
      <Route component={UiTestPage} path="/uitest" />
      <Route component={HostRegisterPage} path="/hostregister" />
    </>
  );
};

export default App;
