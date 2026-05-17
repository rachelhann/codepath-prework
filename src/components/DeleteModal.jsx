import { createPortal } from 'react-dom';

function DeleteModal({ name, onConfirm, onCancel, deleting }) {
  return createPortal(
    <div className="modal-overlay" onClick={(e) => e.stopPropagation()}>
      <div className="modal">
        <h2>Delete Creator</h2>
        <p>Are you sure you want to permanently delete <strong>{name}</strong>? This cannot be undone.</p>
        <div className="modal-buttons">
          <button onClick={onConfirm} className="modal-delete-btn" disabled={deleting}>
            {deleting ? 'Deleting...' : 'Delete'}
          </button>
          <button onClick={onCancel} disabled={deleting}>Cancel</button>
        </div>
      </div>
    </div>,
    document.body
  );
}

export default DeleteModal;
