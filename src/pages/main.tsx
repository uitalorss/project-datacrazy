import { useEffect, useState } from "react";
import { Container, Content, FormUser, Header } from "./styles";
import axios from "axios";
import { IUsers } from "../helpers/users";
import { ListUsers } from "./components/ListUsers/ListUsers";

export function Main() {
  const [users, setUsers] = useState<IUsers[]>();
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
  return (
    <Container>
      <Header>
        <h2>Cadastro de usuários</h2>
      </Header>
      <Content>
        <FormUser>
          <input type="text" placeholder="Nome" />
          <input type="text" placeholder="E-mail" />
          <input type="text" placeholder="Telefone" />
          <button>Adicionar</button>
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
