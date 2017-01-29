import React from 'react'
import { Row, Col } from 'react-bootstrap'

import Container from '../containers/Container'
import ArticleTeaser from '../containers/ArticleTeaser'

class LayoutArticleTeasers extends React.Component {
  render() {
    return (
      <div className='layout layout-article-teasers'>
          <Container fluid classes='panel-1'>
              <Row>
                  <Col md={6} className='picture-left'>
                      <ArticleTeaser {...this.props.data.field_particles[0]}/>
                  </Col>

                  <Col md={6} className='large-h'>
                      <ArticleTeaser {...this.props.data.field_particles[1]}/>
                  </Col>

                  <Col md={6} className='small-h'>
                      <ArticleTeaser {...this.props.data.field_particles[2]}/>
                  </Col>

                  <Col md={8} className='big-picture-left'>
                      <ArticleTeaser {...this.props.data.field_particles[3]}/>
                  </Col>

                  <Col md={6} className='large-h-with-intro'>
                      <ArticleTeaser {...this.props.data.field_particles[4]}/>
                  </Col>
              </Row>
          </Container>
      </div>
    )
  }
}

export default LayoutArticleTeasers
