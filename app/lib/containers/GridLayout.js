import React from 'react'
import {Row, Col} from 'react-bootstrap'

import _ from 'lodash'
import {Responsive, WidthProvider} from 'react-grid-layout'
const ResponsiveReactGridLayout = WidthProvider(Responsive)

import Container from './Container'
import HR from '../components/base/HR'

class GridLayout extends React.Component {
    static propTypes = {
        onLayoutChange: React.PropTypes.func.isRequired
    }

    static defaultProps = {
        className: "layout",
        rowHeight: 30,
        cols: {
            lg: 12,
            md: 10,
            sm: 6,
            xs: 4,
            xxs: 2
        },
        initialLayout: generateLayout()
    }

    state = {
        currentBreakpoint: 'lg',
        mounted: false,
        layouts: {
            lg: this.props.initialLayout
        }
    }

    defaultProps = {
        className: "layout",
        items: 50,
        cols: 12,
        rowHeight: 30,
        // This turns off compaction so you can place items wherever.
        verticalCompact: false
    }

    componentDidMount() {
        this.setState({mounted: true})
    }

    generateDOM() {
        return _.map(this.state.layouts.lg, function(l, i) {
            return (
                <div key={i} className={l.static
                    ? 'static'
                : ''}>
                    {l.static
                        ? <span className="text" title="This item is static and cannot be removed or resized.">Static - {i}</span>
                        : <span className="text">{i}</span>
                    }
                </div>
            )
        })
    }

    onBreakpointChange = (breakpoint) => {
        this.setState({currentBreakpoint: breakpoint})
    };

    onLayoutChange = (layout, layouts) => {
        this.props.onLayoutChange(layout, layouts);
    };

    render() {
        return (
            <div>
                <ResponsiveReactGridLayout
                    {...this.props}
                    layouts={this.state.layouts}
                    onBreakpointChange={this.onBreakpointChange}
                    onLayoutChange={this.onLayoutChange}
                    measureBeforeMount={true}
                >
                    { this.generateDOM() }
                </ResponsiveReactGridLayout>
            </div>
        )
    }
}

export default GridLayout

function generateLayout() {
    return _.map(_.range(0, 25), function(item, i) {
        var y = Math.ceil(Math.random() * 4) + 1
        return {
            x: _.random(0, 5) * 2 % 12,
            y: Math.floor(i / 6) * y,
            w: 2,
            h: y,
            i: i.toString(),
            static: Math.random() < 0.05
        }
    })
}
