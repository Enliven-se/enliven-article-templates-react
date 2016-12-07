import React from 'react'

import ParticleIntro from '../particles/ParticleIntro'
import HR from './HR'

class ArticleIntro extends React.Component {
    render() {
        const ArticleIntroBorder = function(props) {
            let classes = props.classes
                ? props.classes
                : '';
            classes += ' article-intro-border'

            return ((props.bordered)
                ? <HR classes={classes}/>
                : null)
        }
        return (
            <div className={this.props.classes}>
                <ArticleIntroBorder {...this.props}/>
                <ParticleIntro {...this.props}/>
                <ArticleIntroBorder {...this.props}/> {this.props.children}
            </div>
        )
    }
}

export default ArticleIntro
