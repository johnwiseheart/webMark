import React from 'react'
import ReactDOM from 'react-dom'

import reactCSS from 'reactcss'

import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco, arduinoLight, atelierCaveLight } from 'react-syntax-highlighter/dist/styles';

export default class Main extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      comments: [
        // {id: 1, row: 3, comment: 'Test'},
        // {id: 2, row: 5, comment: 'Test2'},
      ]
    }

    this.lineClick = this.lineClick.bind(this)
  }

  lineClick(lineNo) {
    const comments = this.state.comments
    const id = this.state.comments.length ? this.state.comments[this.state.comments.length-1].id+1 : 0

    comments.push({
      id: id,
      row: lineNo,
      comment: 'Yo'
    })
    this.setState({comments})
  }

  render() {
    const styles = reactCSS({
      'default': {
        wrapper: {
          border: '1px solid black',
          padding: 5
        },
        heading: {
          fontWeight: 700,
          marginBottom: 2
        },
        pre: {
          margin: 0
        },
        commentWrapper: {
          display: 'flex'
        },
        comment: {
          border: '1px solid black',
          marginTop: 5,
          marginBottom: 5,
          backgroundColor: '#000',
          color: '#fff',
          padding: 5,
          flex: 1
        },
        arrow: {
          width: 0,
          height: 0,
          borderLeft: '5px solid transparent',
          borderRight: '5px solid transparent',
          borderBottom: '5px solid black',
          marginBottom: -5,
          marginLeft: 20
        }
      }
    })

    const code = `import glob
# glob supports Unix style pathname extensions
python_files = glob.glob('*.py')
for file_name in sorted(python_files):
  print '    ------' + file_name

  with open(file_name) as f:
      for line in f:
          print '    ' + line.rstrip()

  print`

    return <div>
      <div style={styles.heading}>Code Review</div>
      <div style={styles.wrapper}>
        {code.split('\n').map((line, index) => {
          const lineComments = this.state.comments.filter(comment => comment.row === index+1)
          return <div key={index}>
            <SyntaxHighlighter
              language='python'
              onClick={() => this.lineClick(index+1)}
              customStyle={styles.pre}
              showLineNumbers={true}
              startingLineNumber={index+1}
              style={arduinoLight}>{line}</SyntaxHighlighter>
            {lineComments.map(comment => {
              return <div key={comment.id}>
                <div style={styles.arrow} />
                <div style={styles.commentWrapper}>
                <textarea style={styles.comment}>
                  {comment.comment}
                </textarea>
                </div>
              </div>
            })}
          </div>

        })}
      </div>
    </div>
  }
}