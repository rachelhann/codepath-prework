import { Link } from 'react-router-dom';

function Card({ id, name, url, description, imageURL }) {
  return (
    <div className="card">
      {imageURL && <img src={imageURL} alt={name} className="card-image" />}
      <h2>{name}</h2>
      <p>{description}</p>
      <a href={url} target="_blank" rel="noreferrer">
        {url}
      </a>
      <Link to={`/creators/${id}/edit`}>
        <button>Edit</button>
      </Link>
    </div>
  );
}

export default Card;
