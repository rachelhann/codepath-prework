import { useState } from 'react';

function AddCreator({ onAdd }) {
  const [form, setForm] = useState({
    name: '',
    url: '',
    description: '',
    imageURL: '',
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    onAdd(form);
    setForm({ name: '', url: '', description: '', imageURL: '' });
  }

  return (
    <div>
      <h1>Add Creator</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input name="name" value={form.name} onChange={handleChange} required />
        </label>
        <label>
          URL
          <input name="url" value={form.url} onChange={handleChange} required />
        </label>
        <label>
          Description
          <textarea name="description" value={form.description} onChange={handleChange} required />
        </label>
        <label>
          Image URL (optional)
          <input name="imageURL" value={form.imageURL} onChange={handleChange} />
        </label>
        <button type="submit">Add Creator</button>
      </form>
    </div>
  );
}

export default AddCreator;
