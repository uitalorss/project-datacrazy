import { useContext, useEffect, useState } from "react";
import {
  Button,
  Container,
  Content,
  FilterContainer,
  FormUser,
  Header,
} from "./styles";
import axios from "axios";
import { ListUsers } from "./components/ListUsers";
import { useForm } from "react-hook-form";
import * as Dialog from "@radix-ui/react-dialog";
import { NewUserModal } from "./components/NewUserModal";
import { PlusCircle } from "phosphor-react";
import { UserContext } from "../contexts/UserContext";

export function Main() {
  const { users, setUsers, open, setOpen } = useContext(UserContext);
  const { register, getValues } = useForm();

  const [filter, setFilter] = useState("");

  useEffect(() => {
    async function load() {
      try {
        const users = await axios.get(`http://localhost:3000/users${filter}`);
        setUsers(users.data);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        console.log(error.response);
      }
    }
    load();
  });

  return (
    <Container>
      <Header>
        <h2>Cadastro de usuários</h2>
        <Dialog.Root open={open} onOpenChange={setOpen}>
          <Dialog.Trigger asChild>
            <Button>
              <PlusCircle size={24} />
              <span>Adicionar Usuário</span>
            </Button>
          </Dialog.Trigger>
          <NewUserModal />
        </Dialog.Root>
      </Header>
      <Content>
        <FormUser>
          <input
            type="text"
            placeholder="Nome do usuário"
            {...register("search")}
          />
          <Button
            onClick={() => setFilter(`/search?name=${getValues("search")}`)}
          >
            Pesquisar
          </Button>
        </FormUser>
        <FilterContainer>
          <Button onClick={() => setFilter("/younger")}>Mais recentes</Button>
          <Button onClick={() => setFilter("/older")}>Mais antigos</Button>
        </FilterContainer>
        {users ? (
          <ListUsers users={users} />
        ) : (
          <p>Não há dados para serem mostrados</p>
        )}
      </Content>
    </Container>
  );
}
