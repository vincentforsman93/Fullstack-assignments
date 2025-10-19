import { useEffect, useState } from 'react';
import personsService from './services/persons.js';
import Filter from './components/Filter.jsx';
import PersonForm from './components/PersonForm.jsx';
import Persons from './components/Persons.jsx';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');

  useEffect(() => {
    personsService.getAll().then(setPersons);
  }, []);

  const handleAddPerson = async (e) => {
    e.preventDefault();
    const name = newName.trim();
    const number = newNumber.trim();
    if (!name || !number) return;

    if (persons.some(p => p.name === name)) {
      alert(`${name} is already added to phonebook`);
      return;
    }
    try {
      const created = await personsService.create({ name, number });
      setPersons(prev => prev.concat(created));
      setNewName('');
      setNewNumber('');
    } catch (err) {
      console.error(err);
      alert('Failed to save to server. Is json-server running?');
    }
  };

  const handleDelete = async (person) => {
    if (!confirm(`Delete ${person.name}?`)) return;
    try {
      await personsService.remove(person.id);
      setPersons(prev => prev.filter(p => p.id !== person.id));
    } catch (err) {
      console.error(err);
      alert(`Failed to delete ${person.name}. Maybe it was already removed?`);
      setPersons(prev => prev.filter(p => p.id !== person.id));
    }
  };

  const personsToShow = persons.filter(p =>
    p.name.toLowerCase().includes(filter.trim().toLowerCase())
  );

  return (
    <main>
      <h1>Phonebook</h1>

      <Filter value={filter} onChange={(e) => setFilter(e.target.value)} />

      <h2>add a new</h2>
      <PersonForm
        onSubmit={handleAddPerson}
        nameValue={newName}
        onNameChange={(e) => setNewName(e.target.value)}
        numberValue={newNumber}
        onNumberChange={(e) => setNewNumber(e.target.value)}
      />

      <h2>Numbers</h2>
      <Persons persons={personsToShow} onDelete={handleDelete} />
    </main>
  );
};

export default App;
