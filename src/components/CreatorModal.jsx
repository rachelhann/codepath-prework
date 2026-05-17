import { useState } from 'react';
import { createPortal } from 'react-dom';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../client';
import DeleteModal from './DeleteModal';
import { toUrl } from '../utils';

function CreatorModal({ creator, onClose, onDelete }) {
  const navigate = useNavigate();
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleting, setDeleting] = useState(false);

  async function handleDelete() {
    setDeleting(true);
    const { error } = await supabase.from('creator').delete().eq('id', creator.id);
    if (error) { console.error(error); setDeleting(false); }
    else { onClose(); await onDelete(); }
  }

  return createPortal(
    <>
      <div className="modal-overlay" onClick={(e) => { e.stopPropagation(); onClose(); }}>
        <div className="modal creator-modal" onClick={(e) => e.stopPropagation()}>
          {creator.imageURL && (
            <img src={creator.imageURL} alt={creator.name} className="creator-modal-image" />
          )}
          <h2>{creator.name}</h2>
          <p className="creator-modal-desc">{creator.description}</p>
          <div className="card-socials" style={{ justifyContent: 'center' }}>
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
            <button onClick={() => { onClose(); navigate(`/creators/${creator.id}/edit`); }}>Edit</button>
            <button onClick={() => setShowDeleteModal(true)}>Delete</button>
          </div>
        </div>
      </div>
      {showDeleteModal && (
        <DeleteModal
          name={creator.name}
          onConfirm={handleDelete}
          onCancel={onClose}
          deleting={deleting}
        />
      )}
    </>,
    document.body
  );
}

export default CreatorModal;
