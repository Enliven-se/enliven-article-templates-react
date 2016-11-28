import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
// window.React = React

const ArticleHeader = require('../containers/ArticleHeader'),
  ArticleIntro = require('../containers/ArticleIntro'),
  ContributorList = require('../containers/ContributorList'),
  DatePublished = require('../components/base/DatePublished'),
  Separator = require('../components/base/Separator'),
  ParticleImage = require('../components/particles/ParticleImage')

const LayoutLookbook = React.createClass({
  render: function() {
    return (
      <div className='layout layout-lookbook'>
          <Grid fluid>
              <Row>
                  <Col sm={6}>
                      <ArticleHeader ArticleCategory={this.props.data.ArticleCategory} ArticleTitle={this.props.data.ArticleTitle} CharityCredit={this.props.data.CharityCredit} />
                      <ArticleIntro bordered componentClasses='border-color-gold' data={this.props.data.fields[1]} />
                      <ContributorList componentClasses='contributor-list' data={this.props.data.ContributorList} separator=', ' />
                      <Separator separatorType=',' />
                      <DatePublished componentClasses='date-published' content={this.props.data.DatePublished.content.html} />
                  </Col>
                  <Col sm={6}>
                      <ParticleImage url={this.props.data.fields[0].content.url} credits={this.props.data.fields[0].content.html} />
                  </Col>
                  <Col sm={6}>
                      <ParticleImage url={this.props.data.fields[1].content.url} credits={this.props.data.fields[1].content.html} />
                  </Col>
                  <Col sm={6}>
                      <ParticleImage url={this.props.data.fields[2].content.url} />
                  </Col>
                  <Col sm={6}>
                      <ParticleImage url={this.props.data.fields[3].content.url} />
                  </Col>
                  <Col sm={6}>
                      <ParticleImage url={this.props.data.fields[4].content.url} credits={this.props.data.fields[4].content.html} />
                  </Col>
              </Row>
          </Grid>
      </div>
    )
  }
})

module.exports = LayoutLookbook
