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
                is_front: false
            }
        }
    }

    // componentWillMount () {
    // }

    componentDidMount() {
        if (typeof Drupal != 'undefined' && typeof Drupal.settings != 'undefined') {
            jQuery.ajax({
                url: '/' + Drupal.settings.currentPath + '.json',
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
            this.setState({
                data: this.getData(this.props.layout)
            });
        }
    }

    render() {
        let Widget = {}
        switch (this.props.layout) {
            case 'ProductReview':
                Widget = LayoutProductReview
                break;
            case 'PictureIntensive':
                Widget = LayoutPictureIntensive
                break;
            case 'Columnist':
                Widget = LayoutColumnist
                break;
            case 'PictureIntensive2':
                Widget = LayoutPictureIntensive2
                break;
            case 'Lookbook':
                Widget = LayoutLookbook
                break;
            case 'Feature':
                Widget = LayoutFeature
                break;
            case 'Short':
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
                <LayoutContainer layout={this.props.layout} navbar_items={this.props.navbar_items} color_variant={this.state.data.color_variant} is_front={!!this.state.data.is_front} sticky={!this.state.data.is_front}>
                    {this.state.data.field_particles
                        ? <Widget data={this.state.data}/>
                        : ''}
                </LayoutContainer>
            )
        }

        if (this.state.data.field_particles) {
            return <Widget data={this.state.data}/>
        }

        return <div>Loading data…</div>
    }
}

export default GridContainer
