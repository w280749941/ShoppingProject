import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {text: ''};
  }
  handleChange(e) {
    this.setState({text: e.target.value});
  }
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
            <a className="navbar-brand" href="/">Logo</a>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li><a href="/newarrivals">WHAT'S NEW<span className="sr-only">(current)</span></a></li>
              <li><a href="/hotproducts">WHAT'S HOT</a></li>
              <li><a href="/onsale">ON SALE</a></li>
              <li><a href="/admin">Admin</a></li>
            </ul>

            <form className="navbar-form navbar-right">
              <a href="/cart" className="btn btn-default navbar-btn cartMargin">Cart</a>
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Search product" onChange={this.handleChange}/>
              </div>
              <a href={"/find/"+this.state.text} className="btn btn-default">Search</a>
            </form>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
