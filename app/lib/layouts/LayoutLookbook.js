import React from 'react'
import {Row, Col} from 'react-bootstrap'
// window.React = React

import ArticleIntro from '../components/base/ArticleIntro'
import ArticleCategory from '../components/base/ArticleCategory'
import DatePublished from '../components/base/DatePublished'
import Separator from '../components/base/Separator'
import Container from '../containers/Container'
import ArticleHeader from '../containers/ArticleHeader'
import ContributorList from '../containers/ContributorList'
import ParticleImage from '../components/particles/ParticleImage'

class LayoutLookbook extends React.Component {
    render() {
        return (
            <div className='layout layout-lookbook'>
                <Container fluid>
                    <Row className='big-row'>
                        <Col md={6}>
                            <ArticleCategory name={this.props.data.field_main_topics.name} url={this.props.data.field_main_topics.url}/>
                            <Row>
                                <Col md={10} mdOffset={2}>
                                    <ArticleHeader ArticleTitle={this.props.data.field_headline}/>
                                    <ArticleIntro {...this.props.data.field_particles[0]} bordered/>
                                    <ContributorList data={this.props.data.field_contributors} separator=', '/>
                                    <DatePublished value={this.props.data.created} date_format='MMMM D, YYYY'/>
                                </Col>
                            </Row>
                        </Col>
                        <Col md={6}>
                            <ParticleImage url={this.props.data.field_particles[1].url} classes={this.props.data.field_particles[1].classes} credits={this.props.data.field_particles[1].credits}/>
                        </Col>
                    </Row>
                    <Row className='big-row'>
                        <Col md={6}>
                            <ParticleImage url={this.props.data.field_particles[2].url} classes={this.props.data.field_particles[2].classes} credits={this.props.data.field_particles[2].credits}/>
                        </Col>
                        <Col md={6} className='img-small'>
                            <ParticleImage url={this.props.data.field_particles[3].url} classes={this.props.data.field_particles[3].classes} credits={this.props.data.field_particles[3].credits}/>
                        </Col>
                    </Row>
                    <Row className='big-row'>
                        <Col md={6} className='img-small'>
                            <ParticleImage url={this.props.data.field_particles[4].url} classes={this.props.data.field_particles[4].classes} credits={this.props.data.field_particles[4].credits}/>
                        </Col>
                        <Col md={6}>
                            <ParticleImage url={this.props.data.field_particles[5].url} classes={this.props.data.field_particles[5].classes} credits={this.props.data.field_particles[5].credits}/>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default LayoutLookbook
