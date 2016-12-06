import React from 'react'
import {Row, Col} from 'react-bootstrap'
// window.React = React

const ArticleIntro = require('../components/base/ArticleIntro'),
    ArticleCategory = require('../components/base/ArticleCategory'),
    DatePublished = require('../components/base/DatePublished'),
    Separator = require('../components/base/Separator'),
    Container = require('../containers/Container'),
    ArticleHeader = require('../containers/ArticleHeader'),
    ContributorList = require('../containers/ContributorList'),
    ParticleImage = require('../components/particles/ParticleImage')

const LayoutLookbook = React.createClass({
    render : function() {
        return (
            <div className='layout layout-lookbook'>
                <Container fluid>
                    <Row className='big-row'>
                        <Col md={6}>
                            <ArticleCategory {...this.props.data.ArticleCategory}/>
                            <Row>
                                <Col md={10} mdOffset={2}>
                                    <ArticleHeader {...this.props.data} ArticleCategory={false}/>
                                    <ArticleIntro {...this.props.data.fields[0]} bordered classes='border-color-gold'/>
                                    <ContributorList data={this.props.data.ContributorList} separator=', '/>
                                    <DatePublished {...this.props.data.DatePublished}/>
                                </Col>
                            </Row>
                        </Col>
                        <Col md={6}>
                            <ParticleImage {...this.props.data.fields[1]}/>
                        </Col>
                    </Row>
                    <Row className='big-row'>
                        <Col md={6}>
                            <ParticleImage {...this.props.data.fields[2]}/>
                        </Col>
                        <Col md={6} className='img-small'>
                            <ParticleImage {...this.props.data.fields[3]}/>
                        </Col>
                    </Row>
                    <Row className='big-row'>
                        <Col md={6} className='img-small'>
                            <ParticleImage {...this.props.data.fields[4]} classes='small-left-image'/>
                        </Col>
                        <Col md={6}>
                            <ParticleImage {...this.props.data.fields[5]}/>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
})

module.exports = LayoutLookbook
