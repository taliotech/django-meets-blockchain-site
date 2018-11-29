import * as React from 'react';
import { withPrefix } from 'gatsby-link';

let styles: string;
if (process.env.NODE_ENV === 'production') {
  try {
    styles = require('!raw-loader!../public/styles.css');
  } catch (e) {
    console.log(e); // tslint:disable-line
  }
}

interface HtmlProps {
  body: string;
  preBodyComponents: React.ReactNode[];
  postBodyComponents: React.ReactNode[];
  headComponents: React.ReactNode[];
}

module.exports = class HTML extends React.Component<HtmlProps, void> {
  public render() {
    let css;
    if (process.env.NODE_ENV === 'production') {
      css = <style id="gatsby-inlined-css" dangerouslySetInnerHTML={{ __html: styles }} />;
    }
    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <link rel="shortcut icon" type="image/png" href={withPrefix('/favicon.png')} />
          <link rel="icon" type="image/png" sizes="32x32" href={withPrefix('/favicon-32x32.png')} />
          <meta name="msapplication-TileColor" content="#f8fcff" />
          <meta name="theme-color" content="#006fe6" />
          {this.props.headComponents}
          {css}
        </head>
        <body>
          {this.props.preBodyComponents}
          <div key="body" id="___gatsby" dangerouslySetInnerHTML={{ __html: this.props.body }} />
          {this.props.postBodyComponents}
        </body>
      </html>
    );
  }
};
