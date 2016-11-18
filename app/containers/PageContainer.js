const React = window.React = require('react'),
  ParticleAttachment = require('../components/ParticleAttachment'),
  ParticleH1 = require('../components/ParticleH1'),
  ParticleH2 = require('../components/ParticleH2'),
  ParticleH3 = require('../components/ParticleH3'),
  ParticleH4 = require('../components/ParticleH4'),
  ParticleH5 = require('../components/ParticleH5'),
  ParticleH6 = require('../components/ParticleH6'),
  ParticleImag = require('../components/ParticleImag'),
  ParticleImage = require('../components/ParticleImage'),
  ParticlePreamble_intro_ = require('../components/ParticlePreamble_intro_'),
  ParticlePullquote = require('../components/ParticlePullquote'),
  ParticleText = require('../components/ParticleText'),
  ParticleVideo = require('../components/ParticleVideo')

const PageContainer = React.createClass({
  render: function() {
    return (
      <div className="container">
        <ParticleAttachment particleName='File Attachment' />
        <ParticleH1 particleName='h1' />
        <ParticleH2 particleName='h2' />
        <ParticleH3 particleName='h3' />
        <ParticleH4 particleName='h4' />
        <ParticleH5 particleName='h5' />
        <ParticleH6 particleName='h6' />
        <ParticleImag particleName='Image Slideshow' />
        <ParticleImage particleName='Image' />
        <ParticlePreamble_intro_ particleName='Intro Text' />
        <ParticlePullquote particleName='Pull Quote' />
        <ParticleText particleName='Text' />
        <ParticleVideo particleName='Video' />
      </div>
    )
  }
})

module.exports = PageContainer
