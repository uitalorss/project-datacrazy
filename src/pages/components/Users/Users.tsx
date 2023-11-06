import { CheckCircle, Trash } from "phosphor-react";
import { IUsers } from "../../../helpers/users";
import { ListItem } from "./styles";
import { FieldValues } from "react-hook-form";
import * as Dialog from "@radix-ui/react-dialog";
import { UpdateUserModal } from "../UpdateUserModal/UpdateUserModal";

interface IUserProps {
  user: IUsers;
  handledeleteUser: (id: number) => void;
  handleUpdateUser: (data: FieldValues, id: number) => void;
}

export function Users({
  user,
  handledeleteUser,
  handleUpdateUser,
}: IUserProps) {
  return (
    <ListItem>
      <p>{user.name}</p>
      <p>{user.email}</p>
      <p>{user.phone}</p>
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <button>
            <CheckCircle size={24} />
          </button>
        </Dialog.Trigger>
        <UpdateUserModal handleUpdateUser={handleUpdateUser} userId={user.id} />
      </Dialog.Root>

      <button onClick={() => handledeleteUser(user.id)}>
        <Trash size={24} />
      </button>
    </ListItem>
  );
}
