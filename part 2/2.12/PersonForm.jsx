const PersonForm = ({ onSubmit, nameValue, onNameChange, numberValue, onNumberChange }) => (
  <form onSubmit={onSubmit}>
    <div>
      name: <input value={nameValue} onChange={onNameChange} />
    </div>
    <div>
      number: <input value={numberValue} onChange={onNumberChange} />
    </div>
    <button type="submit" disabled={!nameValue.trim() || !numberValue.trim()}>
      add
    </button>
  </form>
);

export default PersonForm;
