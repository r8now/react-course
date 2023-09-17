import { useEffect, useState } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';


const MultipleReturnsFetchData = () => {
  const [user,setUser] = useState(null);
  const [isLoading,setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(()=>{

    const fetchUser = async ()=>{
      try{
        const resp = await fetch(url);
        if(!resp.ok){
          setIsError(true);
          setIsLoading(false);
          return;
        }
        const user = await resp.json();
        console.log(user)
     
       setUser(user);

      }catch(error) {
        setIsError(true);
        console.log(error);
      }
      setIsLoading(false)
    };
    fetchUser();

  },[])
    
  if (isLoading) {
    return <h2>loading </h2>;
  }
 
  
  if (isError) {
    return <h2>error </h2>;
  }
  const {avatar_url, name} = user;

  return (
    <div>
      <img style={{ width: "150px" }} src={avatar_url} alt={name} />
      <h2>{name}</h2>
    
    </div>
  );
};
export default MultipleReturnsFetchData;



