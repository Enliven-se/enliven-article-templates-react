import React from 'react'

import { Grid } from 'react-bootstrap'

const NavContainer = React.createClass({
  render: function() {
    var link_classes = 'buttons-link text-black'
    var navItems = this.props.navbar_items.map(function(item, i) {
      return (
        <li key={i} className='navbar-item'>
          <a className={link_classes} href={item.url}>{item.title}</a>
        </li>
      )
    })

    var burger_classes = 'navbar-hamburger hamburger-menu hamburger'
    if (this.props.color_variant == 'white') {
      burger_classes += ' hamburger-white'
    } else {
      burger_classes += ' hamburger-gold'
    }
    return (
      <section id='ext_menu-0' className='navbar navbar-freeze navbar-absolute navbar-sticky navbar-auto-collapse top'>
          <nav className='navbar-section section navbar navbar-default'>
              <div className='section-container'>
                  <div className='navbar-container navbar-header container'>
                      <div className='navbar-column navbar-column-s navbar-brand'>
                          <span className='navbar-brand-link brand brand-inline'>
                              <span className='brand-logo'>
                                  <a href='/'>
                                      <img className='navbar-brand-img brand-img' src={this.props.color_variant == "white" ? '/images/logo/logo-ffffff.png' : '/images/logo/logo.png'} alt='Enliven Logo' />
                                  </a>
                              </span>
                          </span>
                      </div>
                      <div className={burger_classes}>
                          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse">
                              <span className="sr-only">Toggle navigation</span>
                              <span className="menu-label">MENU</span>
                              <span className="icon-bar icon-bar-top"></span>
                              <span className="icon-bar icon-bar-bottom"></span>
                          </button>
                          <div className="hamburger-helper">
                              <div className="collapse navbar-collapse navbar-open container-fluid" id="navbar-collapse">
                                  <ul id="main-menu" className="menu nav navbar-nav navbar-open">
                              {navItems}
                              <li className="first last leaf menu-link-become-a-contributor"><a href="/en/become-contributor">Become a Contributor</a></li>
                          </ul>
                      </div>
                  </div>
                  <span className='hamburger-line' />
              </div>
            </div>
          </div>
        </nav>
      </section>
    )
  }
})

module.exports = NavContainer
