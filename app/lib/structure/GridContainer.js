import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

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

    switchLayout (layout) {
        switch (layout) {

            // 1p text + 1-4 products + reviews
            case 'ProductReview':
            case '7bcfd1a9-8df8-42dc-acf2-9199797d9c7b':
                return LayoutProductReview

            // 1p column + short presentation about columnist
            case 'Columnist':
            case '81f0fb1c-c326-4767-9274-7b90b45b54b1':
                return LayoutColumnist

            // 1-4p picture intensive, 1-3 pictures, text (200-400w)
            case 'PictureIntensive':
            case '957795e1-3c72-401b-91d8-93e7a9725286':
                return LayoutPictureIntensive

            // 1-4p picture intensive, short text
            case 'PictureIntensive2':
            case '837c265b-90c9-47f2-9da9-a4d9e7b2da6e':
                return LayoutPictureIntensive2

            // 1p inspiration/lookbook, clearly formatted sections (25-100w)
            // 1p inspiration/lookbook, no clearly formatted sections (25-100w)
            case 'Lookbook':
            case '74c76273-fd65-4daa-89d5-4e1e7abc29fe':
            case '370c4a8e-5338-4aa8-b193-b52b35d2b0ee':
                return LayoutLookbook

            // Feature
            case 'Feature':
            case '5e109d73-0d26-471d-8026-5301b014c2ba':
                return LayoutFeature

            //	1p short profile/interview
            case 'Short':
            case '0b80bd2e-8279-45ef-a6ee-e3d000e45d22':
                return LayoutShort

            case 'ArticleTeasers':
                return LayoutArticleTeasers

            case 'Grid':
                return GridLayout

            default:
                return LayoutFront
        }
    }

    render() {
        const nodelist = this.props.data.articles
        // console.log('render:nodelist', nodelist)

        let layout = this.props.layout
        if (!layout && nodelist && nodelist.field_layout) {
            layout = nodelist.field_layout.uuid
        }

        console.log('render:layout', layout)
        const Widget = this.switchLayout(layout)

        // render with or without nav & footer
        if (this.props.chrome) {
            if (nodelist) {
                return (
                    <LayoutContainer layout={layout} navbar_items={this.props.navbar_items} color_variant={nodelist.color_variant} is_front={!!nodelist.is_front} sticky={!nodelist.is_front}>
                        <Widget data={nodelist}/>
                    </LayoutContainer>
                )
            }

            // not initialized
            return (
                <LayoutContainer layout={layout} navbar_items={this.props.navbar_items}
                    is_front={true} sticky={false}/>
            )
        }

        return <Widget data={nodelist}/>
    }
}

// load query stored in GraphQL include file
// @FIXME - GQL should be compiled before runtime
let queryFrontPageArticles = fs.readFileSync(path.join(__dirname, "app/lib/queries/queryFrontPageArticles.graphql"), "utf8");
queryFrontPageArticles = gql`${queryFrontPageArticles}`;

const GridContainerWithData = graphql(queryFrontPageArticles)(GridContainer)

export default GridContainerWithData
