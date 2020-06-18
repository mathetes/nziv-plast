import React, { Component } from "react";
import Menu from "../Menu/Menu";

class Layout extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-3">
              <h3>Каталог</h3>
              <Menu />
            </div>
            <div className="col-9">
              <main className="container-xl">{this.props.children}</main>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Layout;
