import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
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
                      <ArticleCategory content={this.props.data.ArticleCategory.content.html} url={this.props.data.ArticleCategory.content.url} classes={this.props.data.ArticleCategory.classes} />
                      <Row>
                          <Col md={10} mdOffset={2}>
                              <ArticleHeader ArticleTitle={this.props.data.ArticleTitle} CharityCredit={this.props.data.CharityCredit} />
                              <ArticleIntro bordered classes='border-color-gold' data={this.props.data.fields[0]} />
                              <ContributorList classes='contributor-list' data={this.props.data.ContributorList} separator=', ' />
                              <DatePublished classes='date-published' content={this.props.data.DatePublished.content.html} />
                          </Col>
                      </Row>
                  </Col>
                  <Col md={6}>
                      <ParticleImage url={this.props.data.fields[1].content.url} classes={this.props.data.fields[1].content.classes} credits={this.props.data.fields[1].content.html} />
                  </Col>
              </Row>
              <Row className='big-row'>
                  <Col md={6}>
                      <ParticleImage url={this.props.data.fields[2].content.url}/>
                  </Col>
                  <Col md={6} className='img-small'>
                      <ParticleImage url={this.props.data.fields[3].content.url} classes={this.props.data.fields[3].content.classes} credits={this.props.data.fields[3].content.html} />
                  </Col>
              </Row>
              <Row className='big-row'>
                  <Col md={6} className='img-small'>
<<<<<<< HEAD
                      <ParticleImage url={this.props.data.fields[4].content.url} classes={this.props.data.fields[4].content.classes} credits={this.props.data.fields[4].content.html} />
=======
                      <ParticleImage classes='small-left-image' url={this.props.data.fields[4].content.url} />
                      <PhotoCredits classes={this.props.data.fields[4].content.classes} content={this.props.data.fields[4].content.html} />
>>>>>>> origin/isaiahArticles
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
