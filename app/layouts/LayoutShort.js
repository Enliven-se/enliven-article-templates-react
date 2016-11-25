import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
// window.React = React

const Container = require('../containers/Container'),
  ArticleHeader = require('../containers/ArticleHeader'),
  ArticleIntro = require('../containers/ArticleIntro'),
  ContributorList = require('../containers/ContributorList'),
  DatePublished = require('../components/base/DatePublished'),
  Separator = require('../components/base/Separator'),
  ParticlePullquote = require('../components/particles/ParticlePullquote'),
  ParticleText = require('../components/particles/ParticleText')

const LayoutShort = React.createClass({
  render: function() {
    return (
      <div className='layout layout-short'>
          <Container fluid componentClasses='panel-1' backgroundImage={this.props.data.fields[0].content.url}>
              <Row>
                  <Col sm={5} smOffset={1} className='article-meta'>
                      <ArticleHeader ArticleCategory={this.props.data.ArticleCategory} ArticleTitle={this.props.data.ArticleTitle} />
                      <ArticleIntro bordered data={this.props.data.fields[1]} />
                  </Col>
              </Row>
          </Container>
          <Container componentClasses='article-byline'>
              <Row>
                  <Col md={8}>
                      <ContributorList data={this.props.data.ContributorList} componentClasses='contributor-list' separator=', ' />
                  </Col>
                  <Col md={4}>
                      <DatePublished componentClasses='date-published' content={this.props.data.DatePublished.content.html} />
                  </Col>
              </Row>
          </Container>
          <Container componentClasses='article'>
              <Row>
                  <Col sm={6}>
                      <ParticleText componentClasses={this.props.data.fields[2].classes} content={this.props.data.fields[2].content.html} />
                      <ParticlePullquote componentClasses={this.props.data.fields[3].classes} content={this.props.data.fields[3].content.html} />
                      <ParticleText componentClasses={this.props.data.fields[4].classes} content={this.props.data.fields[4].content.html} />
                  </Col>
                  <Col sm={6}>
                      <ParticleText componentClasses={this.props.data.fields[5].classes} content={this.props.data.fields[5].content.html} />
                  </Col>
              </Row>
          </Container>
      </div>
    )
  }
})

module.exports = LayoutShort
