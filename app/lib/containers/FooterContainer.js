import React from 'react'

import Container from '../containers/Container'
import { Row, Col } from 'react-bootstrap'

import HR from '../components/base/HR'

class FooterContainer extends React.Component {
    navItems() {
        return this.props.navbar_items.map(function(item, i) {
          return (
            <li key={i} className='navbar-item'>
                <a className='buttons-link text-color-gold' href={item.url}>{item.title}</a>
            </li>
          )
        })
    }

  render() {
    let navbar_classes = ''

    return (
        <Container fluid id='footer' className={navbar_classes}>
            <nav className=''>
                <HR className=''/>
                <div className='section-container'>
                    <Row>
                        <Col sm={3} className=''>
                            <ul id="footer-menu" className="menu nav">
                                <li className="first leaf menu-link-become-a-contributor"><a href="//www.enliven.co/become-a-contributor/">Become a Contributor</a></li>
                                {this.navItems()}
                            </ul>
                        </Col>
                        <Col sm={6} className=''>
                            <div className='navbar-brand-link brand brand-inline brand-logo footer-logo'>
                                <a href='/'>
                                    <img className='navbar-brand-img brand-img img-responsive' src='/images/logo/logo.png' alt='Enliven Logo' />
                                </a>
                            </div>
                            <div className='copyright'>
                                <p className='para'>Copyright © 2015-2016 Nliven Technology AB.</p>
                                <p className='para'>Use of this website is subject to ENLIVEN's <a href="#">Terms &amp; Conditions</a> and <a href="#">Privacy &amp; Security Policy.</a></p>
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
