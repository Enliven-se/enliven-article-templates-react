const React = window.React = require('react'),
  ContributorContainer = require('../containers/ContributorContainer'),
  DateContainer = require('../containers/DateContainer'),
  HeaderContainer = require('../containers/HeaderContainer'),
  ArticleHeader = require('../containers/ArticleHeader'),
  BodyContainer = require('../containers/BodyContainer'),
  MetaContainer = require('../containers/MetaContainer'),
  PhotoCredits = require('../containers/PhotoCredits'),


  ArticleCategory = require('../components/base/ArticleCategory'),
  ArticleTitle = require('../components/base/ArticleTitle'),
  ArticleIntro = require('../components/base/ArticleIntro'),
  Avatar = require('../components/base/Avatar'),
  HR = require('../components/base/HR'),
  Icon = require('../components/base/Icon'),
  Link = require('../components/base/Link'),
  DatePublished = require('../components/base/DatePublished'),
  Separator = require('../components/base/Separator'),

  ContributorList = require('../components/contributors/ContributorList'),
  Contributor = require('../components/contributors/Contributor'),
  ContributorCredit = require('../components/contributors/ContributorCredit'),
  CharityCredit = require('../components/contributors/CharityCredit'),
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

const LayoutLookBook = React.createClass({
  render: function() {
    return (
      <div>
        <Grid fluid>
          <Row>
            <Col sm={6}>
              <ArticleHeader>
                <ArticleCategory />
                <CharityCredit>
                  <Icon />
                  <Link />
                </CharityCredit>
              </ArticleHeader>
              <ArticleIntro>
                <ArticleTitle />
                <HR />
                <ParticlePreamble_intro_ />
                <HR />
              </ArticleIntro>
              <ContributorList>
                <Contributor>
                  <Avatar />
                  <ContributorCredit />
                  <ContributorLink />
                </Contributor>
                <Separator separatorType='comma' />
                <Contributor>
                  <Avatar />
                  <ContributorCredit />
                  <ContributorLink />
                </Contributor>
                <Separator separatorType='comma' />
                <Contributor>
                  <Avatar />
                  <ContributorCredit />
                  <ContributorLink />
                </Contributor>
              </ContributorList>
              <DatePublished />
            </Col>
            <Col sm={6}>
              <ParticleImage>
                <PhotoCredits />
              </ParticleImage>
            </Col>
            <Col sm={6}>
              <ParticleImage />
            </Col>
            <Col sm={6}>
              <ParticleImage />
            </Col>
            <Col sm={6}>
              <ParticleImage>
                <PhotoCredits />
              </ParticleImage>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
})

module.exports = LayoutLookBook
