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
      <Part part={props.parts[0]} />
      <Part part={props.parts[1]} />
      <Part part={props.parts[2]} />
    </div>
  )
}

const Total = (props) => {
  return (
    <p>
      Number of units{' '}
      {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}
    </p>
  )
}

const Footer = (props) => {
  return (
    <p>
      {props.fullName} - {props.courseCode} - {props.section}
    </p>
  )
}

const App = () => {
  const course = {
    name: 'Web Systems and Technologies',
    parts: [
      {
        name: 'Data Structures and Algorithms',
        exercises: 3
      },
      {
        name: 'Object-Oriented Programming',
        exercises: 3
      },
      {
        name: 'Discrete Mathematics',
        exercises: 3
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
      <Footer fullName='Dave Laurence R. Repe' courseCode='CSIT340' section='G5' />
    </div>
  )
}

export default App