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
                            <ArticleTeaser ParticleImage={this.props.data.nodes[0].ParticleImage} ArticleCategory={this.props.data.nodes[0].field_main_topics[0]} ContributorList={this.props.data.nodes[0].field_contributors} ParticleH2={this.props.data.nodes[0].ParticleH2} ParticleText={this.props.data.nodes[0].ParticleText}/>
                        </Col>

                        <Col md={6} className='large-h'>
                            <ArticleTeaser ParticleImage={this.props.data.nodes[1].ParticleImage} ArticleCategory={this.props.data.nodes[1].field_main_topics[1]} ContributorList={this.props.data.nodes[1].field_contributors} ParticleH2={this.props.data.nodes[1].ParticleH2} ParticleText={this.props.data.nodes[1].ParticleText}/>
                        </Col>

                        <Col md={6} className='small-h'>
                            <ArticleTeaser ParticleImage={this.props.data.nodes[2].ParticleImage} ArticleCategory={this.props.data.nodes[2].field_main_topics[2]} ContributorList={this.props.data.nodes[2].field_contributors} ParticleH2={this.props.data.nodes[2].ParticleH2} ParticleText={this.props.data.nodes[2].ParticleText}/>
                        </Col>

                        <Col md={8} className='big-picture-left'>
                            <ArticleTeaser ParticleImage={this.props.data.nodes[3].ParticleImage} ArticleCategory={this.props.data.nodes[3].field_main_topics[3]} ContributorList={this.props.data.nodes[3].field_contributors} ParticleH2={this.props.data.nodes[3].ParticleH2} ParticleText={this.props.data.nodes[3].ParticleText}/>
                        </Col>

                        <Col md={6} className='large-h-with-intro'>
                            <ArticleTeaser ParticleImage={this.props.data.nodes[4].ParticleImage} ArticleCategory={this.props.data.nodes[4].field_main_topics[4]} ContributorList={this.props.data.nodes[4].field_contributors} ParticleH2={this.props.data.nodes[4].ParticleH2} ParticleText={this.props.data.nodes[4].ParticleText}/>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default LayoutArticleTeasers
