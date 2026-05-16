import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase } from '../client';

function ViewCreator() {
  const { id } = useParams();
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
      <a href={creator.url} target="_blank" rel="noreferrer">
        {creator.url}
      </a>
      <Link to={`/creators/${creator.id}/edit`}>
        <button>Edit</button>
      </Link>
    </div>
  );
}

export default ViewCreator;
