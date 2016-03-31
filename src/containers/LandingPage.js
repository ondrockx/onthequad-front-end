import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { navigate, login } from '../actions';
import _ from 'lodash';
import $ from 'jquery';
import { Jumbotron, Button } from 'react-bootstrap';
import { browseURL } from '../config';

const stickyMenu = () => {
  const el = document.getElementsByClassName('menu-container', 'login')[0];
  var top = window.pageYOffset || document.documentElement.scrollTop;
  if (top > 150) {
    if (el.className.indexOf('top') < 0) {
      el.className += ' top';
    }
  } else {
    el.className = el.className.replace(' top', '');
  }
};

class LandingPage extends Component {
  componentWillMount() {
    window.addEventListener("scroll", stickyMenu);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", stickyMenu);
  }

  login(e, id) {
    e.preventDefault();
    this.props.login(this.context.router, {app: 'BROWSE'});
  }

  render() {
    return <div className="landing-page">
      <div className="menu-container col-lg-12 col-md-12">
        <div className="menu">
          <img src="images/otq.png"/>
          <a href={browseURL} onClick={(e) => this.login(e)} className="btn btn-inverse">Login</a>
          <a href={browseURL} onClick={(e) => this.login(e)} className="btn btn-inverse">Sign Up</a>
        </div>
      </div>
      <div className="jumbotron center-block" id="intro">
        <div className="container center-block">
          <p id="head">On the Quad is a free tool dedicated to enpowering UConn students with the ability to buy or sell items amongst other students effectively and efficiently. We here at On the Quad believe our service put preforms popular buy/sell avenues of the past by making our service exclusive to UConn students and offering solutions to common problems.</p>
        </div>
      </div>
      <div className="container-fluid" id="caro">
        <div className="row">
          <div className="col-md-6">  
            <div id="carousel2" className="carousel slide" data-ride="carousel">
              <ol className="carousel-indicators">
                <li data-target="#carousel2" data-slide-to="0" className="active"></li>
                <li data-target="#carousel2" data-slide-to="1"></li>
                <li data-target="#carousel2" data-slide-to="2"></li>
              </ol>
              <div className="carousel-inner" role="listbox">
                <div className="item active"><img src="images/fbposttest.png" alt="First slide image" className="center-block"/></div>
                <div className="item"><img src="images/2.png" alt="Second slide image" className="center-block"/></div>
                <div className="item"><img src="images/3.png" alt="Third slide image" className="center-block"/></div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-6">
            <h1 id="buyor"> "But I already use UConn Buy or Sell..."</h1>
            <div id="buyortext"><h3> You can do better! The many UConn buy or sell Facebook pages may have a large user base of UConn students, but that is where the usefulness stops.</h3>
              <ul>
                <li> UConn B/S is a lengthy stream of disorganized posts so that it is nearly impossible to find what you need.</li>
                <li> UConn Ticket posts render ones ability to sell general items impossible when season ticket are sold or a show is coming to campus.</li>
              </ul>
            </div>
          </div>  
        </div>
      </div>
      <div className="row" id="craigslist">
        <div className="col-md-6">
          <h1 id="craigslist">"OK, I'll just use Craigslist"</h1> 
        </div>
        <div className="col-md-6">
          <section id="craig2"> <h3>Craigslist doesn't compare!</h3>
            <p>Craigslist does provide a way to organize posts by category, but it is not designed with college students in mind. </p>
            <ul>
                <li> Craigslist operates with a clunky, unappealing, unintuitive user interface.</li>
                <li> Students are more comfortable buying and selling with other students rather than the entirety of the general public.</li>
                <li> Most students lack the ability or time to drive far from UConn campus, so most posts on Craigslist are not relevant.</li>
            </ul>
          </section>
        </div>  
      </div>
      <div className="jumbotron" id="apart">
        <h1>What Sets Us Apart</h1>
        <div className="row">
          <div className="col-lg-1"/>
          <div className="col-lg-2">
            <h4> Exclusivity</h4>
            <p> Must have a UConn Gmail account to join</p>
          </div>
          <div className="col-lg-2">
            <h4> Easy to find what you want</h4>
            <p> All posts are organized, filterable, and searchable</p>
          </div>
          <div className="col-lg-2">
            <h4> Looking for something that isn't posted?</h4>
            <p>Create "looking for" posts to advertise your needs</p>
          </div>
          <div className="col-lg-2">
            <h4> Easy to use Interface</h4>
            <p> Users are able to manage their posts more easily and spend less time scrolling while searching</p>
          </div>
          <div className="col-lg-2">
            <h4> Created for UConn students, by UConn students</h4>
            <p> Our team is dedicated to continuously updating and improving onthequad based on student feedback</p>
          </div>
          <div className="col-lg-1"/>
        </div>
      </div>
      <div className="row" id="future">
        <div className="col-lg-5">
          <h3 id="future"> Future Feature: Price Comparison </h3>
          <img src="images/Price-Compare.png" id="future"/>
        </div>
        <div className="col-lg-7"/>
        <p id="future"> When starting onthequad, one of the main goals was to improve the way UConn students buy textbooks. <br/>
          In the coming future, we plan on implementing a way to populate textbook post fields with only the ISBN number. We also plan on making the listed price of textbooks from Amazon and the UConn coop readily available to both buyers and sellers.
        </p>
      </div>
      <div className="row">
        <div className="col-lg-5">
          <h3 id="future"> Future Feature: Live Market Analytics </h3>
          <img src="images/test.gif" id="future"/>
        </div>
        <div className="col-lg-7">
          <p id="future"> The way UConn students buy and sell UConn tickets is something that drastically needs to change. In the future, students will be able to be sure they are not overpaying for tickets (as well as textbooks) with our up to date snapshot of the ticket marketplace. Onthequad will provide information of average, lowest, and highest ticket price posts over the past 7 days as well as the original cost of the ticket.</p>
        </div>
      </div>
    </div>;
  }
}
LandingPage.contextTypes = {
  router: PropTypes.object.isRequired,
};
LandingPage.propTypes = {
  login: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  login: (router, props) => dispatch(login()).then(()=>dispatch(navigate(router, props)))
});

export default connect(()=>({}), mapDispatchToProps)(LandingPage);