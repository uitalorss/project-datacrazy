import * as Dialog from "@radix-ui/react-dialog";
import { Content, Overlay } from "./styles";
import { Button } from "../../styles";
import { FieldValues, useForm } from "react-hook-form";

interface INewUserModalProps {
  handleUpdateUser: (data: FieldValues) => void;
  userId: number;
}

export function UpdateUserModal({
  userId,
  handleUpdateUser,
}: INewUserModalProps) {
  const { register, handleSubmit, setValue } = useForm();

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
            }}
          >
            Adicionar
          </Button>
        </div>
      </Content>
    </Dialog.Portal>
  );
}
