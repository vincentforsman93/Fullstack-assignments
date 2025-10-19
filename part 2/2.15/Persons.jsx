const Persons = ({ persons, onDelete }) => (
  <ul>
    {persons.map(p => (
      <li key={p.id}>
        {p.name} {p.number}{' '}
        <button onClick={() => onDelete(p)}>delete</button>
      </li>
    ))}
  </ul>
);

export default Persons;
