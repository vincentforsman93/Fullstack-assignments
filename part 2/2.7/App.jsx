import { useState } from 'react';

const App = () => {
  const [persons, setPersons] = useState([
    { id: 1, name: 'Arto Hellas' },
  ]);
  const [newName, setNewName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = newName.trim();
    if (!name) return;

    const nameExists = persons.some(p => p.name === name); 
    if (nameExists) {
      alert(`${name} is already added to phonebook`);
      return;
    }

    const newPerson = { id: crypto.randomUUID?.() ?? Date.now(), name };
    setPersons(persons.concat(newPerson));
    setNewName('');
  };

  return (
    <main>
      <h1>Phonebook</h1>

      <form onSubmit={handleSubmit}>
        <div>
          name:{' '}
          <input
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            placeholder="Type a name"
          />
        </div>
        <button type="submit" disabled={!newName.trim()}>add</button>
      </form>

      <h2>Numbers</h2>
      <ul>
        {persons.map(p => (
          <li key={p.id}>{p.name}</li>
        ))}
      </ul>
    </main>
  );
};

export default App;
