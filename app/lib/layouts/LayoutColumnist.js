import React from 'react'
import {Row, Col} from 'react-bootstrap'
// window.React = React

import Container from '../containers/Container'
import ArticleHeader from '../containers/ArticleHeader'
import ContributorList from '../containers/ContributorList'

import DatePublished from '../components/base/DatePublished'
import HR from '../components/base/HR'
import Link from '../components/base/Link'
import ParticleImage from '../components/particles/ParticleImage'
import ParticleText from '../components/particles/ParticleText'
import ParticlePullquote from '../components/particles/ParticlePullquote'

class LayoutColumnist extends React.Component {
    render() {
        return (
            <div className='layout layout-columnist'>
                <Container fluid classes='panel-1'>
                    <Row className='article-header-row'>
                        <Col md={6} className='left-panel'>
                            <ArticleHeader ArticleCategory={this.props.data.ArticleCategory} ArticleTitle={this.props.data.ArticleTitle}/>
                            <DatePublished {...this.props.data.DatePublished}/>
                        </Col>
                        <Col md={6} className='right-panel'>
                            <Col md={5}>
                                <ParticleImage {...this.props.data.fields[0]}/>
                            </Col>
                            <Col md={7} className='about-columnist'>
                                <div className='follow-button'>
                                    <Link text={this.props.data.fields[6].value} url={this.props.data.fields[6].url} classes={this.props.data.fields[6].classes}/>
                                </div>
                                <Link text={this.props.data.fields[5].value} url={this.props.data.fields[5].url} classes={this.props.data.fields[5].classes}/>
                                <ParticleText {...this.props.data.fields[1]}/>
                                <Link text={this.props.data.fields[7].value} url={this.props.data.fields[7].url} classes={this.props.data.fields[7].classes}/>
                            </Col>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12} className='hr-container'>
                            <HR className=''/>
                        </Col>
                    </Row>
                    <Row className='body-text'>
                        <Col sm={12}>
                            <div className='first-text'>
                                <ParticleText {...this.props.data.fields[2]}/>
                            </div>
                            <ParticlePullquote {...this.props.data.fields[3]}/>
                            <ParticleText {...this.props.data.fields[4]}/>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default LayoutColumnist
