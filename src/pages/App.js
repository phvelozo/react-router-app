import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <nav class="navbar" aria-label="main navigation">
          <div class="navbar-brand">            
            <NavLink exact to="/"
              className="navbar-item"
              activeClassName="is-active is-tab">Home</NavLink>
            <NavLink to="/Cursos"
              className="navbar-item"
              activeClassName="is-active is-tab">Cursos</NavLink>
            <NavLink to="/Sobre"
              className="navbar-item"
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


