import { useState } from 'react';

const App = () => {
  const [persons, setPersons] = useState([
    { id: 1, name: 'Arto Hellas', number: '040-123456' },
  ]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = newName.trim();
    const number = newNumber.trim();
    if (!name || !number) return;

    const nameExists = persons.some(p => p.name === name);
    if (nameExists) {
      alert(`${name} is already added to phonebook`);
      return;
    }

    const newPerson = { id: crypto.randomUUID?.() ?? Date.now(), name, number };
    setPersons(persons.concat(newPerson));
    setNewName('');
    setNewNumber('');
  };

  const personsToShow = persons.filter(p =>
    p.name.toLowerCase().includes(filter.trim().toLowerCase())
  );

  return (
    <main>
      <h1>Phonebook</h1>

      <div style={{ marginBottom: '1rem' }}>
        filter shown with:{' '}
        <input
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          placeholder="Type to filter"
        />
      </div>

      <h2>add a new</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name:{' '}
          <input
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            placeholder="Type a name"
          />
        </div>
        <div>
          number:{' '}
          <input
            value={newNumber}
            onChange={(e) => setNewNumber(e.target.value)}
            placeholder="Type a number"
          />
        </div>
        <button type="submit" disabled={!newName.trim() || !newNumber.trim()}>
          add
        </button>
      </form>

      <h2>Numbers</h2>
      <ul>
        {personsToShow.map(p => (
          <li key={p.id}>
            {p.name} {p.number}
          </li>
        ))}
      </ul>
    </main>
  );
};

export default App;
