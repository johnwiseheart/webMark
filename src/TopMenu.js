import React from 'react'
import ReactDOM from 'react-dom'

import reactCSS from 'reactcss'

import Modal from 'react-modal'
import Button from './Button'

export default class TopMenu extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      modalOpenCourse: false,
      modalOpenAssign: false,
      modalOpenGroup: false
    }
  }

  render() {
    const styles = reactCSS({
      'default': {
        wrapper: {
          marginBottom: 10
        },
        menuRow: {
          display: 'flex'
        },
        menuLeft: {
          flex: 1
        },
        buttonRight: {
          marginRight: 0
        },
        ul: {
          listStyle: 'none',
          padding: 0
        },
        liAnchor: {
          color: '#000'
        }
      }
    })

    const modalStyles = {
      content : {
        position: 'relative',
        width: 250,
        margin: 'auto',
        border: '1px solid #000',
        borderRadius: 0
      }
    }

    return <div style={styles.wrapper}>
      <h1>webMark</h1>
      <div style={styles.menuRow}>
        <div style={styles.menuLeft}>
          <Button onClick={() => this.setState({modalOpenCourse: true})}>Select Course</Button>
          <Button disabled onClick={() => this.setState({modalOpenAssign: true})}>Select Assignment</Button>
          <Button disabled onClick={() => this.setState({modalOpenGroup: true})}>Select Group</Button>
        </div>
        <div>
          <Button style={styles.buttonRight}>Logged in as John Wiseheart</Button>
        </div>
      </div>
      <Modal
        isOpen={this.state.modalOpenCourse}
        onAfterOpen={() => {}}
        onRequestClose={() => this.setState({modalOpenCourse: false})}
        style={modalStyles}
        contentLabel="Modal"
      >
        <h1>Select Course</h1>
        <ul style={styles.ul}>
        {['COMP1917', 'COMP1927', 'COMP2911', 'COMP2041'].map(course => {
          return <li><a href="#" style={styles.liAnchor}>{course}</a></li>
        })}
        </ul>
      </Modal>
      <Modal
        isOpen={this.state.modalOpenAssign}
        onAfterOpen={() => {}}
        onRequestClose={() => this.setState({modalOpenAssign: false})}
        style={modalStyles}
        contentLabel="Modal"
      >
        <h1>Select Assignment</h1>
        <p>Etc.</p>
      </Modal>
      <Modal
        isOpen={this.state.modalOpenGroup}
        onAfterOpen={() => {}}
        onRequestClose={() => this.setState({modalOpenGroup: false})}
        style={modalStyles}
        contentLabel="Modal"
      >
        <h1>Select Group</h1>
        <p>Etc.</p>
      </Modal>

    </div>
  }
}