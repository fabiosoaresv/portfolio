import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout>
          <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">FABIO SOARES</Link>} scroll>
            <Navigation>
              <Link to="/">Home</Link>
              <Link to="/resume">About me</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
          </Header>

          <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to="/">FABIO SOARES</Link>}>
            <Navigation>
              <Link to="/">Home</Link>
              <Link to="/resume">About me</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
          </Drawer>

          <Content>
            <div className="page-content" />
            <Main/>
            <footer className="footer-color">
              <p>developed by <a href="https://github.com/fabiosoaresv" rel="noopener noreferrer" target="_blank">@fabiosoaresv</a></p>
            </footer>
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
