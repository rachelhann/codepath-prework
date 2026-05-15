import { useState } from 'react';

function EditCreator({ creator, onSave }) {
  const [form, setForm] = useState({
    name: creator?.name || '',
    url: creator?.url || '',
    description: creator?.description || '',
    imageURL: creator?.imageURL || '',
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSave(form);
  }

  return (
    <div>
      <h1>Edit Creator</h1>
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
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
}

export default EditCreator;
