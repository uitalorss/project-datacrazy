import * as Dialog from "@radix-ui/react-dialog";
import { Content, Overlay } from "./styles";
import { Button } from "../../styles";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { UserContext } from "../../../contexts/UserContext";

export function NewUserModal() {
  const { register, handleSubmit } = useForm();
  const { handleCreateUser } = useContext(UserContext);

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <div>
          <h2>Novo usuário</h2>
          <input type="text" placeholder="Nome" {...register("name")} />
          <input type="text" placeholder="E-mail" {...register("email")} />
          <input type="text" placeholder="Telefone" {...register("phone")} />
          <Button onClick={() => handleSubmit(handleCreateUser)()}>
            Adicionar
          </Button>
        </div>
      </Content>
    </Dialog.Portal>
  );
}
