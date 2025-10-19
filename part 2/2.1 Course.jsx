const Header = ({ course }) => <h2>{course.name}</h2>;

const Part = ({ part }) => (
  <li>
    {part.name} {part.exercises}
  </li>
);

const Content = ({ parts }) => (
  <ul>
    {parts.map(part => (
      <Part key={part.id} part={part} />
    ))}
  </ul>
);

const Course = ({ course }) => (
  <section>
    <Header course={course} />
    <Content parts={course.parts} />
  </section>
);

export default Course;
