import React from 'react'
import { Row, Col } from 'react-bootstrap'

import Container from '../containers/Container'
import SectionHeader from '../containers/SectionHeader'
import ContributorList from '../containers/ContributorList'

/*
articles-list-text => ArticlesListContainer
ArticleTeaser
meta-links => MetaLinksContainer
square-article => SquareArticleContainer
wide-img => WideImgContainer
 */

import AboutContributorContainer from '../containers/AboutContributorContainer'
import ArticlesListContainer from '../containers/ArticlesListContainer'
import ArticleTeaser from '../containers/ArticleTeaser'
import MetaLinksContainer from '../containers/MetaLinksContainer'
import SquareArticleContainer from '../containers/SquareArticleContainer'
import WideImgContainer from '../containers/WideImgContainer'


import HR from '../components/base/HR'
import ArticleCategory from '../components/base/ArticleCategory'
import Link from '../components/base/Link'

import ParticleImage from '../components/particles/ParticleImage'
import ParticleText from '../components/particles/ParticleText'
import ParticleH2 from '../components/particles/ParticleH2'
import ParticleH3 from '../components/particles/ParticleH3'

class LayoutFront extends React.Component {
  render() {
    return (
      <div className='layout layout-front'>
          <Container fluid classes='panel-1'>
              <Row className='articles row-flex'>
                  <Col sm={12}>
                      <ParticleH2 className='text-color-gold header-top' {...this.props.data.list[17]}/>
                      <HR/>
                  </Col>
                  <Col sm={3}>
                      <ArticleTeaser
      classes="wrapper"
      metaLinksClasses="article-meta-small"
      ParticleImage={this.props.data.list[0]}
      ArticleCategory={this.props.data.list[1].field_main_topics[0]}
      ParticleH2={this.props.data.list[1].ParticleH2}
      ContributorList={this.props.data.list[1].field_contributors}
      />
                  </Col>
                  <Col sm={6}>
                      <ArticleTeaser
      classes="wrapper lg-img first-center-img"
      metaLinksClasses="article-meta-large-centered article-meta-large-centered"
      ParticleImage={this.props.data.list[2]}
      ArticleCategory={this.props.data.list[3].field_main_topics[0]}
      ParticleH2={this.props.data.list[3].ParticleH2}
      ContributorList={this.props.data.list[3].field_contributors}
      />
                  </Col>
                  <Col sm={3}>
              <ParticleH2 className='heading-text' {...this.props.data.list[16]}/>
            </Col>
          </Row>
        </Container>
        <Container fluid>
          <Row>
            <Col sm={6}>
              <ArticleTeaser classes="wrapper lg-img" metaLinksClasses="article-meta-large has-intro-text"
      ParticleImage={this.props.data.list[4]}
      ArticleCategory={this.props.data.list[5].field_main_topics[0]}
      ParticleH2={this.props.data.list[5].ParticleH2}
      ParticleText={this.props.data.list[5].ParticleText}
      ContributorList={this.props.data.list[5].field_contributors}
      />
            </Col>
            <Col sm={6}>
              <ArticleTeaser classes="wrapper lg-img" metaLinksClasses="article-meta-large has-intro-text"
      ParticleImage={this.props.data.list[6]}
      ArticleCategory={this.props.data.list[27].field_main_topics[0]}
      ParticleH2={this.props.data.list[27].ParticleH2}
      ParticleText={this.props.data.list[27].ParticleText}
      ContributorList={this.props.data.list[27].field_contributors}
      />
            </Col>
          </Row>
        </Container>
        <Container fluid>
          <Row className='articles-grid row-flex'>
            <Col xs={12} sm={6} md={4}>
              <SquareArticleContainer>
                <ParticleH2 className='text-color-gold' {...this.props.data.list[19]}/>
                <HR/>
                <ParticleImage {...this.props.data.list[28]}/>
                <ArticleTeaser classes="wrapper"
      ParticleH2={this.props.data.list[29].ParticleH2}
      ParticleText={this.props.data.list[29].ParticleText}
      ContributorList={this.props.data.list[29].field_contributors}
      />
              </SquareArticleContainer>
            </Col>
            <Col xs={12} sm={6} md={4}>
              <ArticlesListContainer>
                <ParticleH2 className='text-color-gold' {...this.props.data.list[18]}/>
                <HR/>
                <div className='articles-list-text'>
                  <ParticleText {...this.props.data.list[8]}/>
                  <ParticleText {...this.props.data.list[23]}/>
                  <ParticleText {...this.props.data.list[24]}/>
                  <ParticleText {...this.props.data.list[25]}/>
                  <div className="more-button">
                    <Link text={this.props.data.list[9].value} url={this.props.data.list[9].url}/>
                  </div>
                </div>
              </ArticlesListContainer>
            </Col>
            <Col xs={12} sm={6} md={4}>
              <SquareArticleContainer>
                <ParticleH2 className='text-color-gold' {...this.props.data.list[18]}/>
                <HR/>
                <ParticleImage {...this.props.data.list[30]}/>
                <ArticleTeaser classes="wrapper"
      ParticleH2={this.props.data.list[31].ParticleH2}
      ParticleText={this.props.data.list[31].ParticleText}
      ContributorList={this.props.data.list[31].field_contributors}
      />
              </SquareArticleContainer>
            </Col>
            <Col sm={6} md={4}>
              <ArticlesListContainer>
                <ParticleH2 className='text-color-gold' {...this.props.data.list[15]}/>
                <HR/>
                <div className='articles-list-text'>
                  <ParticleText {...this.props.data.list[8]}/>
                  <ParticleText {...this.props.data.list[23]}/>
                  <ParticleText {...this.props.data.list[24]}/>
                  <ParticleText {...this.props.data.list[25]}/>
                  <div className="more-button">
                    <Link text={this.props.data.list[9].value} url={this.props.data.list[9].url}/>
                  </div>
                </div>
              </ArticlesListContainer>
            </Col>
            <Col xs={12} sm={6} md={4}>
              <SquareArticleContainer>
                <ParticleH2 className='text-color-gold' {...this.props.data.list[18]}/>
                <HR/>
                <ParticleImage {...this.props.data.list[40]}/>
                <ArticleTeaser classes="wrapper"
      ParticleH2={this.props.data.list[41].ParticleH2}
      ParticleText={this.props.data.list[41].ParticleText}
      ContributorList={this.props.data.list[41].field_contributors}
      />
              </SquareArticleContainer>
            </Col>
            <Col xs={12} sm={6} md={4}>
              <ArticlesListContainer>
                <ParticleH2 className='text-color-gold' {...this.props.data.list[19]}/>
                <HR/>
                <div className='articles-list-text'>
                  <ParticleText {...this.props.data.list[8]}/>
                  <ParticleText {...this.props.data.list[23]}/>
                  <ParticleText {...this.props.data.list[24]}/>
                  <ParticleText {...this.props.data.list[25]}/>
                  <div className="more-button">
                    <Link text={this.props.data.list[9].value} url={this.props.data.list[9].url}/>
                  </div>
                </div>
              </ArticlesListContainer>
            </Col>
          </Row>
          <Row className='row-flex'>
            <Col sm={12} className='contributors-headline'>
              <SectionHeader {...this.props.data.list[21]}/>
            </Col>
          </Row>
          <Row className='contributors-grid'>
            <Col sm={3}>
              <AboutContributorContainer ParticleImage={this.props.data.list[10].ParticleImage} ParticleH2={this.props.data.list[10].ParticleH2} ParticleH3={this.props.data.list[10].ParticleH3} ParticleText={this.props.data.list[10].ParticleText}/>
            </Col>
            <Col sm={3}>
              <AboutContributorContainer ParticleImage={this.props.data.list[10].ParticleImage} ParticleH2={this.props.data.list[10].ParticleH2} ParticleH3={this.props.data.list[10].ParticleH3} ParticleText={this.props.data.list[10].ParticleText}/>
            </Col>
            <Col sm={3}>
              <AboutContributorContainer ParticleImage={this.props.data.list[10].ParticleImage} ParticleH2={this.props.data.list[10].ParticleH2} ParticleH3={this.props.data.list[10].ParticleH3} ParticleText={this.props.data.list[10].ParticleText}/>
            </Col>
            <Col sm={3}>
              <AboutContributorContainer ParticleImage={this.props.data.list[10].ParticleImage} ParticleH2={this.props.data.list[10].ParticleH2} ParticleH3={this.props.data.list[10].ParticleH3} ParticleText={this.props.data.list[10].ParticleText}/>
            </Col>
            <Col sm={3}>
              <AboutContributorContainer ParticleImage={this.props.data.list[10].ParticleImage} ParticleH2={this.props.data.list[10].ParticleH2} ParticleH3={this.props.data.list[10].ParticleH3} ParticleText={this.props.data.list[10].ParticleText}/>
            </Col>
            <Col sm={3}>
              <AboutContributorContainer ParticleImage={this.props.data.list[10].ParticleImage} ParticleH2={this.props.data.list[10].ParticleH2} ParticleH3={this.props.data.list[10].ParticleH3} ParticleText={this.props.data.list[10].ParticleText}/>
            </Col>
            <Col sm={3}>
              <AboutContributorContainer ParticleImage={this.props.data.list[10].ParticleImage} ParticleH2={this.props.data.list[10].ParticleH2} ParticleH3={this.props.data.list[10].ParticleH3} ParticleText={this.props.data.list[10].ParticleText}/>
            </Col>
            <Col sm={3}>
              <AboutContributorContainer ParticleImage={this.props.data.list[10].ParticleImage} ParticleH2={this.props.data.list[10].ParticleH2} ParticleH3={this.props.data.list[10].ParticleH3} ParticleText={this.props.data.list[10].ParticleText}/>
            </Col>
          </Row>
          <Row className='row-flex'>
            <Col sm={12} className='recommend-headline'>
              <SectionHeader {...this.props.data.list[22]}/>
            </Col>
          </Row>
          <Row className='articles row-flex'>
            <Col sm={6}>
              <ArticleTeaser classes="wrapper lg-img" metaLinksClasses="article-meta-large has-intro-text"
      ParticleImage={this.props.data.list[32]}
      ArticleCategory={this.props.data.list[33].field_main_topics[0]}
      ParticleText={this.props.data.list[33].ParticleText}
      ParticleH2={this.props.data.list[33].ParticleH2}
      ContributorList={this.props.data.list[33].field_contributors}
      />
            </Col>
            <Col sm={6}>
              <ArticleTeaser classes="wrapper lg-img" metaLinksClasses="article-meta-large has-intro-text"
      ParticleImage={this.props.data.list[34]}
      ParticleText={this.props.data.list[35].ParticleText}
      ArticleCategory={this.props.data.list[35].field_main_topics[0]}
      ParticleH2={this.props.data.list[35].ParticleH2}
      ContributorList={this.props.data.list[35].field_contributors}
      />
            </Col>
            <Col sm={9}>
              <WideImgContainer>
                <div className="wrapper">
                  <ParticleImage {...this.props.data.list[36]}/>
                  <div className="article-meta-large article-meta-large-left">
                    <ArticleCategory {...this.props.data.list[37].field_main_topics[0]}/>
                    <ParticleH2 {...this.props.data.list[37].ParticleH2}/>
                    <ContributorList data={this.props.data.list[37].field_contributors}/>
                  </div>
                </div>
              </WideImgContainer>
            </Col>
            <Col sm={3}>
              <ArticleTeaser classes="wrapper xtr-sm-img" metaLinksClasses="article-meta-xtr-sm"
      ParticleImage={this.props.data.list[38]}
      ArticleCategory={this.props.data.list[39].field_main_topics[0]}
      ParticleH2={this.props.data.list[39].ParticleH2}
      ContributorList={this.props.data.list[39].field_contributors}
      />
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default LayoutFront
