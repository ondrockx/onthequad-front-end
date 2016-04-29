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
  if (top > 40) { /*150*/
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
    return <div className="div_class landing-page">
      <div className="div_class menu-container col-lg-12 col-md-12">
        <div className="div_class menu">
          <img src="images/otq.png"/>
          <a href={browseURL} onClick={(e) => this.login(e)} className="btn btn-inverse btn_class loginbtn getfat">Login</a>
          <a href={browseURL} onClick={(e) => this.login(e)} className="btn btn-inverse btn_class loginbtn">Sign Up</a>
        </div>
      </div>
      <div className="div_class jumbotron center-block" id="intro">
        <div className="div_class container center-block">
          <p id="head" className="jumbotxt">On the Quad is a free tool dedicated to empowering UConn students with the ability to buy or sell items amongst other students effectively and efficiently. We here at On the Quad believe our service outperforms popular buy/sell avenues of the past by making our service exclusive to UConn students and offering solutions to common problems.</p>
        </div>
      </div>
      <div className="div_class container-fluid" id="caro">
        <div className="div_class row">
          <div className="div_class col-md-12">  
            <div id="carousel2" className="carousel slide" data-ride="carousel">
              <ol className="carousel-indicators">
                <li data-target="#carousel2" data-slide-to="0" className="active li_class"></li>
                <li data-target="#carousel2" data-slide-to="1" className="li_class"></li>
                <li data-target="#carousel2" data-slide-to="2" className="li_class"></li>
              </ol>
              <div className="div_class carousel-inner" role="listbox">
                <div className="div_class item active"><img src="images/fbposttest.png" alt="First slide image" className="center-block"/></div>
                <div className="div_class item"><img src="images/2.png" alt="Second slide image" className="center-block"/></div>
                <div className="div_class item"><img src="images/3.png" alt="Third slide image" className="center-block"/></div>
              </div>
              <div className="container carousel-overlay">
                  <div className="div_class row">
                    <div className="div_class col-md-12 col-lg-12">
                    <h1 className="h1_class" id="buyor"> "But I already use UConn Buy or Sell..."</h1>
                    </div>
                  </div>
                  <div className="div_class row buyorselldesrow">
                    <div className="div_class col-md-12 col-lg-12">
                      <div><h3 className="h3_class buyorselltxt1"> You can do better! The many UConn Buy or Sell Facebook pages may have a large user base of UConn students, but that is where the usefulness stops.</h3>
                        <ul className="ul_class buyorselltxt2">
                          <li className="li_class"> UConn B/S is a lengthy stream of disorganized posts so that it is nearly impossible to find what you need.</li>
                          <li className="li_class"> UConn Ticket posts render ones ability to sell general items impossible when season sports tickets are sold or a show is coming to campus.</li>
                        </ul>
                      </div>
                    </div>  
                  </div>                  
              </div>             
            </div>
          </div>
        </div>

      </div>
      <div className="div_class row" id="craigslist">
        <div className="div_class col-md-6">
          <h1 className="h1_class" id="craigslist">"OK, I'll just use Craigslist"</h1> 
        </div>
        <div className="div_class col-md-6">
          <section id="craig2"> <h3 className="h3_class craigtxt1">Craigslist doesn't compare!</h3>
            <p id="print_class" className="craigtxt2">Craigslist does provide a way to organize posts by category, but it is not designed with college students in mind. </p>
            <ul className="ul_class craigtxt2">
                <li className="li_class"> Craigslist operates with a clunky, unappealing, unintuitive user interface.</li>
                <li className="li_class"> Students are more comfortable buying and selling with other students rather than the entirety of the general public.</li>
                <li className="li_class"> Most students lack the ability or time to drive far from UConn campus, so most posts on Craigslist are not relevant.</li>
            </ul>
          </section>
        </div>  
      </div>
      <div className="div_class jumbotron" id="apart">
        <h1 className="h1_class">What Sets Us Apart</h1>
        <div className="div_class row addmargins">
          <div className="div_class col-lg-2"/>
          <div className="div_class col-lg-2">
            <h4 className="h4_class"> Exclusivity</h4>
            <p id="print_class"> Must have a UConn Gmail account to join</p>
          </div>
          <div className="div_class col-lg-2">
            <h4 className="h4_class"> Easy to find what you want</h4>
            <p id="print_class"> All posts are organized, filterable, and searchable</p>
          </div>
 
          <div className="div_class col-lg-2">
            <h4 className="h4_class"> Easy to use Interface</h4>
            <p id="print_class"> Users are able to manage their posts more easily and spend less time scrolling while searching</p>
          </div>
          <div className="div_class col-lg-2">
            <h4 className="h4_class"> Created for UConn students, by UConn students</h4>
            <p id="print_class"> Our team is dedicated to continuously updating and improving onthequad based on student feedback</p>
          </div>
          <div className="div_class col-lg-2"/>
        </div>
      </div>

      <div className="div_class row" id="future">
        <div className="div_class col-lg-5">
          <h3 className="h3_class text-center" id="h1_class future">[ Future Feature: Price Comparison ]</h3>
          <img src="images/Price-Compare.png" id="future"/>
        </div>
        <div className="div_class col-lg-7"/>
        <p id="future" className="futuretxt1"> When starting On the Quad, one of the main goals was to improve the way UConn students buy and sell textbooks. <br/>
          In the coming future, we plan on implementing a way to populate textbook post fields with only the ISBN number. We also plan on making the listed price of textbooks from Amazon and the UConn COOP readily available to both buyers and sellers.
        </p>
      </div>
      <div className="div_class row spacing">
        <div className="div_class col-lg-5">
          <h3 className="h3_class text-center" id="h1_class future">[ Future Feature: Live Market Analytics ]</h3>
          <img src="images/test.gif" id="future"/>
        </div>
        <div className="div_class col-lg-7">
          <p id="future" className="futuretxt2"> The way UConn students buy and sell UConn tickets is something that drastically needs to change. In the future, students will be able to be sure they are not overpaying for tickets (as well as textbooks) with our up to date snapshot of the ticket marketplace. On the Quad will provide information of average, lowest, and highest ticket price posts over the past 7 days as well as the original cost of the ticket.</p>
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