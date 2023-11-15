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
        onClick={() => console.log('delete task')}
      >
        delete
      </button>
    </div>
  );
};
export default SingleItem;
