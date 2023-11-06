import { Container, Content, FormUser, Header } from "./styles";

export function Main() {
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
      </Content>
    </Container>
  );
}
