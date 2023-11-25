import {createClient} from 'contentful';
import {useState, useEffect} from 'react';

const client = createClient({
  space: "3uxynjsl6m6l",
  environment: "master",
  accessToken: "LcX3lDatojhudLOXL94z1YCdGey2TJBdSosQ2qTvbXY",
});

const useFetchProjects = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    client
      .getEntries({ content_type: "projects" })
      .then((response) => {
        setProjects(response.items);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setError(true);
      });
  }, []);

  return { projects, loading, error };
};


client.getEntries({content_type:"projects"}).then((response) => console.log(response.items));