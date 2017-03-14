import React from 'react'
import { Row, Col } from 'react-bootstrap'

import AboutContributorContainer from '../containers/AboutContributorContainer'
import ArticlesListContainer from '../containers/ArticlesListContainer'
import ArticleTeaser from '../containers/ArticleTeaser'
import Container from '../containers/Container'
import ContributorList from '../containers/ContributorList'
import MetaLinksContainer from '../containers/MetaLinksContainer'
import SectionHeader from '../containers/SectionHeader'
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

    // iterate over a list of articles, render contributors
    const ContributorListFront = function(props) {
        const items = props.data.slice(0, 8).map(function(item, i) {
        // console.log('contrib #'+i, item)
          return (
            item.field_contributors[0].field_person_name ?
            <Col sm={3} key={'c' + i}>
                <AboutContributorContainer
                    ParticleImage={item.field_contributors[0].field_person_name.field_profile_image.file}
                    ParticleH2={item.field_contributors[0].field_person_name.field_full_name}
                    ParticleH3={item.field_contributors[0].field_person_name.field_main_topics[0].name}
                    ParticleText={item.field_contributors[0].field_person_name.field_about_you.value}
                />
            </Col>
            : null
          )
        })

        return (
            <Row className='contributors-grid'>
                {items}
            </Row>
        )
    }

    if (!this.props.data) return null

    return (
      <div className='layout layout-front'>
          <Container fluid classes='panel-1'>
              <Row>
                  <Col sm={12}>
                      <ParticleH2 className='text-color-gold header-top' classes="text-color-gold" type="text" value="New On Enliven"/>
                      <HR/>
                  </Col>
              </Row>
              <Row className='articles row-flex'>
                  {
                      this.props.data[0] ?
                          <Col sm={3}>
                              <ArticleTeaser
                                  classes="wrapper"
                                  metaLinksClasses="article-meta-small"
                                  ParticleImage={this.props.data[0].field_particles[0]}
                                  ArticleCategory={this.props.data[0].field_main_topics[0]}
                                  ParticleH2={this.props.data[0].field_headline.field_longtext}
                                  ContributorList={this.props.data[0].field_contributors}
                                  url={this.props.data[0].url} edit_url={this.props.data[0].edit_url}
                              />
                          </Col>
                      : null
                  }
                  {
                      this.props.data[1] ?
                          <Col sm={6}>
                              <ArticleTeaser
                                  classes="wrapper lg-img first-center-img"
                                  metaLinksClasses="article-meta-large-centered article-meta-large-centered"
                                  ParticleImage={this.props.data[1].field_particles[0]}
                                  ArticleCategory={this.props.data[1].field_main_topics[0]}
                                  ParticleH2={this.props.data[1].field_headline.field_longtext}
                                  ContributorList={this.props.data[1].field_contributors}
                                  url={this.props.data[1].url} edit_url={this.props.data[1].edit_url}
                              />
                          </Col>
                      : null
                  }
                  <Col sm={3}>
                      <ParticleH2 className='heading-text' type="text" value="Ad Space" />
                  </Col>
              </Row>
              <Row>
                  {
                      this.props.data[2] ?
                          <Col sm={6}>
                              <ArticleTeaser classes="wrapper lg-img" metaLinksClasses="article-meta-large has-intro-text"
                                  ParticleImage={this.props.data[2].field_particles[0]}
                                  ArticleCategory={this.props.data[2].field_main_topics[0]}
                                  ParticleH2={this.props.data[2].field_headline.field_longtext}
                                  ParticleText={this.props.data[2].field_particles[1]}
                                  ContributorList={this.props.data[2].field_contributors}
                                  url={this.props.data[2].url} edit_url={this.props.data[2].edit_url}
                              />
                          </Col>
                      : null
                  }
                  {
                      this.props.data[3] ?
                          <Col sm={6}>
                              <ArticleTeaser classes="wrapper lg-img" metaLinksClasses="article-meta-large has-intro-text"
                                  ParticleImage={this.props.data[3].field_particles[0]}
                                  ArticleCategory={this.props.data[3].field_main_topics[0]}
                                  ParticleH2={this.props.data[3].field_headline.field_longtext}
                                  ParticleText={this.props.data[3].field_particles[1]}
                                  ContributorList={this.props.data[3].field_contributors}
                                  url={this.props.data[3].url} edit_url={this.props.data[3].edit_url}
                              />
                          </Col>
                      : null
                  }
              </Row>
              <Row className='articles-grid row-flex'>
                  {
                      this.props.data[4] ?
                          <Col xs={12} sm={6} md={4}>
                              <SquareArticleContainer>
                                  <ParticleH2 className='text-color-gold' classes="text-color-gold" type="text" value="Interior Design"/>
                                  <HR/>
                                  <ParticleImage {...this.props.data[4].field_particles[0]}/>
                                  <ArticleTeaser classes="wrapper"
                                      ParticleH2={this.props.data[4].field_headline.field_longtext}
                                      //   ParticleText={this.props.data[4].field_particles[1]}
                                      ContributorList={this.props.data[4].field_contributors}
                                      url={this.props.data[4].url} edit_url={this.props.data[4].edit_url}
                                  />
                              </SquareArticleContainer>
                          </Col>
                      : null
                  }
                  <Col xs={12} sm={6} md={4}>
                      <ArticlesListContainer>
                          <ParticleH2 className='text-color-gold' classes="text-color-gold" type="text" value="Top Articles"/>
                          <HR/>
                          <div className='articles-list-text'>
                              <ParticleText type="text" value='<strong class="bold-bits">Solange Knowles on Why Creating Regal Images of Black Women Matters Most in Her New Videos.</strong>'/>
                              <ParticleText type="text" value="Take a Tip From Ashley and Mary-Kate Olsen and Stock Up on Chic Basics for Under $500"/>
                              <ParticleText type="text" value="Hailey Baldwin Takes Red Carpet Denim Dressing to the Streets"/>
                              <ParticleText type="text" value="Solange Knowles on Why Creating Regal Images of Black Women Matters Most in Her New Videos"/>
                              <div className="more-button">
                                  <Link text="More" url="#"/>
                              </div>
                          </div>
                      </ArticlesListContainer>
                  </Col>
                  {
                      this.props.data[5] ?
                          <Col xs={12} sm={6} md={4}>
                              <SquareArticleContainer>
                                  <ParticleH2 className='text-color-gold' classes="text-color-gold" type="text" value="Women's Health"/>
                                  <HR/>
                                  <ParticleImage {...this.props.data[5].field_particles[0]}/>
                                  <ArticleTeaser classes="wrapper"
                                      ParticleH2={this.props.data[5].field_headline.field_longtext}
                                      //   ParticleText={this.props.data[5].field_particles[1]}
                                      ContributorList={this.props.data[5].field_contributors}
                                      url={this.props.data[5].url} edit_url={this.props.data[5].edit_url}
                                  />
                              </SquareArticleContainer>
                          </Col>
                      : null
                  }
                  <Col sm={6} md={4}>
                      <ArticlesListContainer>
                          <ParticleH2 className='text-color-gold' classes="text-color-gold" type="text" value="Women's Health"/>
                          <HR/>
                          <div className='articles-list-text'>
                              <ParticleText type="text" value='<strong class="bold-bits">Solange Knowles on Why Creating Regal Images of Black Women Matters Most in Her New Videos.</strong>'/>
                              <ParticleText type="text" value="Take a Tip From Ashley and Mary-Kate Olsen and Stock Up on Chic Basics for Under $500"/>
                              <ParticleText type="text" value="Hailey Baldwin Takes Red Carpet Denim Dressing to the Streets"/>
                              <ParticleText type="text" value="Solange Knowles on Why Creating Regal Images of Black Women Matters Most in Her New Videos"/>
                              <div className="more-button">
                                  <Link text="More" url="#"/>
                              </div>
                          </div>
                      </ArticlesListContainer>
                  </Col>
                  {
                      this.props.data[6] ?
                          <Col xs={12} sm={6} md={4}>
                              <SquareArticleContainer>
                                  <ParticleH2 className='text-color-gold' classes="text-color-gold" type="text" value="Top Articles"/>
                                  <HR/>
                                  <ParticleImage {...this.props.data[6].field_particles[0]}/>
                                  <ArticleTeaser classes="wrapper"
                                      ParticleH2={this.props.data[6].field_headline.field_longtext}
                                      //   ParticleText={this.props.data[6].field_particles[1]}
                                      ContributorList={this.props.data[6].field_contributors}
                                      url={this.props.data[6].url} edit_url={this.props.data[6].edit_url}
                                  />
                              </SquareArticleContainer>
                          </Col>
                      : null
                  }
                  <Col xs={12} sm={6} md={4}>
                      <ArticlesListContainer>
                          <ParticleH2 className='text-color-gold' classes="text-color-gold" type="text" value="Interior Design"/>
                          <HR/>
                          <div className='articles-list-text'>
                              <ParticleText type="text" value='<strong class="bold-bits">Solange Knowles on Why Creating Regal Images of Black Women Matters Most in Her New Videos.</strong>'/>
                              <ParticleText type="text" value="Take a Tip From Ashley and Mary-Kate Olsen and Stock Up on Chic Basics for Under $500"/>
                              <ParticleText type="text" value="Hailey Baldwin Takes Red Carpet Denim Dressing to the Streets"/>
                              <ParticleText type="text" value="Solange Knowles on Why Creating Regal Images of Black Women Matters Most in Her New Videos"/>
                              <div className="more-button">
                                  <Link text="More" url="#"/>
                              </div>
                          </div>
                      </ArticlesListContainer>
                  </Col>
              </Row>
              <Row className='row-flex'>
                  <Col sm={12} className='contributors-headline'>
                      <SectionHeader classes="text-uppercase" type="text" value="Our Contributors"/>
                  </Col>
              </Row>
              <ContributorListFront data={this.props.data}/>
              <Row className='row-flex'>
                  <Col sm={12} className='recommend-headline'>
                      <SectionHeader classes="text-uppercase" type="text" value="We Recommend"/>
                  </Col>
              </Row>
              <Row className='articles row-flex'>
                  {
                      this.props.data[7] ?
                          <Col sm={6}>
                              <ArticleTeaser classes="wrapper lg-img" metaLinksClasses="article-meta-large has-intro-text"
                                  ParticleImage={this.props.data[7].field_particles[0]}
                                  ArticleCategory={this.props.data[7].field_main_topics[0]}
                                  ParticleText={this.props.data[7].field_particles[1]}
                                  ParticleH2={this.props.data[7].field_headline.field_longtext}
                                  ContributorList={this.props.data[7].field_contributors}
                                  url={this.props.data[7].url} edit_url={this.props.data[7].edit_url}
                              />
                          </Col>
                      : null
                  }
                  {
                      this.props.data[8] ?
                          <Col sm={6}>
                              <ArticleTeaser classes="wrapper lg-img" metaLinksClasses="article-meta-large has-intro-text"
                                  ParticleImage={this.props.data[8].field_particles[0]}
                                  ParticleText={this.props.data[8].field_particles[1]}
                                  ArticleCategory={this.props.data[8].field_main_topics[0]}
                                  ParticleH2={this.props.data[8].field_headline.field_longtext}
                                  ContributorList={this.props.data[8].field_contributors}
                                  url={this.props.data[8].url} edit_url={this.props.data[8].edit_url}
                              />
                          </Col>
                      : null
                  }
                  {
                      this.props.data[9] ?
                          <Col sm={9}>
                              <WideImgContainer>
                                  <div className="wrapper">
                                      <ParticleImage {...this.props.data[9].field_particles[0]}/>
                                      <div className="article-meta-large article-meta-large-left">
                                          <ArticleCategory {...this.props.data[9].field_main_topics[0]}/>
                                          <ParticleH2 {...this.props.data[9].field_headline.field_longtext}/>
                                          <ContributorList data={this.props.data[9].field_contributors}/>
                                          <ParticleText data={this.props.data[9].field_particles[1]} />
                                          url={this.props.data[9].url} edit_url={this.props.data[9].edit_url}
                                      </div>
                                  </div>
                              </WideImgContainer>
                          </Col>
                      : null
                  }
                  {
                      this.props.data[10] ?
                          <Col sm={3}>
                              <ArticleTeaser classes="wrapper xtr-sm-img" metaLinksClasses="article-meta-xtr-sm"
                                  ParticleImage={this.props.data[10].field_particles[0]}
                                  ArticleCategory={this.props.data[10].field_main_topics[0]}
                                  ParticleH2={this.props.data[10].field_headline.field_longtext}
                                  ContributorList={this.props.data[10].field_contributors}
                                  url={this.props.data[10].url} edit_url={this.props.data[10].edit_url}
                              />
                          </Col>
                      : null
                  }
              </Row>
          </Container>
      </div>
    )
  }
}

export default LayoutFront
