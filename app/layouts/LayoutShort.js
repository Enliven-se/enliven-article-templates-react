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
      <div className='layout layout-short-article'>
        <Container componentClasses='panel-1' backgroundImage={this.props.data.fields[0].content.url}>
          <Row>
            <Col sm={5} smOffset={1}>
              <ArticleHeader ArticleCategory={this.props.data.ArticleCategory} ArticleTitle={this.props.data.ArticleTitle} />
              <ArticleIntro bordered data={this.props.data.fields[1]} />
            </Col>
          </Row>
        </Container>
        <Grid>
          <ContributorList componentClasses='contributor-list' data={this.props.data.ContributorList} separator=', ' />
          <div className='pull-right'>
            <DatePublished componentClasses='date-published' content={this.props.data.DatePublished.content.html} />
          </div>
        </Grid>
        <Grid>
          <Row>
            <Col sm={6}>
              <ParticleText componentClasses='particle-text' content={this.props.data.fields[2].content.html} />
              <ParticlePullquote componentClasses='particle-pullquote' content={this.props.data.fields[3].content.html} />
              <ParticleText componentClasses='particle-text' content={this.props.data.fields[4].content.html} />
            </Col>
            <Col sm={6}>
              <ParticleText componentClasses='particle-text' content={this.props.data.fields[5].content.html} />
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
})

module.exports = LayoutShort
