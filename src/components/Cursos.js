import React, { Component } from 'react'
import Curso from './Curso';
import { Route, Link } from 'react-router-dom';

export default class Cursos extends Component {
    render() {
        const { match } = this.props
        return (
            <div>
                <Route
                    exact
                    path={match.url}
                    render={() => <h1 className="title">Conheça nossos cursos!</h1>} />
                <Route
                    exact
                    path={match.url}
                    render={() =>
                        <ul>
                            <li>
                                <Link to={`${match.url}/React`}>React</Link>
                            </li>
                            <li>
                                <Link to={`${match.url}/Angular`}>Angular</Link>
                            </li>
                            <li>
                                <Link to={`${match.url}/Vue`}>Vue</Link>
                            </li>
                        </ul>
                    } />
                <Route path={`${match.url}/:nome`} component={Curso} />
            </div>
        );
    }
}

