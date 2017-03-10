import React from 'react'
// import ReactDOM from 'react-dom';

// containers
import GridContainer from '../lib/structure/GridContainer';

class Config extends React.Component {
    render() {
        return (
            <GridContainer layout={this.props.layout} navbar_items={this.props.navbar_items} chrome={this.props.chrome} />
        )
    }
}

export default Config
