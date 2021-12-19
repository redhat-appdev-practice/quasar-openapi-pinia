/* tslint:disable */
/* eslint-disable */
/**
 * Todo
 * My Todo list API
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: deven.phillips@redhat.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { Todo } from '../models';
/**
 * TodoApi - axios parameter creator
 * @export
 */
export const TodoApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Get all todos
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllTodos: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/todos`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * TodoApi - functional programming interface
 * @export
 */
export const TodoApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = TodoApiAxiosParamCreator(configuration)
    return {
        /**
         * Get all todos
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAllTodos(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Todo>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAllTodos(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * TodoApi - factory interface
 * @export
 */
export const TodoApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = TodoApiFp(configuration)
    return {
        /**
         * Get all todos
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllTodos(options?: any): AxiosPromise<Array<Todo>> {
            return localVarFp.getAllTodos(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * TodoApi - object-oriented interface
 * @export
 * @class TodoApi
 * @extends {BaseAPI}
 */
export class TodoApi extends BaseAPI {
    /**
     * Get all todos
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TodoApi
     */
    public getAllTodos(options?: AxiosRequestConfig) {
        return TodoApiFp(this.configuration).getAllTodos(options).then((request) => request(this.axios, this.basePath));
    }
}
