import { FieldValues } from "react-hook-form";
import { IUsers } from "../../../helpers/users";
import { Users } from "../Users/Users";
import { ListContainer } from "./styles";

interface IUserListProps {
  users: IUsers[];
  handledeleteUser: (id: number) => void;
  handleUpdateUser: (data: FieldValues, id: number) => void;
}

export function ListUsers({
  users,
  handledeleteUser,
  handleUpdateUser,
}: IUserListProps) {
  return (
    <ListContainer>
      {users.map((user) => {
        return (
          <Users
            key={user.id}
            user={user}
            handledeleteUser={handledeleteUser}
            handleUpdateUser={handleUpdateUser}
          />
        );
      })}
    </ListContainer>
  );
}
