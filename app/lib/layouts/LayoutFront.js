import React from 'react'
import {Row, Col} from 'react-bootstrap'

import Container from '../containers/Container'
import HR from '../components/base/HR'


class LayoutFront extends React.Component {
    render() {
        return (
            <div className='layout layout-front'>
                <Container fluid classes='panel-1'>
                    <Row>
                        <Col sm={12} className=''>
                            <h2 className='text-color-gold'>New On Enliven</h2>
                            <HR className=''/>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={3} className='dummy'>
                            <h2>London Fashion Week 2016</h2>
                        </Col>
                        <Col sm={6} className='dummy'>
                            <h2>Traveling to the Heart of Stockholm</h2>
                        </Col>
                        <Col sm={3} className='dummy'>
                            <h2>AD SPACE</h2>
                        </Col>
                    </Row>
                </Container>
                <Container fluid>
                    <Row>
                        <Col sm={6} className='dummy'>
                            <h2>Traveling to the Heart of Stockholm</h2>
                        </Col>
                        <Col sm={6} className='dummy'>
                            <h2>Traveling to the Heart of Stockholm</h2>
                        </Col>
                    </Row>
                </Container>
                <Container fluid>
                    <Row>
                        <Col sm={4} className='dummy'>
                            <h2>Women’s Health</h2>
                        </Col>
                        <Col sm={4} className='dummy'>
                            <h2>Top Articles</h2>
                        </Col>
                        <Col sm={4} className='dummy'>
                            <h2>Interior Design</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={4} className='dummy'>
                            <h2>Women’s Health</h2>
                        </Col>
                        <Col sm={4} className='dummy'>
                            <h2>Top Articles</h2>
                        </Col>
                        <Col sm={4} className='dummy'>
                            <h2>Interior Design</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12} className='dummy'>
                            <h2>OUR CONTRIBURORS</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={3} className='dummy'>
                            <h2>Peter Larsen</h2>
                        </Col>
                        <Col sm={3} className='dummy'>
                            <h2>Peter Larsen</h2>
                        </Col>
                        <Col sm={3} className='dummy'>
                            <h2>Peter Larsen</h2>
                        </Col>
                        <Col sm={3} className='dummy'>
                            <h2>Peter Larsen</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={3} className='dummy'>
                            <h2>Peter Larsen</h2>
                        </Col>
                        <Col sm={3} className='dummy'>
                            <h2>Peter Larsen</h2>
                        </Col>
                        <Col sm={3} className='dummy'>
                            <h2>Peter Larsen</h2>
                        </Col>
                        <Col sm={3} className='dummy'>
                            <h2>Peter Larsen</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12} className='dummy'>
                            <h2>WE RECOMMEND</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={6} className='dummy'>
                            <h2>Traveling to the Heart of Stockholm</h2>
                        </Col>
                        <Col sm={6} className='dummy'>
                            <h2>Traveling to the Heart of Stockholm</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={10} className='dummy'>
                            <h2>Traveling to the Heart of Stockholm</h2>
                        </Col>
                        <Col sm={2} className='dummy'>
                            <h2>London Fashion Week 2016</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12} className='dummy'>
                            <h2>FOOTER</h2>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default LayoutFront
