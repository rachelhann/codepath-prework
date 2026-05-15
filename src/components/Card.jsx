function Card({ name, url, description, imageURL }) {
  return (
    <div className="card">
      {imageURL && <img src={imageURL} alt={name} className="card-image" />}
      <h2>{name}</h2>
      <p>{description}</p>
      <a href={url} target="_blank" rel="noreferrer">
        {url}
      </a>
    </div>
  );
}

export default Card;
