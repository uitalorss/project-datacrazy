import { useEffect, useState } from "react";
import { Container, Content, FormUser, Header } from "./styles";
import axios, { AxiosError } from "axios";
import { IUsers } from "../helpers/users";
import { ListUsers } from "./components/ListUsers/ListUsers";
import { FieldValues, useForm } from "react-hook-form";

export function Main() {
  const [users, setUsers] = useState<IUsers[]>();
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    async function load() {
      try {
        const users = await axios.get("http://localhost:3000/users");
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
      await axios.post("http://localhost:3000/user", data, axiosConfig);
      alert("Usuário criado com sucesso!");
    } catch (err) {
      const error = err as Error | AxiosError;
      if (!axios.isAxiosError(error)) {
        return console.log(error);
      }
      return alert(error.message);
    }
  }

  return (
    <Container>
      <Header>
        <h2>Cadastro de usuários</h2>
      </Header>
      <Content>
        <FormUser>
          <input type="text" placeholder="Nome" {...register("name")} />
          <input type="text" placeholder="E-mail" {...register("email")} />
          <input type="text" placeholder="Telefone" {...register("phone")} />
          <button onClick={() => handleSubmit(handleCreateUser)()}>
            Adicionar
          </button>
        </FormUser>
        {users ? (
          <ListUsers users={users} />
        ) : (
          <p>Não há dados para serem mostrados</p>
        )}
      </Content>
    </Container>
  );
}
