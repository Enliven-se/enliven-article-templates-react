import React from 'react'
import { Row, Col } from 'react-bootstrap'

import Container from '../containers/Container'
import ArticleTeaser from '../containers/ArticleTeaser'

class LayoutArticleTeasers extends React.Component {
  render() {

    const contributors = {
      "data": this.props.data.fields[0].ContributorList
    }
    return (
      <div className='layout layout-article-teasers'>
          <Container fluid classes='panel-1'>
              <Row>
                  <Col md={6} className='picture-left'>
                      <ArticleTeaser {...this.props.data.fields[0]} ContributorList={contributors}/>
                  </Col>

                  <Col md={6} className='large-h'>
                      <ArticleTeaser {...this.props.data.fields[1]} ContributorList={contributors}/>
                  </Col>

                  <Col md={6} className='small-h'>
                      <ArticleTeaser {...this.props.data.fields[2]} ContributorList={contributors}/>
                  </Col>

                  <Col md={8} className='big-picture-left'>
                      <ArticleTeaser {...this.props.data.fields[3]} ContributorList={contributors}/>
                  </Col>

                  <Col md={6} className='large-h-with-intro'>
                      <ArticleTeaser {...this.props.data.fields[4]}/>
                  </Col>
              </Row>
          </Container>
      </div>
    )
  }
}

export default LayoutArticleTeasers
