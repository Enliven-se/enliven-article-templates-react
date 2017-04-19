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
const url = require('url')
const urlParams = url.parse(location.href, true)

let layout = urlParams.query['layout']

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
        let data = nodelist
        let particles = {images: [], pullquote: [], text: [], h2: [], intro: []}

        if (data && data.length == 1) {
            // individual article
            this.state.data.is_front = false
            data = data[0]

            // filter particle data into convenience variables
            particles.images = data.field_particles.filter(particle => particle.bundle == 'image');
            particles.pullquote = data.field_particles.filter(particle => particle.bundle == 'pullquote');
            particles.h2 = data.field_particles.filter(particle => particle.bundle == 'h2')
            particles.text = data.field_particles.filter(particle => particle.bundle == 'text')
            // particles.intro = particles.text.shift()
            console.log('GridContainer.render:article', layout, data, particles)

            // if layout not defined in URL and we have one result, use it for rendering
            if (!layout && data.field_layout) {
                layout = data.field_layout.uuid
            }
        } else {
            console.log('GridContainer.render:front', layout, data)
            this.state.data.is_front = true
        }

        const Widget = this.switchLayout(layout)

        // render with or without nav & footer
        if (this.props.chrome) {
            return data ? (
                // initialized
                <LayoutContainer layout={layout} navbar_items={this.props.navbar_items} color_variant={nodelist.color_variant} is_front={this.state.data.is_front} sticky={!this.state.data.is_front}>
                    <Widget data={data} particles={particles}/>
                </LayoutContainer>
            ) : (
                // not initialized
                <LayoutContainer layout={layout} navbar_items={this.props.navbar_items}
                    is_front={this.state.data.is_front} sticky={false}/>
            )
        }

        return <Widget data={data} particles={particles}/>
    }
}

/**
 * load query stored in GraphQL include file
 * @FIXME - GQL should be compiled before runtime - requires Webpack?
 */
let params = {}
let gqlQuery = '';
if (layout) {
    // @FIXME
    const nids = [21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,63,64,65,66,67,68,69,70,71,72,73];
    gqlQuery = fs.readFileSync(path.join(__dirname, 'app/lib/queries/querySingleArticle.graphql'), 'utf8');
    params = {
      options: (props) => ({
        variables: {
          nid: nids[Math.floor(Math.random() * nids.length)],
        },
      }),
    }

} else {
    gqlQuery = fs.readFileSync(path.join(__dirname, 'app/lib/queries/queryFrontPageArticles.graphql'), 'utf8');
}

const GridContainerWithData = graphql(gql`${gqlQuery}`, params)(GridContainer)
export default GridContainerWithData
