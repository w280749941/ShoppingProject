import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="/">LOGO</a>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li><a href="/newarrivals">WHAT'S NEW<span className="sr-only">(current)</span></a></li>
              <li><a href="/hotproducts">WHAT'S HOT</a></li>
              <li><a href="/onsale">ON SALE</a></li>
            </ul>

            <form className="navbar-form navbar-right">
              <a href="/cart" className="btn btn-default navbar-btn cartMargin">Cart</a>
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Search"/>
              </div>
              <button type="submit" className="btn btn-default">Search</button>
            </form>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
