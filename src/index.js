import React from 'react';
import ReactDOM from 'react-dom';

import App from './pages/App';
import Home from './components/Home';
import Cursos from './components/Cursos';
import Sobre from './components/Sobre';


import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter as Router, Route } from 'react-router-dom';

ReactDOM.render((
    <Router>
        <div>            
            <Route path="/" component={App} />
            <Route exact path="/" component={Home} />
            <Route path="/cursos" component={Cursos} />
            <Route path="/sobre" component={Sobre} />
        </div>
    </Router>
),
    document.getElementById('root')
);

registerServiceWorker();
