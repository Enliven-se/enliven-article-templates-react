import React from 'react'
import {Row, Col} from 'react-bootstrap'
// window.React = React

const ArticleIntro = require('../components/base/ArticleIntro'),
    DatePublished = require('../components/base/DatePublished'),
    Separator = require('../components/base/Separator'),
    Container = require('../containers/Container'),
    ArticleHeader = require('../containers/ArticleHeader'),
    ContributorList = require('../containers/ContributorList'),
    ParticlePullquote = require('../components/particles/ParticlePullquote'),
    ParticleText = require('../components/particles/ParticleText')

const LayoutShort = React.createClass({
    render: function() {
        return (
            <div className='layout layout-short'>
                <Container fluid classes='panel-1' backgroundImage={this.props.data.fields[0]}>
                    <Container>
                        <Row>
                            <Col sm={6} className='article-meta'>
                                <ArticleHeader {...this.props.data}/>
                                <ArticleIntro {...this.props.data.fields[1]} bordered />
                            </Col>
                        </Row>
                    </Container>
                </Container>
                <Container classes='article-byline'>
                    <Row>
                        <Col md={8}>
                            <ContributorList data={this.props.data.ContributorList} inline separator=', ' />
                        </Col>
                        <Col md={4}>
                            <DatePublished {...this.props.data.DatePublished}/>
                        </Col>
                    </Row>
                </Container>
                <Container classes='article'>
                    <Row>
                        <Col sm={6} className='col-left'>
                            <ParticleText {...this.props.data.fields[2]}/>
                            <ParticlePullquote {...this.props.data.fields[3]}/>
                            <ParticleText {...this.props.data.fields[4]}/>
                        </Col>
                        <Col sm={6} className='col-right'>
                            <ParticleText {...this.props.data.fields[5]}/>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
})

module.exports = LayoutShort
