import { useQueries, useQuery } from "@tanstack/react-query";
import SingleItem from "./SingleItem";
import customFetch from "./utils";

const Items = () => {
  const {isLoading,data,error,isError} = useQuery({
    queryKey: ["tasks"],
    queryFn: () => customFetch.get("/"),
  });
  
if(isLoading){
  return <div>Loading...</div>
}
if(isError){
  return <div>{error.message}</div>
}


  return (
    <div className="items">
      {data.data.taskList.map((item) => {
        return <SingleItem key={item.id} item={item} />;
      })}
    </div>
  );
};
export default Items;
