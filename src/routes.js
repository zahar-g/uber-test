import * as React from 'react';
import { Route } from 'react-router';
import App from './components/app';
import HomeComponent from './components/home/homeComponent';
import AboutComponent from './components/about/aboutComponent';

export default (
    <Route path="/" component={App}>
        <Route component={HomeComponent} />
        <Route path="about" component={AboutComponent} />
    </Route>
);
