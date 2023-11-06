import { useEffect, useState } from "react";
import {
  Button,
  Container,
  Content,
  FilterContainer,
  FormUser,
  Header,
} from "./styles";
import axios, { AxiosError } from "axios";
import { IUsers } from "../helpers/users";
import { ListUsers } from "./components/ListUsers/ListUsers";
import { FieldValues, useForm } from "react-hook-form";
import * as Dialog from "@radix-ui/react-dialog";
import { NewUserModal } from "./components/NewUserModal/NewUserModal";
import { PlusCircle } from "phosphor-react";

export function Main() {
  const [users, setUsers] = useState<IUsers[]>();
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

  async function handleCreateUser(data: FieldValues) {
    const axiosConfig = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const createUser = await axios.post(
        "http://localhost:3000/user",
        data,
        axiosConfig
      );
      alert(createUser.data.message);
    } catch (err) {
      const error = err as AxiosError;
      if (axios.isAxiosError(error)) {
        return alert(error.response!.data.message);
      }
      console.log(error);
    }
  }

  async function handleDeleteUser(id: number) {
    try {
      await axios.delete(`http://localhost:3000/user/${id}`);
    } catch (err) {
      const error = err as AxiosError;
      if (!axios.isAxiosError(error)) {
        console.log(error);
      }
      alert(error.message);
    }
  }

  async function handleUpdateUser(data: FieldValues) {
    const { id, ...dataForm } = data;
    const axiosConfig = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const updateUser = await axios.put(
        `http://localhost:3000/user/${id}`,
        dataForm,
        axiosConfig
      );
      alert("Usuário alterado com sucesso");
    } catch (err) {
      const error = err as AxiosError;
      if (axios.isAxiosError(error)) {
        return alert(error.response!.data.message);
      }
      console.log(error);
    }
  }

  return (
    <Container>
      <Header>
        <h2>Cadastro de usuários</h2>
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <Button>
              <PlusCircle size={24} />
              <span>Adicionar Usuário</span>
            </Button>
          </Dialog.Trigger>
          <NewUserModal handleCreateUser={handleCreateUser} />
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
          <Button onClick={() => setFilter("/younger")}>Mais novos</Button>
          <Button onClick={() => setFilter("/older")}>Mais velhos</Button>
        </FilterContainer>
        {users ? (
          <ListUsers
            handledeleteUser={handleDeleteUser}
            handleUpdateUser={handleUpdateUser}
            users={users}
          />
        ) : (
          <p>Não há dados para serem mostrados</p>
        )}
      </Content>
    </Container>
  );
}
