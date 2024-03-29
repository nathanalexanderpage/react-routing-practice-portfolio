import React, {Component} from 'react';
import About from '../pages/About';
import Blog from '../pages/Blog';
import Projects from '../pages/Projects';
import Home from '../pages/Home';
import { Route } from 'react-router-dom';

class Content extends Component {
  render () {
    return (
      <div className="content-holder">
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/blog" component={Blog} />
        <Route path="/projects" component={Projects} />
      </div>
    )
  }
}

export default Content
