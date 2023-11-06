import { ListItem } from "./styles";

interface IUserProps {
  name: string;
  email: string;
  phone: string;
  created_at: string;
  updated_at: string;
  deleted_at: string;
}

export function Users(user: IUserProps) {
  return (
    <ListItem>
      <p>{user.name}</p>
      <p>{user.email}</p>
      <p>{user.phone}</p>
    </ListItem>
  );
}
