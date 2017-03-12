import React from 'react'

import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import jQuery from 'jquery'

// containers
import LayoutContainer from '../structure/LayoutContainer'
import GridLayout from '../containers/GridLayout'

// layouts
import LayoutFront from '../layouts/LayoutFront'
import LayoutColumnist from '../layouts/LayoutColumnist'
import LayoutShort from '../layouts/LayoutShort'
import LayoutFeature from '../layouts/LayoutFeature'
import LayoutLookbook from '../layouts/LayoutLookbook'
import LayoutPictureIntensive from '../layouts/LayoutPictureIntensive'
import LayoutPictureIntensive2 from '../layouts/LayoutPictureIntensive2'
import LayoutProductReview from '../layouts/LayoutProductReview'
import LayoutArticleTeasers from '../layouts/LayoutArticleTeasers'

const fs = require('fs');
const path = require('path');


class GridContainer extends React.Component {
    static propTypes = {
      data: React.PropTypes.shape({
        loading: React.PropTypes.bool,
        error: React.PropTypes.object,
        nodelist: React.PropTypes.array,
      }).isRequired,
    }

    getData(layout) {
        let data_url = ''
        switch (layout) {
            case 'ProductReview':
                data_url = '/data/MockProductReview.json';
                break;
            case 'PictureIntensive':
                data_url = '/data/MockPictureIntensive.json';
                break;
            case 'Columnist':
                data_url = '/data/MockColumnist.json';
                break;
            case 'PictureIntensive2':
                data_url = '/data/MockPictureIntensive2.json';
                break;
            case 'Lookbook':
                data_url = '/data/MockLookbook.json';
                break;
            case 'Feature':
                data_url = '/data/MockFeature.json';
                break;
            case 'Short':
                data_url = '/data/MockShort.json';
                break;
            case 'ArticleTeasers':
                data_url = '/data/MockArticleTeasers.json';
                break;
            case 'Grid':
            default:
                data_url = '/data/MockFront.json';
                break;
        }

        jQuery.ajax({
            url: data_url,
            dataType: 'json',
            success: function(data) {
                // console.log(layout, data_url, data);
                this.setState({data: data});
            }.bind(this)
        }).done(function(response, textStatus, jqXHR) {
            // console.log("response:", response);
            // console.log("textStatus:", textStatus);
        }).fail(function(jqXHR, textStatus, errorThrown) {
            console.log("AJAX error: " + textStatus + ' : ' + errorThrown);
        });
    }

    constructor(props) {
        super(props);
        this.state = {
            data: {
                color_variant: false,
                is_front: false,
                field_layout: {uuid:''}
            }
        }
    }

    // componentWillMount () {
    // }

    componentDidMount() {
        if (typeof init_drupal_core_settings === 'function') {
            init_drupal_core_settings()
            console.log('got settings')
            const data_url = this.getDataURL()

            if (typeof Drupal.settings.react_content != 'undefined'){
                console.log('loading data from page', Drupal.settings.react_content)

                this.setState({data: Drupal.settings.react_content});

            } else if (data_url) {
                console.log('loading data from url', data_url)

                jQuery.ajax({
                    url: data_url,
                    dataType: 'json',
                    success: function(data) {
                        this.setState({data: data});
                    }.bind(this)
                }).done(function(response, textStatus, jqXHR) {
                    // console.log("response:", response);
                    // console.log("textStatus:", textStatus);
                }).fail(function(jqXHR, textStatus, errorThrown) {
                    console.log("AJAX error: " + textStatus + ' : ' + errorThrown);
                });
            }
        } else {
            this.getData(this.props.layout)
        }
    }

    getDataURL() {
        if (Drupal.settings.currentPath === 'front') {
            return `/node.json?type=article&load-entity-refs`
        } else if ((/^node\/\d+$/g).test(Drupal.settings.currentPath)) {
            return `/${Drupal.settings.currentPath}.json?load-entity-refs`
        } else {
            return null
        }
    }

    render() {
        const nodelist = this.props.data.articles

        let layout = this.props.layout

        if (!layout && nodelist && nodelist.field_layout) {
            layout = nodelist.field_layout.uuid
        } else if (typeof Drupal != 'undefined') {
            // layout = 'ArticleTeasers'
        }

        let Widget = {}

        console.log('render layout', layout, nodelist)

        switch (layout) {

            case 'ProductReview':
            case '7bcfd1a9-8df8-42dc-acf2-9199797d9c7b':
                // 1p text + 1-4 products + reviews
                Widget = LayoutProductReview
                break;
            case 'Columnist':
            case '81f0fb1c-c326-4767-9274-7b90b45b54b1':
                // 1p column + short presentation about columnist
                Widget = LayoutColumnist
                break;
            case 'PictureIntensive':
            case '957795e1-3c72-401b-91d8-93e7a9725286':
                // 1-4p picture intensive, 1-3 pictures, text (200-400w)
                Widget = LayoutPictureIntensive
                break;
            case 'PictureIntensive2':
            case '837c265b-90c9-47f2-9da9-a4d9e7b2da6e':
                // 1-4p picture intensive, short text
                Widget = LayoutPictureIntensive2
                break;
            case 'Lookbook':
            case '74c76273-fd65-4daa-89d5-4e1e7abc29fe':
            case '370c4a8e-5338-4aa8-b193-b52b35d2b0ee':
                // 1p inspiration/lookbook, clearly formatted sections (25-100w)
                // 1p inspiration/lookbook, no clearly formatted sections (25-100w)
                Widget = LayoutLookbook
                break;
            case 'Feature':
            case '5e109d73-0d26-471d-8026-5301b014c2ba':
                // Feature
                Widget = LayoutFeature
                break;
            case 'Short':
            case '0b80bd2e-8279-45ef-a6ee-e3d000e45d22':
                //	1p short profile/interview
                Widget = LayoutShort
                break;
            case 'ArticleTeasers':
                Widget = LayoutArticleTeasers
                break;
            case 'Grid':
                Widget = GridLayout
                break;
            default:
                Widget = LayoutFront
        }

        // render with or without nav & footer
        // console.log('rendering', this.state)
        if (nodelist) {
            if (this.props.chrome) {
                return (
                    <LayoutContainer layout={layout} navbar_items={this.props.navbar_items} color_variant={nodelist.color_variant} is_front={!!nodelist.is_front} sticky={!nodelist.is_front}>
                        <Widget data={nodelist}/>
                    </LayoutContainer>
                )
            }

            return <Widget data={nodelist}/>

        }

        // not initialized
        return (
            <LayoutContainer layout={layout} navbar_items={this.props.navbar_items}
                is_front={true} sticky={false}/>
        )
    }
}

// load query stored in GraphQL include file
// @FIXME - GQL should be compiled before runtime
let queryFrontPageArticles = fs.readFileSync(path.join(__dirname, "app/lib/queries/queryFrontPageArticles.graphql"), "utf8");
queryFrontPageArticles = gql`${queryFrontPageArticles}`;

const GridContainerWithData = graphql(queryFrontPageArticles)(GridContainer)

export default GridContainerWithData
