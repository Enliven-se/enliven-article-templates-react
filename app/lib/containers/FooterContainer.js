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
      <Container fluid className={navbar_classes}>
          <nav className=''>
              <HR className=''/>
              <div id='footer' className='section-container'>
                  <Row>
                      <Col sm={4} className=''>
                          <ul id="footer-menu" className="menu nav">
                              <li className="first leaf menu-link-become-a-contributor"><a href="//www.enliven.co/become-a-contributor/">Become a Contributor</a></li>
                              {this.navItems()}
                          </ul>
                      </Col>
                      <Col sm={4} className=''>
                          <div className='navbar-brand-link brand brand-inline brand-logo footer-logo'>
                              <a href='/'>
                                  <img className='navbar-brand-img brand-img img-responsive' src='/images/logo/logo.png' alt='Enliven Logo' />
                              </a>
                          </div>
                          <div className='copyright'>
                              <p className='para'>Copyright © 2015-2016 Nliven Technology AB.</p>
                              <p className='para'>Use of this website is subject to ENLIVEN's <a href="#">Terms & Conditions</a> and <a href="#">Privacy & Security Policy.</a></p>
                          </div>
                      </Col>
                      <Col sm={4} className='subscribe-goodies'>
                          <Container fluid>
                              <Row  className='subscribe-goodies-row-1 row-flex'>
                                  <Col className='buttons'>
                                      <button className="button-white" type="button">email address</button>
                                  </Col>
                                  <Col className='buttons'>
                                      <button className="button-gold" type="button">Subscribe to Life</button>
                                  </Col>
                              </Row>
                              <Row  className='subscribe-goodies-row-2 row-flex'>
                    <Col sm={12} className='soc-med-icons text-right'>
                      <a href="https://www.facebook.com/Enliven.co/?fref=ts"><i className="fa fa-facebook-official"></i></a>
                      <a href="https://www.instagram.com/enliven.co/"><i className="fa fa-instagram"></i></a>
                      <a href="https://www.linkedin.com/company/15156624?trk=vsrp_companies_cluster_name&trkInfo=VSRPsearchId%3A3452694631482143176214%2CVSRPtargetId%3A15156624%2CVSRPcmpt%3Acompanies_cluster"><i className="fa fa-linkedin"></i></a>
                      <a href="https://twitter.com/Enliven_co"><i className="fa fa-twitter"></i></a>
                    </Col>
                  </Row>
                </Container>
              </Col>
            </Row>
          </div>
        </nav>
      </Container>
    )
  }
}

export default FooterContainer
