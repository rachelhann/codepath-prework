import { Link } from 'react-router-dom';
import { supabase } from '../client';

function Card({ id, name, url, description, imageURL, onDelete }) {
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
      <a href={url} target="_blank" rel="noreferrer">
        {url}
      </a>
      <div className="card-buttons">
        <Link to={`/creators/${id}/edit`}>
          <button>Edit</button>
        </Link>
        <button type="button" onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
}

export default Card;
