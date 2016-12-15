import React from 'react'

import Container from '../containers/Container'
import { Row, Col } from 'react-bootstrap'

import HR from '../components/base/HR'

class FooterContainer extends React.Component {
    navItems() {
        let link_classes = 'buttons-link text-black'
        return this.props.navbar_items.map(function(item, i) {
          return (
            <li key={i} className='navbar-item'>
                <a className={link_classes} href={item.url}>{item.title}</a>
            </li>
          )
        })
    }

  render() {
    let navbar_classes = 'navbar navbar-freeze'

    return (
        <Container fluid id='footer' className={navbar_classes}>
            <nav className=''>
                <HR className=''/>
                <div className='section-container'>
                    <Row>
                        <Col sm={3} className=''>
                        </Col>
                        <Col sm={6} className=''>
                            <div className='navbar-brand-link brand brand-inline'>
                                <span className='brand-logo'>
                                    <a href='/'>
                                        <img className='navbar-brand-img brand-img img-responsive' src='/images/logo/logo.png' alt='Enliven Logo' />
                                    </a>
                                </span>
                            </div>
                            <div className=''>
                                <p>Copyright © 2015-2016 Nliven Technology AB.</p>
                                <p>Use of this website is subject to ENLIVEN's Terms & Conditions and Privacy & Security Policy.</p>
                            </div>
                        </Col>
                        <Col sm={3} className=''>
                        </Col>
                    </Row>
                </div>
            </nav>
        </Container>
    )
  }
}

export default FooterContainer
