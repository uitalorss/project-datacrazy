import { IUsers } from "../../../helpers/users";
import { Users } from "../Users/Users";
import { ListContainer } from "./styles";

interface IUserListProps {
  users: IUsers[];
  handledeleteUser: (id: number) => void;
}

export function ListUsers({ users, handledeleteUser }: IUserListProps) {
  return (
    <ListContainer>
      {users.map((user) => {
        return (
          <Users
            key={user.id}
            user={user}
            handledeleteUser={handledeleteUser}
          />
        );
      })}
    </ListContainer>
  );
}
