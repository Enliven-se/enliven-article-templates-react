const React = window.React = require('react'),
  Container = require('../containers/Container'),
  ContributorContainer = require('../containers/ContributorContainer'),
  DateContainer = require('../containers/DateContainer'),
  HeaderContainer = require('../containers/HeaderContainer'),
  ArticleHeader = require('../containers/ArticleHeader'),
  BodyContainer = require('../containers/BodyContainer'),
  MetaContainer = require('../containers/MetaContainer'),

  ArticleCategory = require('../components/base/ArticleCategory'),
  ArticleTitle = require('../components/base/ArticleTitle'),
  ArticleIntro = require('../components/base/ArticleIntro'),
  Avatar = require('../components/base/Avatar'),
  HR = require('../components/base/HR'),
  DatePublished = require('../components/base/DatePublished'),
  Separator = require('../components/base/Separator'),

  ContributorList = require('../components/contributors/ContributorList'),
  Contributor = require('../components/contributors/Contributor'),
  ContributorCredit = require('../components/contributors/ContributorCredit'),
  ContributorRole = require('../components/contributors/ContributorRole'),
  ContributorLink = require('../components/contributors/ContributorLink'),

  ParticleAttachment = require('../components/particles/ParticleAttachment'),
  ParticleH1 = require('../components/particles/ParticleH1'),
  ParticleH2 = require('../components/particles/ParticleH2'),
  ParticleH3 = require('../components/particles/ParticleH3'),
  ParticleH4 = require('../components/particles/ParticleH4'),
  ParticleH5 = require('../components/particles/ParticleH5'),
  ParticleH6 = require('../components/particles/ParticleH6'),
  ParticleImag = require('../components/particles/ParticleImag'),
  ParticleImage = require('../components/particles/ParticleImage'),
  ParticlePreamble_intro_ = require('../components/particles/ParticlePreamble_intro_'),
  ParticlePullquote = require('../components/particles/ParticlePullquote'),
  ParticleText = require('../components/particles/ParticleText'),
  ParticleVideo = require('../components/particles/ParticleVideo')

import { Grid, Row, Col } from 'react-bootstrap'

const LayoutShortInterview = React.createClass({
  render: function() {
    return (
      <div>
        <Container componentClasses='panel-1' backgroundImage={this.props.data.fields[0].content.url}>
          <Row>
            <Col sm={5} smOffset={1}>
              <ArticleHeader>
                <ArticleCategory componentClasses='article-category' content={this.props.data.ArticleCategory.content.html} />
                <ArticleTitle componentClasses='article-title' content={this.props.data.ArticleTitle.content.html} />
              </ArticleHeader>
              <ArticleIntro>
                <HR componentClasses='hr' />
                <ParticlePreamble_intro_ componentClasses='particle-intro' content={this.props.data.fields[1].content.html} />
                <HR componentClasses='hr' />
              </ArticleIntro>
            </Col>
          </Row>
        </Container>
        <Grid>
          <ContributorList componentClasses='contributor-list'>
            <Contributor data={this.props.data.ContributorList[0]} />
            <Separator separatorType='comma' componentClasses='text-separator text-separator-comma' />
            <Contributor data={this.props.data.ContributorList[1]} />
          </ContributorList>
          <div className='pull-right'>
            <DatePublished componentClasses='date-published' content={this.props.data.DatePublished} />
          </div>
        </Grid>
        <Container componentClasses='body-text'>
          <Row>
            <Col sm={6}>
              <ParticleText componentClasses='particle-text' content={this.props.data.fields[2].content.html} />
              <ParticlePullquote componentClasses='particle-pullquote' content={this.props.data.fields[3].content.html} />
              <ParticleText componentClasses='particle-text' content={this.props.data.fields[4].content.html} />
            </Col>
            <Col sm={6}>
              <ParticleText componentClasses='particle-text' content={this.props.data.fields[5].content.html} />
            </Col>
          </Row>
      </Container>
      </div>
    )
  }
})

module.exports = LayoutShortInterview
