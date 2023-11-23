import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const url =
  "https://api.unsplash.com/search/photos?client_id=BFOFL32zWY1GxEYBU-ME5cL5qq_6jr906O-rNGfcqDI&query=office";

const Gallery = () => {
  const response = useQuery({
    queryKey: ["images"],
    queryFn: async () => {
      const result = await axios.get(url);
      return result.data;
    },
  });
  console.log(response);
  if (response.isLoading) {
    return (
      <section className="image-container">
        <div>Loading...</div>
      </section>
    );
  }
  if (response.isError) {
    return (
      <section className="image-container">
        <div>There was an error...</div>
      </section>
    );
  }
const results = response.data.results;
if(results.length === 0){
    return (
      <section className="image-container">
        <div>No results found...</div>
      </section>
    );
}
  return <section className="image-container">
    {results.map((item)=>{
      const url = item?.urls?.regular;
      return <img src={url} alt={item.alt_description} key={item.id} className="img">
      </img>

    }
    )}
  </section>;
};

export default Gallery;
