import React from 'react'
import { Row, Col } from 'react-bootstrap'

// containers
import ArticleHeader from '../containers/ArticleHeader'
import Container from '../containers/Container'
import ContributorList from '../containers/ContributorList'

// components
import ArticleCategory from '../components/base/ArticleCategory'
import ArticleTitle from '../components/base/ArticleTitle'
import HR from '../components/base/HR'
import ParticleImage from '../components/particles/ParticleImage'
import ParticlePullquote from '../components/particles/ParticlePullquote'
import ParticleText from '../components/particles/ParticleText'
import ArticleIntro from '../components/base/ArticleIntro'

class PictureIntensive2 extends React.Component {
  render() {
    return (
      <div className='layout layout-picture-intensive-2'>
          <Container fluid classes='panel-1'>
              <Row>
                  <Col sm={6}>
                      <ArticleCategory {...this.props.data.ArticleCategory}/>
                      <ArticleIntro {...this.props.data.fields[0]} bordered/>
                      <ContributorList data={this.props.data.ContributorList} separator=', '/>
                  </Col>
                  <Col sm={6}>

                  </Col>
              </Row>
              <Row>
                  <Col sm={6}>

                  </Col>
                  <Col sm={6}>

                  </Col>
              </Row>
              <Row>
                  <Col sm={6}>

                  </Col>
              </Row>
              <Row>
                  <Col sm={6}>

                  </Col>
                  <Col sm={6}>

                  </Col>
              </Row>
              <Row>
                  <Col sm={6}>
                      
                  </Col>
                  <Col sm={6}>

                  </Col>
              </Row>
        </Container>
      </div>
    )
  }
}

export default PictureIntensive2
