import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch, useHistory } from 'react-router-dom';
import ReactGA from 'react-ga';
import { MainNavbar } from './components/MainNavbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { RequestPage } from './pages/RequestPage';
import { CommPartnersPage } from './pages/CommPartnersPage';
import { FAQPage } from './pages/FAQPage';
import { ProjectWorkPage } from './pages/ProjectWorkPage';
import ProjectSelectPage from './pages/ProjectSelectPage';
import NotFoundPage from './pages/NotFoundPage';
import ScrollToTop from './components/ScrollToTop';

ReactGA.initialize('UA-177347140-1');

const App = () => {
  return (
    <BrowserRouter>
      <MainNavbar />
      <ScrollToTop />
      <Routes />
      <Footer />
    </BrowserRouter>
  );
};

const Routes = () => {
  const history = useHistory();

  useEffect(() => {
    const host = window.location.hostname;

    if (host !== 'localhost') {
      trackPageView(); // Track the first pageview upon load
      history.listen(trackPageView); // Track subsequent pageviews
    }
  }, [history]);

  const trackPageView = () => {
    const pageUrl = window.location.pathname + window.location.search;
    ReactGA.set({ page: pageUrl });
    ReactGA.pageview(pageUrl);
  };

  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route exact path="/projects" component={ProjectsPage} />
      <Route path="/project-request" component={RequestPage} />
      <Route path="/community-partners" component={CommPartnersPage} />
      <Route path="/faq" component={FAQPage} />
      <Route exact path="/projects/:projectId" component={ProjectSelectPage} />
      <Route path="/projects/:projectId/work" component={ProjectWorkPage} />
      <Route component={NotFoundPage} />
    </Switch>
  );
};

export default App;
