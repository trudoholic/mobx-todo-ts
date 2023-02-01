import { createContext } from "react";
import { TodoStore } from "./TodoStore";
import { makeAutoObservable } from "mobx";

export const rootStoreContext = createContext(makeAutoObservable({
    todoStore: new TodoStore()
}));
