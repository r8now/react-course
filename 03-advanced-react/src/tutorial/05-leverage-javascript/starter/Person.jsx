import avatar from "../../../assets/default-avatar.svg"
export function Person({
  id,
  name,
  images,
  nickName
}) {
  const img = images?.[0]?.small?.url ?? avatar;
  return (
    <div key={id}>
      <img src={img} alt={images} style={{width:"50px"}} />
      <h4>{name}</h4>
      <p>Nickname {nickName}</p>
    </div>
  );
}
  