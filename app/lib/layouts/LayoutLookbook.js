import React from 'react'
import { Row, Col } from 'react-bootstrap'
// window.React = React

import ArticleIntro from '../components/base/ArticleIntro'
import ArticleCategory from '../components/base/ArticleCategory'
import DatePublished from '../components/base/DatePublished'
import Separator from '../components/base/Separator'
import Container from '../containers/Container'
import ArticleHeader from '../containers/ArticleHeader'
import ContributorList from '../containers/ContributorList'
import ParticleImage from '../components/particles/ParticleImage'

class LayoutLookbook extends React.Component {
  render() {
    return (
      <div className='layout layout-lookbook'>
          <Container fluid>
              <Row className='big-row row-flex'>
                  <Col md={6}>
                      <ArticleCategory name={this.props.data.field_main_topics[0].name} url={this.props.data.field_main_topics[0].url}/>
                      <Row>
                          <Col md={10} mdOffset={2}>
                              <ArticleHeader ArticleTitle={this.props.data.field_headline}/>
                              <ArticleIntro {...this.props.data.field_particles[0]} bordered/>
                              <ContributorList data={this.props.data.field_contributors} separator=', '/>
                              <DatePublished value={this.props.data.created} date_format='MMMM D, YYYY'/>
                          </Col>
                      </Row>
                  </Col>
                  <Col md={6}>
                      <ParticleImage {...this.props.data.field_particles[1]}/>
                  </Col>
              </Row>
              <Row className='big-row row-flex'>
                  <Col md={6}>
                      <ParticleImage {...this.props.data.field_particles[2]}/>
                  </Col>
                  <Col md={6}>
                      <div className='img-small'>
                          <ParticleImage {...this.props.data.field_particles[3]}/>
                      </div>
                  </Col>
              </Row>
              <Row className='big-row row-flex'>
                  <Col md={6}>
                      <div className='img-small'>
                          <ParticleImage {...this.props.data.field_particles[4]}/>
                      </div>
                  </Col>
                  <Col md={6}>
                      <ParticleImage {...this.props.data.field_particles[5]}/>
                        </Col>
                    </Row>
                </Container>
            </div>
    )
  }
}

export default LayoutLookbook
