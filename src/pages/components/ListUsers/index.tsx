import { IUsers } from "../../../helpers/users";
import { Users } from "../Users";
import { ListContainer } from "./styles";

interface IUserListProps {
  users: IUsers[];
}

export function ListUsers({ users }: IUserListProps) {
  return (
    <ListContainer>
      {users.map((user) => {
        return <Users key={user.id} user={user} />;
      })}
    </ListContainer>
  );
}
