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
                            <ArticleTeaser ParticleImage={this.props.data.list[0].node.field_particles_media[0]} ArticleCategory={this.props.data.list[0].node.field_main_topics[0]} ContributorList={this.props.data.list[0].node.field_contributors} ParticleSubheader={this.props.data.list[0].node.field_particles_h2[0]} ParticleText={this.props.data.list[0].node.field_particles_text[0]}/>
                            </Col>

                                <Col md={6} className='large-h'>
                                    <ArticleTeaser ParticleImage={this.props.data.list[1].node.field_particles_media[0]} ArticleCategory={this.props.data.list[1].node.field_main_topics[1]} ContributorList={this.props.data.list[1].node.field_contributors} ParticleSubheader={this.props.data.list[1].node.field_particles_h2[0]} ParticleText={this.props.data.list[1].node.field_particles_text[0]} />
                                    </Col>

                        <Col md={6} className='small-h'>
                            <ArticleTeaser ParticleImage={this.props.data.list[2].node.field_particles_media[0]} ArticleCategory={this.props.data.list[2].node.field_main_topics[2]} ContributorList={this.props.data.list[2].node.field_contributors} ParticleSubheader={this.props.data.list[2].node.field_particles_h2[0]} ParticleText={this.props.data.list[2].node.field_particles_text[0]}/>
                        </Col>

                        <Col md={8} className='big-picture-left'>
                            <ArticleTeaser ParticleImage={this.props.data.list[3].node.field_particles_media[0]} ArticleCategory={this.props.data.list[3].node.field_main_topics[3]} ContributorList={this.props.data.list[3].node.field_contributors} ParticleSubheader={this.props.data.list[3].node.field_particles_h2[0]} ParticleText={this.props.data.list[3].node.field_particles_text[0]}/>
                        </Col>

                        <Col md={6} className='large-h-with-intro'>
                            <ArticleTeaser ParticleImage={this.props.data.list[4].node.field_particles_media[0]} ArticleCategory={this.props.data.list[4].node.field_main_topics[4]} ContributorList={this.props.data.list[4].node.field_contributors} ParticleSubheader={this.props.data.list[4].node.field_particles_h2[0]} ParticleText={this.props.data.list[4].node.field_particles_text[0]}/>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default LayoutArticleTeasers
