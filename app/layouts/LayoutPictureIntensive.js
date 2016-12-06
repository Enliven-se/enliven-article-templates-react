import React from 'react'
import { Row, Col } from 'react-bootstrap'
// window.React = React

const Container = require('../containers/Container'),
  ArticleHeader = require('../containers/ArticleHeader'),
  // PhotoCredits = require('../containers/PhotoCredits'),
  // Container = require('../containers/Container'),
  //   ArticleHeader = require('../containers/ArticleHeader'),
  //   ArticleIntro = require('../containers/ArticleIntro'),
  //   ContributorList = require('../containers/ContributorList'),
  //   ArticleCategory = require('../components/base/ArticleCategory'),
  //   DatePublished = require('../components/base/DatePublished'),
  //   Separator = require('../components/base/Separator'),
  ParticleImage = require('../components/particles/ParticleImage'),
  ParticleText = require('../components/particles/ParticleText')


const PictureIntensive = React.createClass({
  render: function() {
    return (
      <div className='layout layout-picture-intensive'>
        <Container fluid classes='panel-1' backgroundImage={this.props.data.fields[0].content.url}>
          <Row>
            <Col md={10}>

            </Col>
            <Col md={3}>
              <ArticleHeader content={this.props.data.ArticleHeader.content.html} url={this.props.data.ArticleHeader.content.url} classes={this.props.data.ArticleHeader.classes}/>
            </Col>
          </Row>
          <Row>
            <Col md={6} mdOffset={1}>
              <ParticleText classes={this.props.data.fields[1].classes} content={this.props.data.fields[1].content.html} />
            </Col>
            <Col md={2}>
              <ParticleText classes={this.props.data.fields[2].classes} content={this.props.data.fields[2].content.html} />
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <ParticleImage url={this.props.data.fields[3].content.url} />
            </Col>
          </Row>
          <Row>
            <Col md={6} mdOffset={1}>
              <ParticleText classes={this.props.data.fields[4].classes} content={this.props.data.fields[2].content.html} />
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <ParticleImage url={this.props.data.fields[5].content.url} />
            </Col>
            <Col md={6}>
              <ParticleImage url={this.props.data.fields[6].content.url} />
            </Col>
          </Row>
          <Row>
            <Col md={6} mdOffset={1}>
              <ParticleText classes={this.props.data.fields[7].classes} content={this.props.data.fields[7].content.html} />
            </Col>
            <Col md={2}>
              <ParticleText classes={this.props.data.fields[8].classes} content={this.props.data.fields[8].content.html} />  
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
})

module.exports = PictureIntensive
