import { ReactNode, createContext, useState } from "react";
import { IUsers } from "../helpers/users";
import { FieldValues } from "react-hook-form";
import axios, { AxiosError } from "axios";

interface IUserContextProviderType {
  users: IUsers[] | undefined;
  setUsers: (data: IUsers[] | undefined) => void;
  open: boolean;
  setOpen: (data: boolean) => void;
  openUpdate: boolean;
  setOpenUpdate: (data: boolean) => void;
  handleCreateUser: (data: FieldValues) => void;
  handleDeleteUser: (id: number) => void;
  handleUpdateUser: (data: FieldValues) => void;
}

interface IUserContextProviderProps {
  children: ReactNode;
}

export const UserContext = createContext({} as IUserContextProviderType);

export function UserContextProvider({ children }: IUserContextProviderProps) {
  const [users, setUsers_] = useState<IUsers[]>();
  const [open, setOpen_] = useState(false);
  const [openUpdate, setOpenUpdate_] = useState(false);

  function setUsers(data: IUsers[] | undefined) {
    setUsers_(data);
  }

  function setOpen(data: boolean) {
    setOpen_(data);
  }

  function setOpenUpdate(data: boolean) {
    setOpenUpdate_(data);
  }

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
      setOpen(false);
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
      await axios.put(
        `http://localhost:3000/user/${id}`,
        dataForm,
        axiosConfig
      );
      alert("Usuário alterado com sucesso");
      setOpenUpdate(false);
    } catch (err) {
      const error = err as AxiosError;
      if (axios.isAxiosError(error)) {
        return alert(error.response!.data.message);
      }
      console.log(error);
    }
  }

  return (
    <UserContext.Provider
      value={{
        users,
        setUsers,
        open,
        setOpen,
        openUpdate,
        setOpenUpdate,
        handleCreateUser,
        handleDeleteUser,
        handleUpdateUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
