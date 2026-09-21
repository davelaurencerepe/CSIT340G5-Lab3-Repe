const Header = (props) => {
  return <h1>{props.course}</h1>
}

const Part = (props) => {
  return (
    <p>
      {props.name} {props.exercises}
    </p>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part name={props.part1} exercises={props.exercises1} />
      <Part name={props.part2} exercises={props.exercises2} />
      <Part name={props.part3} exercises={props.exercises3} />
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
  const part1 = 'Data Structures and Algorithms'
  const exercises1 = 3
  const part2 = 'Object-Oriented Programming'
  const exercises2 = 3
  const part3 = 'Discrete Mathematics'
  const exercises3 = 3

  return (
    <div>
      <Header course={course} />
      <Content
        part1={part1} exercises1={exercises1}
        part2={part2} exercises2={exercises2}
        part3={part3} exercises3={exercises3}
      />
      <Total total={exercises1 + exercises2 + exercises3} />
      <Footer fullName='Dave Laurence R. Repe' courseCode='CSIT340' section='G5' />
    </div>
  )
}

export default App