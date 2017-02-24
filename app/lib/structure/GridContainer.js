import React from 'react'

// containers
import LayoutContainer from '../structure/LayoutContainer';
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

class GridContainer extends React.Component {
    getData(layout) {
        switch (layout) {
            case 'ProductReview':
                return require('../../data/MockProductReview.json');
            case 'PictureIntensive':
                return require('../../data/MockPictureIntensive.json');
            case 'Columnist':
                return require('../../data/MockColumnist.json');
            case 'PictureIntensive2':
                return require('../../data/MockPictureIntensive2.json');
            case 'Lookbook':
                return require('../../data/MockLookbook.json');
            case 'Feature':
                return require('../../data/MockFeature.json');
            case 'Short':
                return require('../../data/MockShort.json');
            case 'ArticleTeasers':
                return require('../../data/MockArticleTeasers.json');
            case 'Grid':
                return require('../../data/MockFront.json');
            default:
                return require('../../data/MockFront.json')
        }
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
        if (typeof Drupal != 'undefined' && typeof Drupal.settings != 'undefined') {
            const node_url = this.getDataURL()

            if (typeof Drupal.settings.react_content != 'undefined'){
                console.log('loading data from page', Drupal.settings.react_content)

                this.setState({data: Drupal.settings.react_content});

            } else if (node_url) {
                console.log('loading data from url', node_url)

                jQuery.ajax({
                    url: node_url,
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
            } else {
            }
        } else {
            this.setState({
                data: this.getData(this.props.layout)
            });
        }
    }

    getDataURL() {
        switch (Drupal.settings.currentPath.split('/').shift()) {
            case 'front':
                return `/node.json?type=article&load-entity-refs`
            case 'node':
                return `/${Drupal.settings.currentPath}.json?load-entity-refs`
            default:
                null
        }
    }

    render() {
        const has_data = this.state.data.field_particles || this.state.data.list
        let layout = this.props.layout

        if (!layout && this.state.data.field_layout) {
            layout = this.state.data.field_layout.uuid
        } else if (typeof Drupal != 'undefined') {
            // layout = 'ArticleTeasers'
        }

        let Widget = {}

        console.log('layout', layout)

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
        if (this.props.chrome) {
            return (
                <LayoutContainer layout={layout} navbar_items={this.props.navbar_items} color_variant={this.state.data.color_variant} is_front={!!this.state.data.is_front} sticky={!this.state.data.is_front}>
                    { has_data
                        ? <Widget data={this.state.data}/>
                    : ''}
                </LayoutContainer>
            )
        }

        if ( has_data ) {
            return <Widget data={this.state.data}/>
        }

        return null
    }
}

export default GridContainer
