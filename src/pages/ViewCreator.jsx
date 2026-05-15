function ViewCreator({ creator }) {
  if (!creator) return <p>Creator not found!</p>;

  return (
    <div>
      <h1>{creator.name}</h1>
      {creator.imageURL && <img src={creator.imageURL} alt={creator.name} />}
      <p>{creator.description}</p>
      <a href={creator.url} target="_blank" rel="noreferrer">
        {creator.url}
      </a>
    </div>
  );
}

export default ViewCreator;
