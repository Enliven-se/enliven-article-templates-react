import React from 'react'
import { Row, Col } from 'react-bootstrap'
// window.React = React

import Container from '../containers/Container'
import ArticleHeader from '../containers/ArticleHeader'
import ContributorList from '../containers/ContributorList'
import HR from '../components/base/HR'
import ParticleH2 from '../components/particles/ParticleH2'
import ParticleImage from '../components/particles/ParticleImage'
import ParticleText from '../components/particles/ParticleText'

class LayoutFeature extends React.Component {
  render() {
    return (
      <div className='layout layout-feature'>
          <Container fluid classes='panel-1' backgroundImage={this.props.data.fields[0]}>
              <Row>
                  <Col sm={6} smOffset={6}>
                      <ArticleHeader {...this.props.data}/>
                  </Col>
              </Row>
          </Container>
          <Container fluid>
              <Row>
                  <Col sm={6}>
                      <ContributorList data={this.props.data.ContributorList}/>
                  </Col>
                  <Col sm={6} className='col-right'>
                      <ParticleText {...this.props.data.fields[1]}/>
                  </Col>
              </Row>
          </Container>
          <Container fluid>
              <Row>
                  <Col sm={12}>
                      <ParticleImage {...this.props.data.fields[2]}/>
                  </Col>
                  <Col sm={6} className='col-left'>
                      <ParticleText {...this.props.data.fields[3]}/>
                  </Col>
                  <Col sm={6} className='col-right'>
                      <ParticleText {...this.props.data.fields[4]}/>
                  </Col>
                  <Col sm={12}>
                      <ParticleImage {...this.props.data.fields[5]}/>
                  </Col>
                  <Col sm={12}>
                      <ParticleImage {...this.props.data.fields[6]}/>
                  </Col>
                  <Col sm={6} className='col-left'>
                      <ParticleText {...this.props.data.fields[7]}/>
                      <HR/>
                      <ParticleText {...this.props.data.fields[8]}/>
                  </Col>
                  <Col sm={6} className='col-right'>
                      <ParticleText {...this.props.data.fields[9]}/>
                  </Col>
                  <Col sm={12}>
                      <ParticleImage {...this.props.data.fields[10]}/>
                  </Col>
                  <Col sm={6}>
                      <ParticleImage {...this.props.data.fields[11]}/>
                  </Col>
                  <Col sm={6} className='col-right'>
                      <ParticleText {...this.props.data.fields[12]}/>
                  </Col>
                  <Col sm={12}>
                      <ParticleImage {...this.props.data.fields[13]}/>
                  </Col>
                  <Col sm={12}>
                      <ParticleImage {...this.props.data.fields[14]}/>
                  </Col>
                  <Col sm={6} smOffset={6} className='col-right'>
                      <ParticleText {...this.props.data.fields[15]}/>
                  </Col>
                  <Col sm={12}>
                      <ParticleImage {...this.props.data.fields[16]}/>
                  </Col>
                  <Col sm={6} className='col-left'>
                      <ParticleText {...this.props.data.fields[17]}/>
                      <HR/>
                      <ParticleText {...this.props.data.fields[18]}/>
                  </Col>
                  <Col sm={6} className='col-right'>
                      <ParticleText {...this.props.data.fields[19]}/>
                  </Col>
                  <Col sm={12}>
                      <ParticleImage {...this.props.data.fields[20]}/>
                  </Col>
                  <Col sm={6} className='col-left'>
                      <ParticleText {...this.props.data.fields[21]}/>
                  </Col>
                  <Col sm={6}>
                      <ParticleImage {...this.props.data.fields[22]}/>
                  </Col>
              </Row>
          </Container>
      </div>
    )
  }
}

export default LayoutFeature
