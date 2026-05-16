import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../client';

function AddCreator({ onSuccess }) {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    url: '',
    description: '',
    imageURL: '',
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const { error } = await supabase.from('creator').insert([form]);
    if (error) console.error(error);
    else { await onSuccess(); navigate('/'); }
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
