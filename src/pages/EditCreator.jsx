import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from '../client';

function EditCreator({ onSuccess }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    url: '',
    description: '',
    imageURL: '',
  });

  useEffect(() => {
    async function fetchCreator() {
      const { data, error } = await supabase
        .from('creator')
        .select()
        .eq('id', id);
      if (error) console.error(error);
      else setForm(data[0]);
    }
    fetchCreator();
  }, [id]);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const { id: _, ...updateData } = form;
    const { error } = await supabase
      .from('creator')
      .update(updateData)
      .eq('id', id);
    if (error) console.error(error);
    else { await onSuccess(); navigate('/'); }
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
          <input name="imageURL" value={form.imageURL || ''} onChange={handleChange} />
        </label>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
}

export default EditCreator;
