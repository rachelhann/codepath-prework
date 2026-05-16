import { Link } from 'react-router-dom';
import Card from '../components/Card';

function ShowCreators({ creators = [], onDelete }) {
  return (
    <div>
      <div className="banner">
        <div className="banner-glow" />
        <div className="banner-content">
          <p className="banner-eyebrow">Welcome to the</p>
          <h1 className="banner-title">Creatorverse</h1>
          <p className="banner-sub">A curated universe of creators from across the web!</p>
          <Link to="/new"><button className="banner-btn">+ Add a Creator</button></Link>
        </div>
      </div>
      <div className="content">
        {creators.length === 0 ? (
          <p>No content creators yet. Add one!</p>
        ) : (
          <div className="creators-grid">
            {creators.map((creator) => (
              <Card
                key={creator.id}
                id={creator.id}
                name={creator.name}
                description={creator.description}
                imageURL={creator.imageURL}
                youtube={creator.youtube}
                x={creator.x}
                instagram={creator.instagram}
                onDelete={onDelete}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default ShowCreators;
