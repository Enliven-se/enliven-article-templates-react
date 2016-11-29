import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
// window.React = React

const Container = require('../containers/Container'),
  ArticleHeader = require('../containers/ArticleHeader'),
  ContributorList = require('../containers/ContributorList'),
  HR = require('../components/base/HR'),
  ParticleH2 = require('../components/particles/ParticleH2'),
  ParticleImage = require('../components/particles/ParticleImage'),
  ParticleText = require('../components/particles/ParticleText')

const LayoutFeature = React.createClass({
  render: function() {
    return (
      <div className='layout layout-feature'>
        <Container fluid componentClasses='panel-1' backgroundImage={this.props.data.fields[0].content.url}>
          <Row>
            <Col sm={6} smOffset={6}>
              <ArticleHeader ArticleCategory={this.props.data.ArticleCategory} ArticleTitle={this.props.data.ArticleTitle} />
            </Col>
          </Row>
        </Container>
        <Grid>
          <Row>
            <Col sm={6}>
              <ContributorList componentClasses='contributor-list' data={this.props.data.ContributorList} separator=', ' />
            </Col>
            <Col sm={6} className='col-right'>
              <ParticleText componentClasses='particle-text' content={this.props.data.fields[1].content.html} />
            </Col>
          </Row>
        </Grid>
        <Grid>
          <Row>
            <Col>
              <ParticleImage url={this.props.data.fields[2].content.url} />
            </Col>
            <Col sm={6} className='col-left'>
              <ParticleText componentClasses='particle-text' content={this.props.data.fields[3].content.html} />
            </Col>
            <Col sm={6} className='col-right'>
              <ParticleText componentClasses='particle-text' content={this.props.data.fields[4].content.html} />
            </Col>
            <Col>
              <ParticleImage url={this.props.data.fields[5].content.url} />
            </Col>
            <Col>
              <ParticleImage url={this.props.data.fields[6].content.url} />
            </Col>
            <Col sm={6} className='col-left'>
              <ParticleText componentClasses='particle-text' content={this.props.data.fields[7].content.html} />
              <HR />
              <ParticleText componentClasses='particle-text' content={this.props.data.fields[8].content.html} />
            </Col>
            <Col sm={6} className='col-right'>
              <ParticleText componentClasses='particle-text' content={this.props.data.fields[9].content.html} />
            </Col>
            <Col>
              <ParticleImage url={this.props.data.fields[10].content.url} />
            </Col>
            <Col sm={6}>
              <ParticleImage url={this.props.data.fields[11].content.url} />
            </Col>
            <Col sm={6} className='col-right'>
              <ParticleText componentClasses='particle-text' content={this.props.data.fields[12].content.html} />
            </Col>
            <Col>
              <ParticleImage url={this.props.data.fields[13].content.url} />
            </Col>
            <Col>
              <ParticleImage url={this.props.data.fields[14].content.url} />
            </Col>
            <Col sm={6} smOffset={6} className='col-right'>
              <ParticleText componentClasses='particle-text' content={this.props.data.fields[15].content.html} />
            </Col>
            <Col>
              <ParticleImage url={this.props.data.fields[16].content.url} />
            </Col>
            <Col sm={6} className='col-left'>
              <ParticleH2 componentClasses='particle-text' content={this.props.data.fields[17].content.html} />
              <HR />
              <ParticleText componentClasses='particle-text' content={this.props.data.fields[18].content.html} />
            </Col>
            <Col sm={6} className='col-right'>
              <ParticleText componentClasses='particle-text' content={this.props.data.fields[19].content.html} />
            </Col>
            <Col>
              <ParticleImage url={this.props.data.fields[20].content.url} />
            </Col>
            <Col sm={6} className='col-left'>
              <ParticleText componentClasses='particle-text' content={this.props.data.fields[20].content.html} />
              <ParticleImage url={this.props.data.fields[21].content.url} />
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
})

module.exports = LayoutFeature
