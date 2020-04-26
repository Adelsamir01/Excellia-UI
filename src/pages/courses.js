import { connect } from 'react-redux';
import React, { Component } from 'react';
import { Tab } from 'semantic-ui-react';
import { Embed } from 'semantic-ui-react'


const panes = [
  {
    menuItem: 'ECEN-101',
    render: () =><Embed
    id='/'
    placeholder='/icon.png'
    url='/users/ECEN-101    '
  />,
  },
  {
    menuItem: 'MATH-101',
    href : "/",
    render: () => <Embed
    id='/'
    placeholder='/icon.png'
    url='/users/DOLA    '
  />,
  },
  {
    menuItem: 'MENG-101',
    render: () => <Embed
    id='/'
    url='/users/MENG-101'
  />,
  },
]


export class coursesView extends Component {

render(){
    return (
        <>
        <div>
            <Tab
                panes={panes}
                menu={{ fluid: true, vertical: true, tabular: true, color: 'red' }}
            />
        </div>
        </>
    )
}}
export default connect()(coursesView);