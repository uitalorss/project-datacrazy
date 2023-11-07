import * as Dialog from "@radix-ui/react-dialog";
import { Content, Overlay } from "./styles";
import { Button } from "../../styles";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { UserContext } from "../../../contexts/UserContext";

interface INewUserModalProps {
  userId: number;
}

export function UpdateUserModal({ userId }: INewUserModalProps) {
  const { register, handleSubmit, setValue, reset } = useForm();
  const { handleUpdateUser } = useContext(UserContext);

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <div>
          <h2>Atualizar usuário</h2>

          <input type="text" placeholder="Nome" {...register("name")} />
          <input type="text" placeholder="E-mail" {...register("email")} />
          <input type="text" placeholder="Telefone" {...register("phone")} />
          <Button
            onClick={() => {
              setValue("id", userId);
              handleSubmit(handleUpdateUser)();
              reset({});
            }}
          >
            Atualizar
          </Button>
        </div>
      </Content>
    </Dialog.Portal>
  );
}
