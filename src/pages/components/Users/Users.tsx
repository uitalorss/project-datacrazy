import { Trash } from "phosphor-react";
import { IUsers } from "../../../helpers/users";
import { ListItem } from "./styles";

interface IUserProps {
  user: IUsers;
  handledeleteUser: (id: number) => void;
}

export function Users({ user, handledeleteUser }: IUserProps) {
  return (
    <ListItem>
      <p>{user.name}</p>
      <p>{user.email}</p>
      <p>{user.phone}</p>
      <button onClick={() => handledeleteUser(user.id)}>
        <Trash size={24} />
      </button>
    </ListItem>
  );
}
