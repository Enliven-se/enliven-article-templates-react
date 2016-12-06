import React from 'react'
import {Row, Col} from 'react-bootstrap'
// window.React = React

const Container = require('../containers/Container'),
    ArticleHeader = require('../containers/ArticleHeader'),
    ParticleImage = require('../components/particles/ParticleImage'),
    ParticleText = require('../components/particles/ParticleText')

const PictureIntensive = React.createClass({
    render: function() {
        return (
            <div className='layout layout-picture-intensive'>
                <Container fluid classes='panel-1' backgroundImage={this.props.data.fields[0]}>
                    <Row>
                        <Col md={10}></Col>
                        <Col md={3}>
                            <ArticleHeader {...this.props.data} ArticleCategory={false}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6} mdOffset={1}>
                            <ParticleText {...this.props.data.fields[1]} />
                        </Col>
                        <Col md={2}>
                            <ParticleText {...this.props.data.fields[2]} />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12}>
                            <ParticleImage {...this.props.data.fields[3]}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6} mdOffset={1}>
                            <ParticleText {...this.props.data.fields[4]} />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <ParticleImage {...this.props.data.fields[5]}/>
                        </Col>
                        <Col md={6}>
                            <ParticleImage {...this.props.data.fields[6]}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6} mdOffset={1}>
                            <ParticleText {...this.props.data.fields[7]} />
                        </Col>
                        <Col md={2}>
                            <ParticleText {...this.props.data.fields[8]} />
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
})

module.exports = PictureIntensive
