import { Pencil, Trash } from "phosphor-react";
import { IUsers } from "../../../helpers/users";
import { ListItem } from "./styles";
import { FieldValues } from "react-hook-form";
import * as Dialog from "@radix-ui/react-dialog";
import { UpdateUserModal } from "../UpdateUserModal";
import { useState } from "react";

interface IUserProps {
  user: IUsers;
  handledeleteUser: (id: number) => void;
  handleUpdateUser: (data: FieldValues) => void;
}

export function Users({
  user,
  handledeleteUser,
  handleUpdateUser,
}: IUserProps) {
  const [open, setOpen] = useState(false);

  return (
    <ListItem>
      <p>{user.name}</p>
      <p>{user.email}</p>
      <p>{user.phone}</p>
      <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Trigger asChild>
          <button>
            <Pencil size={24} />
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
