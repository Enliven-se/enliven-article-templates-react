const React = window.React = require('react'),
  ContributorContainer = require('../containers/ContributorContainer'),
  DateContainer = require('../containers/DateContainer'),
  HeaderContainer = require('../containers/HeaderContainer'),
  BodyContainer = require('../containers/BodyContainer'),
  MetaContainer = require('../containers/MetaContainer'),

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

const LayoutTestLayout = React.createClass({
  render: function() {
    return (
      <div>
        <HeaderContainer>
          <Grid fluid>
            <Row>
              <ParticleImage particleName='Image' imageURL={this.props.data.header.images[0].imageURL} />
            </Row>
          </Grid>
        </HeaderContainer>
        <MetaContainer>
          <Grid>
            <Row>
              <Col md={6}>
                <ContributorContainer particleName='ContributorContainer' componentClasses='text-bold'>
                  <span>WRITTEN BY <a href='#'>PETER LARSEN</a></span>
                  <span>PHOTOGRAPHER <a href='#'>ANNA SIDOROVA</a></span>
                </ContributorContainer>
              </Col>
              <Col md={6}>
                <DateContainer particleName='DateContainer' />
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <ParticleText particleName='Text' />
                <ParticlePullquote particleName='Pull Quote' />
                <ParticleText particleName='Text' />
              </Col>
              <Col md={6}>
                <ParticleText particleName='Text' />
              </Col>
            </Row>
          </Grid>
        </MetaContainer>
      </div>
    )
  }
})

module.exports = LayoutTestLayout
