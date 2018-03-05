import React, { PureComponent } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router';
import styled, { injectGlobal } from 'styled-components';

import Main from './Main';
import Page from './Page';
import Cover from './Cover';
import Navigator from './Navigator';
import ApolloProvider from './ApolloProvider';

import slides from './slides/index';

injectGlobal`
  body {
    margin: 0;
    padding: 0;
    font-family: 'PT Sans Narrow';
    color: #fff;
    font-size: 24px;
  }
  p, li {
    font-size: 36px;
    margin: 0.25rem 0;
  }
  a {
    color: #96d8ff;
    text-decoration: none;
  }
`;

const GraphiQL = styled.iframe`
  width: 80vw;
  height: 70vh;
  position: absolute;
  left: 10vw;
  top: 20vh;
  ${props => !props.visible && `display: none`};
`;

GraphiQL.displayName = 'GraphiQL';

class App extends PureComponent {
  state = {
    graphiQLVisible: false
  };

  setGraphiQLVisible = graphiQLVisible => {
    return this.setState({ graphiQLVisible });
  };

  render() {
    return (
      <ApolloProvider>
        <BrowserRouter>
          <Navigator last={slides.length}>
            <Main>
              <Route exact path="/" component={Cover} />
              {slides.map((content, i) => (
                <Route
                  exact
                  path={`/page-${i + 1}`}
                  key={i}
                  render={props => (
                    <Page
                      {...content}
                      number={i + 1}
                      count={slides.length}
                      setGraphiQLVisible={this.setGraphiQLVisible}
                    />
                  )}
                />
              ))}
              <GraphiQL
                id="graphiql"
                src="http://localhost:3001/graphiql"
                visible={this.state.graphiQLVisible}
              />
            </Main>
          </Navigator>
        </BrowserRouter>
      </ApolloProvider>
    );
  }
}

export default App;
