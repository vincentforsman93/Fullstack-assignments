const Filter = ({ value, onChange }) => (
  <div style={{ marginBottom: '1rem' }}>
    filter shown with: <input value={value} onChange={onChange} />
  </div>
);

export default Filter;
