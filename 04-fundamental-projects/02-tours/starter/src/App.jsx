import { useEffect, useState } from "react";
import Loading from "./Loading";

const url = 'https://course-api.com/react-tours-project';

const App = () => {
  const [isLoading, setIsLoading] =useState(true);
  const [tours, setTours] = useState([]);
  
  const fetchTours = async ()=> {
    setIsLoading(true)
    try{
      const response = await fetch(url);
      const tours = await response.json();
      setTours(tours);
      console.log(tours)
    }catch(errors){
console.log(errors)
    }
    setIsLoading(false);
  }

  useEffect(()=> {
fetchTours();
  },[])

if(isLoading){
  return <main>
    <Loading/>
  </main>
}

  return( 
  
  
  <h2>hello</h2>
  
  );
};
export default App;
