import React, {Component} from 'react';


class Curso extends Component{
    render(){
        const { match } = this.props
        return(
            <h1 className="title">{match.params.nome}</h1>
        );
    }
}

export default Curso;