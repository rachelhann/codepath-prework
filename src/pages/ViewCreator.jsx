import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from '../client';
import { toUrl } from '../utils';

function ViewCreator() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [creator, setCreator] = useState(null);

  useEffect(() => {
    async function fetchCreator() {
      const { data, error } = await supabase
        .from('creator')
        .select()
        .eq('id', id);
      if (error) console.error(error);
      else setCreator(data[0]);
    }
    fetchCreator();
  }, [id]);

  if (!creator) return <p>Loading...</p>;

  return (
    <div>
      {creator.imageURL && <img src={creator.imageURL} alt={creator.name} />}
      <h1>{creator.name}</h1>
      <p>{creator.description}</p>
      <div className="card-socials">
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
      <button onClick={() => navigate(`/creators/${creator.id}/edit`)}>Edit</button>
    </div>
  );
}

export default ViewCreator;
