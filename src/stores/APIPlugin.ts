
import { Configuration, TodoApi } from "@/sdk";
import axios, { AxiosInstance } from "axios";
import { PiniaPluginContext } from "pinia";

declare module 'pinia' {
    
    export interface PiniaCustomProperties<Id, S, G, A> {
        id: Id
        state?: () => S
        getters?: G
        actions?: A
        todoApi: TodoApi
        axios: AxiosInstance
    }

    export interface DefineStoreOptionsInPlugin<Id extends string, S extends StateTree, G, A> extends Omit<DefineStoreOptions<Id, S, G, A>, 'id' | 'actions'> {
        apiConfig: Configuration
    }
}

export const APIPlugin = ({options, store}: PiniaPluginContext): void => {
    store.axios = axios
    const { apiConfig } = options;

    if (apiConfig) {
        store.todoApi = new TodoApi(apiConfig)
    } else {
        store.todoApi = new TodoApi()
    }
}