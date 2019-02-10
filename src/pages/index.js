import React from 'react';
import { Redirect } from 'react-router';
import ReactGA from 'react-ga';

class HomeRedirect extends React.Component {
  constructor() {
    super()
    ReactGA.initialize('***REMOVED***');
    ReactGA.pageview(window.location.pathname);
  }

  render() {
    return <Redirect to='/ilite' />;
  }
}

export default HomeRedirect;