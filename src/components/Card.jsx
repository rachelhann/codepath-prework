import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../client';
import DeleteModal from './DeleteModal';
import CreatorModal from './CreatorModal';
import { toUrl } from '../utils';

function Card({ id, name, description, imageURL, youtube, x, instagram, onDelete }) {
  const navigate = useNavigate();
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showCreatorModal, setShowCreatorModal] = useState(false);
  const [deleting, setDeleting] = useState(false);

  async function handleDelete() {
    setDeleting(true);
    const { error } = await supabase.from('creator').delete().eq('id', id);
    if (error) { console.error(error); setDeleting(false); }
    else await onDelete();
  }

  const creator = { id, name, description, imageURL, youtube, x, instagram };

  return (
    <div className="card" onClick={() => setShowCreatorModal(true)}>
      {showDeleteModal && (
        <DeleteModal
          name={name}
          onConfirm={handleDelete}
          onCancel={() => setShowDeleteModal(false)}
          deleting={deleting}
        />
      )}
      {showCreatorModal && (
        <CreatorModal
          creator={creator}
          onClose={() => setShowCreatorModal(false)}
          onDelete={onDelete}
        />
      )}
      {imageURL && <img src={imageURL} alt={name} className="card-image" />}
      <h2>{name}</h2>
      <p>{description}</p>
      <div className="card-socials">
        {youtube && (
          <a href={toUrl(youtube, 'https://youtube.com/@')} target="_blank" rel="noreferrer" title="YouTube" onClick={(e) => e.stopPropagation()}>
            <img src="https://cdn.simpleicons.org/youtube/white" alt="YouTube" className="social-icon" />
          </a>
        )}
        {x && (
          <a href={toUrl(x, 'https://x.com/')} target="_blank" rel="noreferrer" title="X" onClick={(e) => e.stopPropagation()}>
            <img src="https://cdn.simpleicons.org/x/white" alt="X" className="social-icon" />
          </a>
        )}
        {instagram && (
          <a href={toUrl(instagram, 'https://instagram.com/')} target="_blank" rel="noreferrer" title="Instagram" onClick={(e) => e.stopPropagation()}>
            <img src="https://cdn.simpleicons.org/instagram/white" alt="Instagram" className="social-icon" />
          </a>
        )}
      </div>
      <div className="card-buttons" onClick={(e) => e.stopPropagation()}>
        <button onClick={() => navigate(`/creators/${id}/edit`)}>Edit</button>
        <button type="button" onClick={() => setShowDeleteModal(true)}>Delete</button>
      </div>
    </div>
  );
}

export default Card;
