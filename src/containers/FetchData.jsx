import { useEffect, useState } from "react";

const FetchData = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState("Loading...");
  //const test =[];

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=10&offset=10"
      );
      const data = await response.json();
      const pokemon = await Promise.all(data.results.map(...index=> 
        {const result = fetch(index.url).then(res => res.json())
        return result
    }))
    console.log(pokemon)

      setLoading(false);
      setData(pokemon);
    } catch (err) {
      setError(true);
      throw err;
    }
  };
  //console.log(data);

  useEffect(() => {
    fetchData();
  });

  if (error) {
    return <div>ERROR</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return <div>{data}</div>;
};

export default FetchData;