import { Pencil, Trash } from "phosphor-react";
import { IUsers } from "../../../helpers/users";
import { ListItem } from "./styles";
import * as Dialog from "@radix-ui/react-dialog";
import { UpdateUserModal } from "../UpdateUserModal";
import { useContext } from "react";
import { UserContext } from "../../../contexts/UserContext";

interface IUserProps {
  user: IUsers;
}

export function Users({ user }: IUserProps) {
  const { handleDeleteUser, openUpdate, setOpenUpdate } =
    useContext(UserContext);

  return (
    <ListItem>
      <p>{user.name}</p>
      <p>{user.email}</p>
      <p>{user.phone}</p>
      <Dialog.Root open={openUpdate} onOpenChange={setOpenUpdate}>
        <Dialog.Trigger asChild>
          <button>
            <Pencil size={24} />
          </button>
        </Dialog.Trigger>
        <UpdateUserModal userId={user.id} />
      </Dialog.Root>

      <button onClick={() => handleDeleteUser(user.id)}>
        <Trash size={24} />
      </button>
    </ListItem>
  );
}
