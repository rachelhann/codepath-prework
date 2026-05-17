import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../client';

function AddCreator({ onSuccess }) {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    description: '',
    youtube: '',
    x: '',
    instagram: '',
    imageURL: '',
  });

  function handleChange(e) {
    const { name, value } = e.target;
    const socials = ['youtube', 'x', 'instagram'];
    setForm({ ...form, [name]: socials.includes(name) ? value.replace('@', '') : value });
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
          Description
          <textarea name="description" value={form.description} onChange={handleChange} required />
        </label>
        <label>
          YouTube handle (optional)
          <input name="youtube" value={form.youtube} onChange={handleChange} />
        </label>
        <label>
          X handle (optional)
          <input name="x" value={form.x} onChange={handleChange} />
        </label>
        <label>
          Instagram handle (optional)
          <input name="instagram" value={form.instagram} onChange={handleChange} />
        </label>
        <label>
          Image URL (optional)
          <input name="imageURL" value={form.imageURL} onChange={handleChange} />
        </label>
        <div className="form-buttons">
          <button type="submit">Add Creator</button>
          <button type="button" onClick={() => navigate('/')}>Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default AddCreator;
