import { Link } from 'react-router-dom';
import Card from '../components/Card';

function ShowCreators({ creators = [], onDelete }) {
  return (
    <div>
      <h1>Content Creators</h1>
      <Link to="/new"><button>Add Creator</button></Link>
      {creators.length === 0 ? (
        <p>No content creators yet. Add one!</p>
      ) : (
        <div className="creators-grid">
          {creators.map((creator) => (
            <Card
              key={creator.id}
              id={creator.id}
              name={creator.name}
              url={creator.url}
              description={creator.description}
              imageURL={creator.imageURL}
              onDelete={onDelete}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default ShowCreators;
