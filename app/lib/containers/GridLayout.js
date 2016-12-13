import React from 'react'
import {Row, Col} from 'react-bootstrap'

import _ from 'lodash'
import {Responsive, WidthProvider} from 'react-grid-layout'
const ResponsiveReactGridLayout = WidthProvider(Responsive)

// import LayoutFront from '../layouts/LayoutFront'

import Container from './Container'
import HR from '../components/base/HR'

import ParticleImage from '../components/particles/ParticleImage'
import ParticleText from '../components/particles/ParticleText'

class GridLayout extends React.Component {
    static propTypes = {
        // onLayoutChange: React.PropTypes.func.isRequired
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
        // This turns off compaction so you can place items wherever.
        verticalCompact: false,

        // initialLayout: generateLayout()
        initialLayout: getLayout()
    }

    state = {
        currentBreakpoint: 'lg',
        mounted: false,
        layouts: {
            lg: this.props.initialLayout
        }
    }

    componentDidMount() {
        this.setState({mounted: true})
    }

    generateDOM(props) {
        console.log(this.state.layouts)
        return _.map(this.state.layouts.lg, function(l, i) {
            return (
                <div key={l.i} className={l.static
                    ? 'static'
                : ''}>
                    {l.static
                        ? <span className="text" title="This item is static and cannot be removed or resized.">Static - {l.i}</span>
                        : <span className="text">{l.i}</span>
                    }
                </div>
            )
        })
    }

    onBreakpointChange = (breakpoint) => {
        this.setState({currentBreakpoint: breakpoint})
    };

    // uncommenting this causes an error
    // onLayoutChange = (layout, layouts) => {
    //     this.props.onLayoutChange(layout, layouts);
    // };

    render() {
        // console.log(this.props.data)
        // const layouts =

        // return (
        // <LayoutFront data={this.props.data} />
        // )

        return (
            <div className="WTF">
                <ResponsiveReactGridLayout
                    {...this.props}
                    layouts={this.state.layouts}
                    breakpoints={{lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0}}
                    cols={{lg: 12, md: 10, sm: 6, xs: 4, xxs: 2}}
                    onBreakpointChange={this.onBreakpointChange}
                    onLayoutChange={this.onLayoutChange}
                    measureBeforeMount={true}
                >
                    {this.generateDOM()}
                    {/* <LayoutFront data={this.props.data} /> */}
                    {/* { LayoutFront.render(this.props.data) } */}
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

function getLayout() {
    var layout = [
        // new Container
        {i: 'i1', x: 0, y: 1, w: 12, h: 1},
        // new Row
        {i: 'i2', x: 0, y: 2, w: 3, h: 1},
        {i: 'i3', x: 3, y: 2, w: 6, h: 1},
        {i: 'i4', x: 9, y: 2, w: 3, h: 1},
        // new Container
        {i: 'i5', x: 0, y: 3, w: 6, h: 1},
        {i: 'i6', x: 6, y: 3, w: 6, h: 1},
        // new Row
        {i: 'i7', x: 0, y: 4, w: 4, h: 1},
        {i: 'i8', x: 4, y: 4, w: 4, h: 1},
        {i: 'i9', x: 8, y: 4, w: 4, h: 1},
        // new Row
        {i: 'i10', x: 0, y: 5, w: 4, h: 1},
        {i: 'i11', x: 4, y: 5, w: 4, h: 1},
        {i: 'i12', x: 8, y: 5, w: 4, h: 1},
        // new Row
        {i: 'i13', x: 0, y: 6, w: 12, h: 1},
        // new Row
        {i: 'i14', x: 0, y: 7, w: 3, h: 1},
        {i: 'i15', x: 3, y: 7, w: 3, h: 1},
        {i: 'i16', x: 6, y: 7, w: 3, h: 1},
        {i: 'i17', x: 9, y: 7, w: 3, h: 1},
        // new Row
        {i: 'i18', x: 0, y: 8, w: 3, h: 1},
        {i: 'i19', x: 3, y: 8, w: 3, h: 1},
        {i: 'i20', x: 6, y: 8, w: 3, h: 1},
        {i: 'i21', x: 9, y: 8, w: 3, h: 1},
        // new Row
        {i: 'i22', x: 0, y: 9, w: 12, h: 1},
        // new Row
        {i: 'i23', x: 0, y: 10, w: 6, h: 1},
        {i: 'i24', x: 6, y: 10, w: 6, h: 1},
        // new Row
        {i: 'i25', x: 0, y: 11, w: 10, h: 1},
        {i: 'i26', x: 10, y: 11, w: 2, h: 1},
        // new Row
        {i: 'i27', x: 0, y: 12, w: 12, h: 1}
    ];

    return layout;
}

class LayoutFront extends React.Component {
  render() {
    return (
      <div className='layout layout-front'>
          <Container fluid classes='panel-1'>
              <div key={'i1'}><h2 className='text-color-gold'>New On Enliven</h2><HR/></div>
              <div key={'i2'} className='sm-img'><ParticleImage {...this.props.data.fields[0]}/><div className="article-meta-small"><ParticleText {...this.props.data.fields[1]} /></div></div>
              <div key={'i3'} className='lg-img'><ParticleImage {...this.props.data.fields[2]}/><div className="article-meta-large"><ParticleText {...this.props.data.fields[3]} /></div></div>
              <div key={'i4'}><h2>AD SPACE</h2></div>
          </Container>
          <Container fluid>
              <div key={'i5'} className='lg-img'><ParticleImage {...this.props.data.fields[5]}/><div className="article-meta-large"><ParticleText {...this.props.data.fields[3]} /></div></div>
              <div key={'i6'} className='lg-img'><ParticleImage {...this.props.data.fields[6]}/><div className="article-meta-large"><ParticleText {...this.props.data.fields[3]} /></div></div>
              <div key={'i7'}><h2 className='text-color-gold'>Women's Health</h2><HR/><ParticleImage {...this.props.data.fields[14]}/></div>
              <div key={'i8'}><h2 className='text-color-gold'>Top Articles</h2><HR/></div>
              <div key={'i9'}><h2 className='text-color-gold'>Interior Design</h2><HR/><ParticleImage {...this.props.data.fields[14]}/></div>
              <div key={'i10'}><h2 className='text-color-gold'>Women's Health</h2><HR/></div>
              <div key={'i11'}><h2 className='text-color-gold'>Top Articles</h2><HR/><ParticleImage {...this.props.data.fields[14]}/></div>
              <div key={'i12'}><h2 className='text-color-gold'>Interior Design</h2><HR/></div>
              <div key={'i13'}><h2>OUR CONTRIBURORS</h2></div>
              <div key={'i14'}><ParticleImage {...this.props.data.fields[10]}/><h2>Peter Larsen</h2></div>
              <div key={'i15'}><ParticleImage {...this.props.data.fields[10]}/><h2>Peter Larsen</h2></div>
              <div key={'i16'}><ParticleImage {...this.props.data.fields[10]}/><h2>Peter Larsen</h2></div>
              <div key={'i17'}><ParticleImage {...this.props.data.fields[10]}/><h2>Peter Larsen</h2></div>
              <div key={'i18'}><ParticleImage {...this.props.data.fields[10]}/><h2>Peter Larsen</h2></div>
              <div key={'i19'}><ParticleImage {...this.props.data.fields[10]}/><h2>Peter Larsen</h2></div>
              <div key={'i20'}><ParticleImage {...this.props.data.fields[10]}/><h2>Peter Larsen</h2></div>
              <div key={'i21'}><ParticleImage {...this.props.data.fields[10]}/><h2>Peter Larsen</h2></div>
              <div key={'i22'}><h2>WE RECOMMEND</h2></div>
              <div key={'i23'} className='lg-img'><ParticleImage {...this.props.data.fields[5]}/><div className="article-meta-large"><ParticleText {...this.props.data.fields[3]} /></div></div>
              <div key={'i24'} className='lg-img'><ParticleImage {...this.props.data.fields[6]}/><div className="article-meta-large"><ParticleText {...this.props.data.fields[3]} /></div></div>
              <div key={'i25'} className='wide-img'><ParticleImage {...this.props.data.fields[11]}/><div className="article-meta-large"><ParticleText {...this.props.data.fields[3]} /></div></div>
              <div key={'i26'} className='xtr-sm-img'><ParticleImage {...this.props.data.fields[13]}/><div className="article-meta-small"><ParticleText {...this.props.data.fields[1]} /></div></div>
              <div key={'i27'}><h2>FOOTER</h2></div>
          </Container>
      </div>
    )
  }
}
