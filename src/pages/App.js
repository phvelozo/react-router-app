import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <nav className="nav has-shadow">
          <div className="nav-left">
            <NavLink to="/"
              className="nav-item is-tab"
              activeClassName="is-active is-tab">Home</NavLink>
            <NavLink to="/Cursos"
              className="nav-item"
              activeClassName="is-active is-tab">Cursos</NavLink>
            <NavLink to="/Sobre"
              className="nav-item"
              activeClassName="is-active is-tab">Sobre</NavLink>
          </div>
        </nav>

        <section className="section">
          <div className="container">
            {this.props.children}
          </div>
        </section>
      </div>
    );
  }
}

export default App;
