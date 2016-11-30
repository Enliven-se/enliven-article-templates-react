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
  ParticleImage = require('../components/particles/ParticleImage'),
  PhotoCredits = require('../containers/PhotoCredits')

const LayoutLookbook = React.createClass({
  render: function() {
    return (
      <div className='layout layout-lookbook'>
          <Container fluid>
              <Row className='big-row'>
                  <Col xs={6}>
                      <ArticleCategory content={this.props.data.ArticleCategory.content.html} url={this.props.data.ArticleCategory.content.url} classes={this.props.data.ArticleCategory.classes} />
                      <Row>
                          <Col xs={10} xsOffset={2}>
                              <ArticleHeader ArticleTitle={this.props.data.ArticleTitle} CharityCredit={this.props.data.CharityCredit} />
                              <ArticleIntro bordered classes='border-color-gold' data={this.props.data.fields[0]} />
                              <ContributorList classes='contributor-list' data={this.props.data.ContributorList} separator=', ' />
                              <DatePublished classes='date-published' content={this.props.data.DatePublished.content.html} />
                          </Col>
                      </Row>
                  </Col>
                  <Col sm={6}>
                      <ParticleImage url={this.props.data.fields[1].content.url} />
                      <PhotoCredits classes={this.props.data.fields[1].content.classes} content={this.props.data.fields[1].content.html} />
                  </Col>
              </Row>
              <Row className='big-row'>
                  <Col sm={6}>
                      <ParticleImage url={this.props.data.fields[2].content.url}/>
                  </Col>
                  <Col sm={6}>
                      <Row>
                          <Col sm={8} className='img-small'>
                              <ParticleImage url={this.props.data.fields[3].content.url} />
                          </Col>
                      </Row>
                      <div className='credit-container'>
                        <PhotoCredits classes={this.props.data.fields[3].content.classes} content={this.props.data.fields[3].content.html} />
                      </div>
                  </Col>
              </Row>
              <Row className='big-row'>
                  <Col sm={6}>
                      <Row>
                          <Col sm={8} className='img-small'>
                              <ParticleImage url={this.props.data.fields[4].content.url} />
                          </Col>
                      </Row>
                      <div className='credit-container'>
                        <PhotoCredits classes={this.props.data.fields[4].content.classes} content={this.props.data.fields[4].content.html} />
                      </div>
                  </Col>
                  <Col sm={6}>
                      <ParticleImage url={this.props.data.fields[5].content.url}/>
                  </Col>
              </Row>
          </Container>
      </div>
    )
  }
})

module.exports = LayoutLookbook
