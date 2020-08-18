import React, { Component } from 'react'; //import React Component

const EXAMPLE_SENATORS = [
  { id: 'C000127', name: 'Maria Cantwell', state: 'WA', party: 'Democrat', phone: '202-224-3441', twitter: 'SenatorCantwell' },
  { id: 'M001111', name: 'Patty Murray', state: 'WA', party: 'Democrat', phone: '202-224-2621', twitter: 'PattyMurray' }
];

/* Your code goes here */


export class App extends Component {
  render() {
    let senator = this.props.senators;
    return (
      <div className="container">
        <h1>US Senators 2019</h1>
        <SenatorTable senators={senator} />
      </div>
    )

  }
}

export class SenatorTable extends Component {
  render() {
    let senators = this.props.senators;
    return (
      <table className="table table-bordered">
        <TableHeader cols={['Name', 'State', 'Phone', 'Twitter']} />
        <tbody>
          {senators.map((senator) => {
            return (<SenatorRow senator={senator} key={senator.id} />)
          })
          }
        </tbody>
      </table>
    )
  }
}

export class TableHeader extends Component {
  render() {
    let col = this.props.cols;
    return (
      <thead>
        <tr>
          {col.map((header) => {
            return <th key={header}>{header}</th>
          })}
        </tr>
      </thead>
    )
  }
}

export class SenatorRow extends Component {
  render() {
    let name = this.props.senator.name;
    let state = this.props.senator.state;
    let party = this.props.senator.party;
    let tele = this.props.senator.phone;
    let twitter = this.props.senator.twitter;
    return (
      <tr>
        <td>{name}</td>
        <td>{party.substring(0, 1) + " - " + state}</td>
        <td><a href={"tel:" + tele}>{tele}</a></td>
        <td><a href={"https://twitter.com/" + twitter}>{"@" + twitter}</a></td>
      </tr>
    );
  }
}