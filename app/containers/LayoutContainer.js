/**
 * LayoutContainer
 */
import React from 'react'
import NavContainer from '../containers/NavContainer'
import LayoutShort from '../layouts/LayoutShort'
import LayoutFeature from '../layouts/LayoutFeature'
import LayoutLookbook from '../layouts/LayoutLookbook'
import LayoutPictureIntensive from '../layouts/LayoutPictureIntensive'
import MockShort from '../data/MockShort'
import MockFeature from '../data/MockFeature'
import MockLookbook from '../data/MockLookbook'
import MockPictureIntensive from '../data/MockPictureIntensive'

let navbar_items = [{
  'title': 'Short',
  'className': 'short',
  'extra_classes': [''],
  'url': '/?layout=Short'
}, {
  'title': 'Lookbook',
  'className': 'lookbook',
  'extra_classes': [''],
  'url': '/?layout=Lookbook'
}, {
  'title': 'Feature',
  'className': 'feature',
  'extra_classes': [''],
  'url': '/?layout=Feature'
}, {
  'title': 'Picture Intensive',
  'className': 'PictureIntensive',
  'extra_classes': [''],
  'url': '/?layout=PictureIntensive'
}]

class LayoutContainer extends React.Component {
  render() {
    let color_variant = ''
    const switchLayout = function(props) {
      switch (props.layout) {
        case 'PictureIntensive':
          color_variant = MockPictureIntensive.color_variant
          return <LayoutPictureIntensive data={MockPictureIntensive} />
        case 'Lookbook':
          color_variant = MockLookbook.color_variant
          return <LayoutLookbook data={MockLookbook} />
        case 'Feature':
          color_variant = MockFeature.color_variant
          return <LayoutFeature data={MockFeature} />
        case 'Short':
        default:
          color_variant = MockShort.color_variant
          return <LayoutShort data={MockShort} />
      }
    }

    const layout = switchLayout({
      layout: this.props.layout
    });

    return (
      <div className='page'>
          <NavContainer navbar_items={navbar_items} color_variant={color_variant} />
          { layout }
      </div>
    )
  }
}

export default LayoutContainer
