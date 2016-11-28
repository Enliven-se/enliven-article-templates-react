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

    return (
      <section id='ext_menu-0' className='navbar navbar-freeze navbar-absolute navbar-sticky navbar-auto-collapse top'>
        <nav className='navbar-section section navbar navbar-default'>
          <div className='section-container'>
            <div className='navbar-container navbar-header container'>
              <div className='navbar-column navbar-column-s navbar-brand'>
                <span className='navbar-brand-link brand brand-inline'>
                  <span className='brand-logo'>
                    <a href='/'>
                      <img className='navbar-brand-img brand-img' src={this.props.logo_variant == "white"? '/images/logo/logo-ffffff.png':'/images/logo/logo.png'} alt='Enliven Logo' />
                    </a>
                  </span>
                </span>
              </div>
              <div className='navbar-hamburger hamburger-menu hamburger'>

                        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse">
                          <span class="sr-only">Toggle navigation</span>
                          <span class="menu-label">MENU</span>
                          <span class="icon-bar icon-bar-top"></span>
                          <span class="icon-bar icon-bar-bottom"></span>
                        </button>
                        <div class="hamburger-helper">
                          <div class="collapse navbar-collapse navbar-open container-fluid" id="navbar-collapse">
                                     <ul id="main-menu" class="menu nav navbar-nav navbar-open">
                              <li class="first last leaf menu-link-become-a-contributor"><a href="/en/become-contributor">Become a Contributor</a></li>
                            </ul>
                          </div>
                        </div>
                <span className='hamburger-line' />
              </div>
              <div className='navbar-column navbar-menu'>
                <nav className='navbar-menu-box navbar-menu-box-inline-right'>
                  <div className='navbar-column'>
                    <ul className='navbar-items navbar-items-right float-left buttons buttons-freeze buttons-right btn-decorator buttons-active buttons-only-links nav navbar-nav navbar-right'>
                      {navItems}
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </nav>
      </section>
    )
  }
})

module.exports = NavContainer
