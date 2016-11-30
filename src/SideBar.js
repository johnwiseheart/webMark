import React from 'react'
import ReactDOM from 'react-dom'

import reactCSS from 'reactcss'

import Button from './Button'

export default class SideBar extends React.Component {
  render() {
    const styles = reactCSS({
      'default': {
        wrapper: {
          border: '1px solid black',
          padding: 5,
          marginBottom: 10
        },
        heading: {
          fontWeight: 700,
          marginBottom: 2
        },
        markRow: {
          display: 'flex',
          marginBottom: 10
        },
        markTitle: {
          flex: 1,
        },
        markNumber: {
          display: 'inline-block',
          border: '1px solid black',
          padding: 3,
          marginRight: 3
        },
        studentList: {
          listStyle: 'none',
          padding: 0,
          margin: 0
        },
        studentListRow: {
          display: 'flex'
        },
        studentListRowName: {
          flex: 1,
          color: '#000'
        },
        studentListRowMark: {
          paddingLeft: 10
        }
      }
    })

    const students = [
      {id: 1, name: 'Wiseheart, John', mark: 89},
      {id: 2, name: 'Wiseheart, John', mark: 90},
    ]

    return <div>
      <div style={styles.heading}>Markers Assessment</div>
      <div style={styles.wrapper}>
        <div style={styles.markRow}>
          <div style={styles.markTitle}>Style</div>
          <div>
            <input style={styles.markNumber} value='14' onChange={() => {}} size='2' />
            /15
          </div>
        </div>
        <div style={styles.markRow}>
          <div style={styles.markTitle}>Diary</div>
          <div>
            <input style={styles.markNumber} value='5' onChange={() => {}} size='2' />
            /5
          </div>
        </div>
        <Button style={{display: 'flex', justifyContent: 'center', marginRight: 0}}>Save</Button>
      </div>
      <div style={styles.heading}>Student Selection</div>
      <div style={styles.wrapper}>
        <ul style={styles.studentList}>
          {students.sort((a, b) => {
            if (a.mark > b.mark)
              return -1
            if (a.mark < b.mark)
              return 1
            return 0
          }).map(student => {
            return <li key={student.id} style={styles.studentListRow}>
                <a href="#" style={styles.studentListRowName}>
                  {student.name}
                </a>
                <div style={styles.studentListRowMark}>
                  {student.mark}
                </div>
            </li>
          })}
        </ul>
      </div>
    </div>
  }
}