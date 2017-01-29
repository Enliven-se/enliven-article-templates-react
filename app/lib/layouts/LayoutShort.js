// import Telescope from 'meteor/nova:lib';
import React, { PropTypes, Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap'
// window.React = React

import ArticleIntro from '../components/base/ArticleIntro'
import DatePublished from '../components/base/DatePublished'
import Separator from '../components/base/Separator'
import Container from '../containers/Container'
import ArticleHeader from '../containers/ArticleHeader'
import ContributorList from '../containers/ContributorList'
import ParticlePullquote from '../components/particles/ParticlePullquote'
import ParticleText from '../components/particles/ParticleText'

class LayoutShort extends React.Component {
    render() {
        return (
            <div className='layout layout-short'>

                <Container fluid classes='panel-1' backgroundImage={this.props.data.field_particles[0]}>
                    <Container>
                        <Row>
                            <Col sm={6} className='article-meta'>
                                <ArticleHeader
                                    ArticleCategory={this.props.data.field_main_topics}
                                    ArticleTitle={this.props.data.field_headline}
                                />
                                <ArticleIntro {...this.props.data.field_particles[1]} bordered/>
                            </Col>
                        </Row>
                    </Container>
                </Container>
                <Container classes='article-byline'>
                    <Row>
                        <Col md={8}>
                            <ContributorList data={this.props.data.field_contributors} inline separator=', '/>
                        </Col>
                        <Col md={4}>
                            <DatePublished {...this.props.data.created} date_format='MMMM D, YYYY'/>
                        </Col>
                    </Row>
                </Container>
                <Container classes='article'>
                    <Row>
                        <Col sm={6} className='col-left'>
                            <ParticleText {...this.props.data.field_particles[2]}/>
                            <ParticlePullquote {...this.props.data.field_particles[3]}/>
                            <ParticleText {...this.props.data.field_particles[4]}/>
                        </Col>
                        <Col sm={6} className='col-right'>
                            <ParticleText {...this.props.data.field_particles[5]}/>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

module.exports = LayoutShort
export default LayoutShort
