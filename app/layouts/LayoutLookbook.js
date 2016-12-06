import React from 'react'
import { Row, Col } from 'react-bootstrap'
// window.React = React

const Container = require('../containers/Container'),
  ArticleHeader = require('../containers/ArticleHeader'),
  ArticleIntro = require('../containers/ArticleIntro'),
  ContributorList = require('../containers/ContributorList'),
  ArticleCategory = require('../components/base/ArticleCategory'),
  DatePublished = require('../components/base/DatePublished'),
  Separator = require('../components/base/Separator'),
  ParticleImage = require('../components/particles/ParticleImage')

const LayoutLookbook = React.createClass({
  render: function() {
    return (
      <div className='layout layout-lookbook'>
          <Container fluid>
              <Row className='big-row'>
                  <Col md={6}>
                      <ArticleCategory {...this.props.data.ArticleCategory} />
                      <Row>
                          <Col md={10} mdOffset={2}>
                              <ArticleHeader {...this.props.data} ArticleCategory={null} />
                              <ArticleIntro bordered classes='border-color-gold' {...this.props.data.fields[0]} />
                              <ContributorList classes='contributor-list' data={this.props.data.ContributorList} separator=', ' />
                              <DatePublished classes='date-published' content={this.props.data.DatePublished.content.html} />
                          </Col>
                      </Row>
                  </Col>
                  <Col md={6}>
                      <ParticleImage url={this.props.data.fields[1].content.url} classes_credits={this.props.data.fields[1].credits.classes} credits={this.props.data.fields[1].credits.html} />
                  </Col>
              </Row>
              <Row className='big-row'>
                  <Col md={6}>
                      <ParticleImage url={this.props.data.fields[2].content.url}/>
                  </Col>
                  <Col md={6} className='img-small'>
                      <ParticleImage url={this.props.data.fields[3].content.url} classes_credits={this.props.data.fields[3].credits.classes} credits={this.props.data.fields[3].credits.html} />
                  </Col>
              </Row>
              <Row className='big-row'>
                  <Col md={6} className='img-small'>
                      <ParticleImage classes='small-left-image' url={this.props.data.fields[4].content.url} classes_credits={this.props.data.fields[4].credits.classes} credits={this.props.data.fields[4].credits.html} />
                  </Col>
                  <Col md={6}>
                      <ParticleImage url={this.props.data.fields[5].content.url}/>
                  </Col>
              </Row>
          </Container>
      </div>
    )
  }
})

module.exports = LayoutLookbook
