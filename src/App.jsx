const Header = (props) => {
  return <h1>{props.course}</h1>
}

const Part = (props) => {
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.part1} />
      <Part part={props.part2} />
      <Part part={props.part3} />
    </div>
  )
}

const Total = (props) => {
  return <p>Number of units {props.total}</p>
}

const Footer = (props) => {
  return (
    <p>
      {props.fullName} - {props.courseCode} - {props.section}
    </p>
  )
}

const App = () => {
  const course = 'Web Systems and Technologies'
  const part1 = {
    name: 'Data Structures and Algorithms',
    exercises: 3
  }
  const part2 = {
    name: 'Object-Oriented Programming',
    exercises: 3
  }
  const part3 = {
    name: 'Discrete Mathematics',
    exercises: 3
  }

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} />
      <Total total={part1.exercises + part2.exercises + part3.exercises} />
      <Footer fullName='Dave Laurence R. Repe' courseCode='CSIT340' section='G5' />
    </div>
  )
}

export default App