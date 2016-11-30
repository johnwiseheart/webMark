require("babel-polyfill")

import React from 'react'
import ReactDOM from 'react-dom'

import './assets/styles/core.scss'

import { Grid, Row, Col } from 'react-flexbox-grid/lib/index'
import reactCSS from 'reactcss'

import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco, arduinoLight, atelierCaveLight } from 'react-syntax-highlighter/dist/styles';


import SideBar from './SideBar'
import TopMenu from './TopMenu'
import Main from './Main'


export default class App extends React.Component {
  render() {
    return <Grid>
      <Row>
        <Col xs={12}>
          <TopMenu />
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={9} md={9} lg={9}>
          <Main />
        </Col>
        <Col xs={12} sm={3} md={3} lg={3}>
          <SideBar />
        </Col>
      </Row>
    </Grid>
  }
}