const React = window.React = require('react'),
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
  ParticleVideo = require('../components/particles/ParticleVideo'),

  ParticleHeroImage = require('../components/particles/ParticleHeroImage')

import { Grid, Row, Col } from 'react-bootstrap'

const LayoutShortInterview = React.createClass({
  render: function() {
    return (
      <div>
        <Grid fluid className='panel-1'>
          <ParticleHeroImage imageURL={this.props.data.fields[0].content.url} componentClasses='' />
          <Row>
            <Col sm={5} smOffset={1}>
              <ArticleHeader>
                <ArticleCategory componentClasses='' />
                <ArticleTitle componentClasses='' />
              </ArticleHeader>
              <ArticleIntro>
                <HR componentClasses='' />
                <ParticlePreamble_intro_ componentClasses='' />
                <HR componentClasses='' />
              </ArticleIntro>
            </Col>
          </Row>
        </Grid>
        <Grid>
          <ContributorList>
            <Contributor>
              <Avatar componentClasses='' />
              <ContributorCredit componentClasses='' />
              <ContributorLink componentClasses='' />
            </Contributor>
            <Separator separatorType='comma' componentClasses='' />
            <Contributor>
              <Avatar componentClasses='' />
              <ContributorCredit componentClasses='' />
              <ContributorLink componentClasses='' />
            </Contributor>
          </ContributorList>
          <div className='pull-right'>
            <DatePublished componentClasses='' />
          </div>
        </Grid>
        <Grid>
          <Row>
            <Col sm={6}>
              <ParticleText componentClasses='' />
              <ParticlePullquote componentClasses='' />
              <ParticleText componentClasses='' />
            </Col>
            <Col sm={6}>
              <ParticleText componentClasses='' />
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
})

module.exports = LayoutShortInterview
