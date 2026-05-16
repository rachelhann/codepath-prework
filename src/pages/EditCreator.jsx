import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from '../client';

function EditCreator({ onSuccess }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    description: '',
    imageURL: '',
    youtube: '',
    x: '',
    instagram: '',
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
    const { name, value } = e.target;
    const socials = ['youtube', 'x', 'instagram'];
    setForm({ ...form, [name]: socials.includes(name) ? value.replace('@', '') : value });
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
          <input name="name" value={form.name || ''} onChange={handleChange} required />
        </label>
        <label>
          Description
          <textarea name="description" value={form.description || ''} onChange={handleChange} required />
        </label>
        <label>
          YouTube handle (optional)
          <input name="youtube" value={form.youtube || ''} onChange={handleChange}/>
        </label>
        <label>
          X handle (optional)
          <input name="x" value={form.x || ''} onChange={handleChange}/>
        </label>
        <label>
          Instagram handle (optional)
          <input name="instagram" value={form.instagram || ''} onChange={handleChange}/>
        </label>
        <label>
          Image URL (optional)
          <input name="imageURL" value={form.imageURL || ''} onChange={handleChange} />
        </label>
        <div className="form-buttons">
          <button type="submit">Save Changes</button>
          <button type="button" onClick={() => navigate('/')}>Cancel</button>
        
        </div>
      </form>
    </div>
  );
}

export default EditCreator;
