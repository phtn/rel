import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return(
      <div>
        <footer className="page-footer">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text footer-title">Northern Metal Corporation</h5>
                <p className="grey-text text-lighten-4">Our purpose is to create long term value through quality service and develpment, commintment to health, safety and environment to our innovative constumers.</p>
              </div>
              <div className="col l4 offset-l2 s12">
                <h5 className="white-text">Affiliates</h5>
                <ul>
                  <li><a className="grey-text text-lighten-3" href="http://www.filtertechnologyltd.com/">FilterTechnology LTD</a></li>
                  
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
            © 2016 NORMETCO
            <a className="grey-text text-lighten-4 right" href="#!">Terms & Conditions</a>
            </div>
          </div>
        </footer>
      </div>
    )
  }
}