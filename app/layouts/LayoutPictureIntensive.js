import React from 'react'
import { Row, Col } from 'react-bootstrap'
// window.React = React

const Container = require('../containers/Container'),
  ArticleIntro = require('../components/base/ArticleIntro'),
  ArticleHeader = require('../containers/ArticleHeader'),
  ParticleImage = require('../components/particles/ParticleImage'),
  ContributorList = require('../containers/ContributorList'),
  ParticleText = require('../components/particles/ParticleText'),
  ParticlePullquote = require('../components/particles/ParticlePullquote'),
  ArticleCategory = require('../components/base/ArticleCategory'),
  ArticleTitle = require('../components/base/ArticleTitle')
const PictureIntensive = React.createClass({
  render: function() {
    return (
      <div className='layout layout-picture-intensive'>
        <Container fluid classes='panel-1'>
          <Row>
            <Col md={12} className='article-category-container'>
              <ArticleCategory {...this.props.data.ArticleCategory}/>

            </Col>

            <Col md={10} className='header-image'>
              <Container fluid classes='panel-2' backgroundImage={this.props.data.fields[1]}>
                <Col md={5} mdOffset={8} className='article-meta'>
                  <ArticleTitle {...this.props.data.ArticleTitle} />
                  <ParticleText {...this.props.data.fields[0]} />
                    <hr></hr>
                    <ContributorList data={this.props.data.ContributorList} inline separator=', '/>

                    </Col>
                  </Container>
            </Col>

          </Row>
          <Row className='big-row first-text'>
            <Col md={6} mdOffset={2}>
              <ParticleText {...this.props.data.fields[2]} />
            </Col>
            <Col md={2} mdOffset={1} className="pullquote-container">
              <ParticlePullquote {...this.props.data.fields[3]} />
            </Col>
          </Row>
          <Row className='big-row big-image'>
            <Col md={12}>
              <Container fluid classes='panel-3' backgroundImage={this.props.data.fields[4]}>
                <Col md={3} className='text-field-in-img'>
                  <ParticleText {...this.props.data.fields[7]}/>
                  <ParticleText {...this.props.data.fields[6]}/>

                </Col>
              </Container>
            </Col>
          </Row>
          <Row className='big-row'>
            <Col md={6} mdOffset={2}>
              <ParticleText {...this.props.data.fields[5]} />
            </Col>
          </Row>
          <Row className='big-row small-image'>
            <Col md={6}>
              <ParticleImage {...this.props.data.fields[8]}/>
            </Col>
            <Col md={6}>
              <ParticleImage {...this.props.data.fields[9]}/>
            </Col>
          </Row>
          <Row className='big-row'>
            <Col md={6} mdOffset={2}>
              <ParticleText {...this.props.data.fields[10]} />
            </Col>
            <Col md={2} mdOffset={1} className="pullquote-container">
              <ParticlePullquote {...this.props.data.fields[11]} />
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
})

module.exports = PictureIntensive
