import { useNavigate } from 'react-router-dom';
import { supabase } from '../client';

function toUrl(value, base) {
  if (!value) return null;
  return value.startsWith('http') ? value : `${base}${value}`;
}

function Card({ id, name, description, imageURL, youtube, x, instagram, onDelete }) {
  const navigate = useNavigate();

  async function handleDelete() {
    const { error } = await supabase.from('creator').delete().eq('id', id);
    if (error) console.error(error);
    else await onDelete();
  }

  return (
    <div className="card">
      {imageURL && <img src={imageURL} alt={name} className="card-image" />}
      <h2>{name}</h2>
      <p>{description}</p>
      <div className="card-socials">
        {youtube && (
          <a href={toUrl(youtube, 'https://youtube.com/@')} target="_blank" rel="noreferrer" title="YouTube">
            <img src="https://cdn.simpleicons.org/youtube/white" alt="YouTube" className="social-icon" />
          </a>
        )}
        {x && (
          <a href={toUrl(x, 'https://x.com/')} target="_blank" rel="noreferrer" title="X">
            <img src="https://cdn.simpleicons.org/x/white" alt="X" className="social-icon" />
          </a>
        )}
        {instagram && (
          <a href={toUrl(instagram, 'https://instagram.com/')} target="_blank" rel="noreferrer" title="Instagram">
            <img src="https://cdn.simpleicons.org/instagram/white" alt="Instagram" className="social-icon" />
          </a>
        )}
      </div>
      <div className="card-buttons">
        <button onClick={() => navigate(`/creators/${id}/edit`)}>Edit</button>
        <button type="button" onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
}

export default Card;
