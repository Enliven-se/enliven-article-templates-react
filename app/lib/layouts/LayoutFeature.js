import React from 'react'
import {Row, Col} from 'react-bootstrap'
// window.React = React

import Container from '../containers/Container'
import ArticleHeader from '../containers/ArticleHeader'
import ContributorList from '../containers/ContributorList'
import HR from '../components/base/HR'
import ParticleH2 from '../components/particles/ParticleH2'
import ParticleImage from '../components/particles/ParticleImage'
import ParticleText from '../components/particles/ParticleText'

class LayoutFeature extends React.Component {
    render() {
        return (
            <div className='layout layout-feature'>
                <Container fluid classes='panel-1' backgroundImage={this.props.data.field_particles[0]}>
                    <Row>
                        <Col sm={6} smOffset={6}>
                            <ArticleHeader ArticleCategory={this.props.data.field_main_topics} ArticleTitle={this.props.data.field_headline}/>
                        </Col>
                    </Row>
                </Container>
                <Container fluid>
                    <Row>
                        <Col sm={6}>
                            <ContributorList data={this.props.data.field_contributors}/>
                        </Col>
                        <Col sm={6} className='col-right'>
                            <ParticleText value={this.props.data.field_particles[1].value} classes={this.props.data.field_particles[1].classes}/>
                        </Col>
                    </Row>
                </Container>
                <Container fluid>
                    <Row>
                        <Col sm={12}>
                            <ParticleImage url={this.props.data.field_particles[2].url} classes={this.props.data.field_particles[2].classes} credits={this.props.data.field_particles[2].credits}/>
                        </Col>
                        <Col sm={6} className='col-left'>
                            <ParticleText value={this.props.data.field_particles[3].value} classes={this.props.data.field_particles[3].classes}/>
                        </Col>
                        <Col sm={6} className='col-right'>
                            <ParticleText value={this.props.data.field_particles[4].value} classes={this.props.data.field_particles[4].classes}/>
                        </Col>
                        <Col sm={12}>
                            <ParticleImage url={this.props.data.field_particles[5].url} classes={this.props.data.field_particles[5].classes} credits={this.props.data.field_particles[5].credits}/>
                        </Col>
                        <Col sm={12}>
                            <ParticleImage url={this.props.data.field_particles[6].url} classes={this.props.data.field_particles[6].classes} credits={this.props.data.field_particles[6].credits}/>
                        </Col>
                        <Col sm={6} className='col-left'>
                            <ParticleText value={this.props.data.field_particles[7].value} classes={this.props.data.field_particles[7].classes}/>
                            <HR/>
                            <ParticleText value={this.props.data.field_particles[8].value} classes={this.props.data.field_particles[8].classes}/>
                        </Col>
                        <Col sm={6} className='col-right'>
                            <ParticleText value={this.props.data.field_particles[9].value} classes={this.props.data.field_particles[9].classes}/>
                        </Col>
                        <Col sm={12}>
                            <ParticleImage url={this.props.data.field_particles[10].url} classes={this.props.data.field_particles[10].classes} credits={this.props.data.field_particles[10].credits}/>
                        </Col>
                        <Col sm={6}>
                            <ParticleImage url={this.props.data.field_particles[11].url} classes={this.props.data.field_particles[11].classes} credits={this.props.data.field_particles[11].credits}/>
                        </Col>
                        <Col sm={6} className='col-right'>
                            <ParticleText value={this.props.data.field_particles[12].value} classes={this.props.data.field_particles[12].classes}/>
                        </Col>
                        <Col sm={12}>
                            <ParticleImage url={this.props.data.field_particles[13].url} classes={this.props.data.field_particles[13].classes} credits={this.props.data.field_particles[13].credits}/>
                        </Col>
                        <Col sm={12}>
                            <ParticleImage url={this.props.data.field_particles[14].url} classes={this.props.data.field_particles[14].classes} credits={this.props.data.field_particles[14].credits}/>
                        </Col>
                        <Col sm={6} smOffset={6} className='col-right'>
                            <ParticleText value={this.props.data.field_particles[15].value} classes={this.props.data.field_particles[15].classes}/>
                        </Col>
                        <Col sm={12}>
                            <ParticleImage url={this.props.data.field_particles[16].url} classes={this.props.data.field_particles[16].classes} credits={this.props.data.field_particles[16].credits}/>
                        </Col>
                        <Col sm={6} className='col-left'>
                            <ParticleText value={this.props.data.field_particles[17].value} classes={this.props.data.field_particles[17].classes}/>
                            <HR/>
                            <ParticleText value={this.props.data.field_particles[18].value} classes={this.props.data.field_particles[18].classes}/>
                        </Col>
                        <Col sm={6} className='col-right'>
                            <ParticleText value={this.props.data.field_particles[19].value} classes={this.props.data.field_particles[19].classes}/>
                        </Col>
                        <Col sm={12}>
                            <ParticleImage url={this.props.data.field_particles[20].url} classes={this.props.data.field_particles[20].classes} credits={this.props.data.field_particles[20].credits}/>
                        </Col>
                        <Col sm={6} className='col-left'>
                            <ParticleText value={this.props.data.field_particles[21].value} classes={this.props.data.field_particles[21].classes}/>
                        </Col>
                        <Col sm={6}>
                            <ParticleImage url={this.props.data.field_particles[22].url} classes={this.props.data.field_particles[22].classes} credits={this.props.data.field_particles[22].credits}/>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default LayoutFeature
