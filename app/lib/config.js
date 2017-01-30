import React from 'react'
// import ReactDOM from 'react-dom';

// containers
import LayoutContainer from '../lib/containers/LayoutContainer';
import GridLayout from '../lib/containers/GridLayout'

// layouts
import LayoutFront from '../lib/layouts/LayoutFront'
import LayoutColumnist from '../lib/layouts/LayoutColumnist'
import LayoutShort from '../lib/layouts/LayoutShort'
import LayoutFeature from '../lib/layouts/LayoutFeature'
import LayoutLookbook from '../lib/layouts/LayoutLookbook'
import LayoutPictureIntensive from '../lib/layouts/LayoutPictureIntensive'
import LayoutPictureIntensive2 from '../lib/layouts/LayoutPictureIntensive2'
import LayoutProductReview from '../lib/layouts/LayoutProductReview'
import LayoutArticleTeasers from '../lib/layouts/LayoutArticleTeasers'

const getData = function(props) {
    let mock = {}

    // @FIXME
    if (typeof Drupal != 'undefined' && typeof Drupal.settings != 'undefined') {
        jQuery.ajax({
          url: '/' + Drupal.settings.currentPath + '.json',
        }).done(function(response, textStatus, jqXHR) {
          console.log("response:", response);
          console.log("textStatus:", textStatus);
        })
        .fail(function(jqXHR, textStatus, errorThrown) {
          console.log("AJAX error: " + textStatus + ' : ' + errorThrown);
        });

        return mock
    }

    switch (props.layout) {
        case 'ProductReview':
            mock = require('../data/MockProductReview.json');
            break;
        case 'PictureIntensive':
            mock = require('../data/MockPictureIntensive.json');
            break;
        case 'Columnist':
            mock = require('../data/MockColumnist.json');
            break;
        case 'PictureIntensive2':
            mock = require('../data/MockPictureIntensive2.json');
            break;
        case 'Lookbook':
            mock = require('../data/MockLookbook.json');
            break;
        case 'Feature':
            mock = require('../data/MockFeature.json');
            break;
        case 'Short':
            mock = require('../data/MockShort.json');
            break;
        case 'ArticleTeasers':
            mock = require('../data/MockArticleTeasers.json');
            break;
        case 'Grid':
            mock = require('../data/MockFront.json');
            break;
        default:
            mock = require('../data/MockFront.json')
        }

    return mock
}

const switchLayout = function(props) {
    let ChosenLayout = {},
        mock = getData(props)

    switch (props.layout) {
        case 'ProductReview':
            ChosenLayout = LayoutProductReview
            break;
        case 'PictureIntensive':
            ChosenLayout = LayoutPictureIntensive
            break;
        case 'Columnist':
            ChosenLayout = LayoutColumnist
            break;
        case 'PictureIntensive2':
            ChosenLayout = LayoutPictureIntensive2
            break;
        case 'Lookbook':
            ChosenLayout = LayoutLookbook
            break;
        case 'Feature':
            ChosenLayout = LayoutFeature
            break;
        case 'Short':
            ChosenLayout = LayoutShort
            break;
        case 'ArticleTeasers':
            ChosenLayout = LayoutArticleTeasers
            break;
        case 'Grid':
            ChosenLayout = GridLayout
            break;
        default:
            ChosenLayout = LayoutFront
    }

    if (props.chrome) {
        return (
            <LayoutContainer layout={props.layout} navbar_items={props.data.navbar_items} color_variant={mock.color_variant} sticky={!mock.is_front} is_front={!!mock.is_front}>
                <ChosenLayout data={mock}/>
            </LayoutContainer>
        )
    }

    return (
        <ChosenLayout data={mock}/>
    )
}

function config({chrome = true}) {
    const url = require('url')
    const urlParams = url.parse(location.href, true)
    const layout = urlParams.query['layout']
    let data = {}

    if (chrome) {
        data = require('./../includes/data.json')
    }

    return switchLayout({layout, data, chrome})
}

export default config
