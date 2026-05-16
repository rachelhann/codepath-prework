import Card from '../components/Card';

function ShowCreators({ creators = [] }) {
  return (
    <div>
      <h1>Content Creators</h1>
      {creators.length === 0 ? (
        <p>No content creators yet. Add one!</p>
      ) : (
        <div className="creators-grid">
          {creators.map((creator) => (
            <Card
              key={creator.id}
              name={creator.name}
              url={creator.url}
              description={creator.description}
              imageURL={creator.imageURL}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default ShowCreators;
