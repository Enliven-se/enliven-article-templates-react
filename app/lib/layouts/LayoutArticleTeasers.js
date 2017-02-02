import React from 'react'
import {Row, Col} from 'react-bootstrap'

import Container from '../containers/Container'
import ArticleTeaser from '../containers/ArticleTeaser'

class LayoutArticleTeasers extends React.Component {
    render() {
        return (
            <div className='layout layout-article-teasers'>
                <Container fluid classes='panel-1'>
                    <Row>
                        <Col md={6} className='picture-left'>
                            <ArticleTeaser ParticleImage={this.props.data.field_particles[0].ParticleImage} ArticleCategory={this.props.data.field_particles[0].field_main_topics[0]} ContributorList={this.props.data.field_particles[0].field_contributors} ParticleH2={this.props.data.field_particles[0].ParticleH2} ParticleText={this.props.data.field_particles_text[0].ParticleText}/>
                        </Col>

                        <Col md={6} className='large-h'>
                            <ArticleTeaser ParticleImage={this.props.data.field_particles[1].ParticleImage} ArticleCategory={this.props.data.field_particles[1].field_main_topics[0]} ContributorList={this.props.data.field_particles[1].field_contributors} ParticleH2={this.props.data.field_particles[1].ParticleH2} ParticleText={this.props.data.field_particles_text[1].ParticleText}/>
                        </Col>

                        <Col md={6} className='small-h'>
                            <ArticleTeaser ParticleImage={this.props.data.field_particles[2].ParticleImage} ArticleCategory={this.props.data.field_particles[2].field_main_topics[0]} ContributorList={this.props.data.field_particles[2].field_contributors} ParticleH2={this.props.data.field_particles[2].ParticleH2} ParticleText={this.props.data.field_particles_text[2].ParticleText}/>
                        </Col>

                        <Col md={8} className='big-picture-left'>
                            <ArticleTeaser ParticleImage={this.props.data.field_particles[3].ParticleImage} ArticleCategory={this.props.data.field_particles[3].field_main_topics[0]} ContributorList={this.props.data.field_particles[3].field_contributors} ParticleH2={this.props.data.field_particles[3].ParticleH2} ParticleText={this.props.data.field_particles_text[3].ParticleText}/>
                        </Col>

                        <Col md={6} className='large-h-with-intro'>
                            <ArticleTeaser ParticleImage={this.props.data.field_particles[4].ParticleImage} ArticleCategory={this.props.data.field_particles[4].field_main_topics[0]} ContributorList={this.props.data.field_particles[4].field_contributors} ParticleH2={this.props.data.field_particles[4].ParticleH2} ParticleText={this.props.data.field_particles_text[4].ParticleText}/>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default LayoutArticleTeasers
