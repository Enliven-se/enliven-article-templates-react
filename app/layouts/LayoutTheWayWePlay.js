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
  ContributorAssociation = require('../components/contributors/ContributorAssociation'),

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

const LayoutTheWayWePlay = React.createClass({
  render: function() {
    return (
      <div>
        <Grid fluid className='panel-1'>
          <ParticleHeroImage />
          <Row>
            <Col sm={6} smOffset={6}>
              <ArticleHeader>
                <ArticleCategory />
                <ArticleTitle />
              </ArticleHeader>
            </Col>
          </Row>
        </Grid>
        <Grid>
          <Row>
            <Col sm={6}>
              <ContributorList>
                <Contributor>
                  <ContributorCredit />
                  <ContributorLink />
                </Contributor>
                <Separator separatorType='comma' />
                <Contributor>
                  <ContributorCredit />
                  <ContributorLink />
                  <ContributorAssociation />
                </Contributor>
              </ContributorList>
            </Col>
            <Col sm={6}>
              <ParticleText />
            </Col>
          </Row>
        </Grid>
        <Grid>
          <Row>
            <Col>
              <ParticleImage className='img-responsive' />
            </Col>
            <Col sm={6}>
              <ParticleText />
            </Col>
            <Col sm={6}>
              <ParticleText />
            </Col>
            <Col>
              <ParticleImage className='img-responsive' />
            </Col>
            <Col>
              <ParticleImage className='img-responsive' />
            </Col>
            <Col sm={6}>
              <ParticleH2 />
              <HR />
              <ParticleText />
            </Col>
            <Col sm={6}>
              <ParticleText />
            </Col>
            <Col>
              <ParticleImage className='img-responsive' />
            </Col>
            <Col sm={6}>
              <ParticleImage className='img-responsive' />
            </Col>
            <Col sm={6}>
              <ParticleText />
            </Col>
            <Col>
              <ParticleImage className='img-responsive' />
            </Col>
            <Col>
              <ParticleImage className='img-responsive' />
            </Col>
            <Col sm={6} smOffset={6}>
              <ParticleText />
            </Col>
            <Col>
              <ParticleImage className='img-responsive' />
            </Col>
            <Col sm={6}>
              <ParticleH2 />
              <HR />
              <ParticleText />
            </Col>
            <Col sm={6}>
              <ParticleText />
            </Col>
            <Col>
              <ParticleImage className='img-responsive' />
            </Col>
            <Col sm={6}>
              <ParticleText />
              <ParticleImage className='img-responsive' />
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
})

module.exports = LayoutTheWayWePlay
