// https://websamuraj.pl/examples/react/zadanie-lista/
// Wykorzystaj dwa komponenty: rodzica ( o nazwie List) i dziecka (o nazwie Person)

const Person = (props) => {
  return (
    <li>
      <span>{props.name}</span>
      <button onClick = {props.delete}>delete</button>
    </li>
  )
}


class List extends React.Component {

    state = {
      people: [
        {id: 1, name: "John K  "},
        {id: 2, name: "Kate D  "},
        {id: 3, name: "Rob U  "},
        {id: 4, name: "Mark M  "},
        {id: 5, name: "Sandy L  "},
      ]
    }
handleDelete = (id) => {
  const people = [...this.state.people]
  const index = people.findIndex(person => person.id === id)
  people.splice(index, 1)
  this.setState({
    people
  })
}

  render() {
    const people = this.state.people.map(person => <Person key={person.id} name = {person.name} delete = {this.handleDelete.bind(this, person.id)}/>)
    return (
    <ul>
      {people}</ul>
    )
  }
}


ReactDOM.render(<List />, document.getElementById('root'))