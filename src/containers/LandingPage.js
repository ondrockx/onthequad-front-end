import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import _ from 'underscore';
import { Jumbotron, Button } from 'react-bootstrap';

class LandingPage extends Component {
  render() {
    return <div className="landing-page">
      <Jumbotron>
        <h1>Welcome to OnTheQuad!</h1>
        <p className="tagline">Online Classifieds for Students!</p>
        <p>
          <Button onClick={() => this.context.router.push('/browse')} bsStyle="primary">Login</Button> with your UConn Account
        </p>
      </Jumbotron>
    </div>;
  }
}

LandingPage.contextTypes = {
  router: PropTypes.object.isRequired
};

LandingPage = connect()(LandingPage);

export default LandingPage;