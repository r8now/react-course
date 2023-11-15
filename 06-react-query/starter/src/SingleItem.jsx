import { useMutation, useQueryClient } from "@tanstack/react-query";

const SingleItem = ({ item }) => {
  useQueryClient = useQueryClient();
  const {mutate:editTask} =  useMutation({
    mutationFn: ({taskId,isDone}) => {
      return customFetch.patch(`/${taskId}`,{isDone});
    },
    onSuccess:()=> {
      queryClient.invalidateQueries({queryKey:['tasks']});
      toast.success('task updated');
    },
  });

    const { mutate: deleteTask, isLoading } = useMutation({
      mutationFn: (taskId) => {
        return customFetch.delete(`/${taskId}`);
      },
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["tasks"] });
        toast.success("task deleted");
      },
    });
  return (
    <div className='single-item'>
      <input
        type='checkbox'
        checked={item.isDone}
        onChange={() => editTask({taskId:item._id,isDone:!item.isDone})}
      />
      <p
        style={{
          textTransform: 'capitalize',
          textDecoration: item.isDone && 'line-through',
        }}
      >
        {item.title}
      </p>
      <button
        className='btn remove-btn'
        type='button'
        disabled={isLoading}
        onClick={() =>deleteTask(item._id)}
      >
        delete
      </button>
    </div>
  );
};
export default SingleItem;
