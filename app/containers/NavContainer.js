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
                      <img className='navbar-brand-img brand-img' src='//www.enliven.co/images/enliven-logo.png' alt='Enliven Logo' />
                    </a>
                  </span>
                </span>
              </div>
              <div className='navbar-hamburger hamburger'>
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
