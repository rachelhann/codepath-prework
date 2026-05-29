import { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { supabase } from '../client';
import { toUrl } from '../utils';


function ViewCreator() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { state } = useLocation();
  const [creator, setCreator] = useState(state || null);
  const [deleting, setDeleting] = useState(false);

  async function handleDelete() {
    if (!window.confirm(`Delete ${creator.name}?`)) return;
    setDeleting(true);
    const { error } = await supabase.from('creator').delete().eq('id', id);
    if (error) { console.error(error); setDeleting(false); }
    else navigate('/');
  }

  useEffect(() => {
    if (state) return;
    async function fetchCreator() {
      const { data, error } = await supabase
        .from('creator')
        .select()
        .eq('id', id)
        .single();
      if (error) console.error(error);
      else setCreator(data);
    }
    fetchCreator();
  }, [id, state]);

  if (!creator) return <p className="view-loading">Loading...</p>;

  return (
    <div className="view-page">
      <div className="view-card">
        {creator.imageURL && (
          <img src={creator.imageURL} alt={creator.name} className="view-image" />
        )}
        <div className="view-info">
          <div className="view-title-group">
            <h1 className="view-name">{creator.name}</h1>
            <p className="view-description">{creator.description}</p>
          </div>
          <div className="view-socials">
            {creator.youtube && (
              <a href={toUrl(creator.youtube, 'https://youtube.com/@')} target="_blank" rel="noreferrer" title="YouTube">
                <img src="https://cdn.simpleicons.org/youtube/white" alt="YouTube" className="social-icon" />
              </a>
            )}
            {creator.x && (
              <a href={toUrl(creator.x, 'https://x.com/')} target="_blank" rel="noreferrer" title="X">
                <img src="https://cdn.simpleicons.org/x/white" alt="X" className="social-icon" />
              </a>
            )}
            {creator.instagram && (
              <a href={toUrl(creator.instagram, 'https://instagram.com/')} target="_blank" rel="noreferrer" title="Instagram">
                <img src="https://cdn.simpleicons.org/instagram/white" alt="Instagram" className="social-icon" />
              </a>
            )}
          </div>
          <div className="modal-buttons">
            <button onClick={() => navigate(`/creators/${creator.id}/edit`)}>Edit</button>
            <button onClick={handleDelete} disabled={deleting}>
              {deleting ? 'Deleting...' : 'Delete'}
            </button>
          </div>
        </div>
      </div>
      <button className="view-back" onClick={() => navigate('/')}>← Back</button>
    </div>
  );
}

export default ViewCreator;
