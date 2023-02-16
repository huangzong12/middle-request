type methodType = "POST" | "GET" | "DELETE" | "PUT" | "PATCH" | "OPTIONS" | "CONNECT" | "TRACE" | "post" | "get" | "delete" | "put" | "patch" | "options" | "connect" | "trace";
export interface FetchParams {
    url: string;
    method?: methodType;
    data?: any;
    header?: {
        [key: string]: string | number;
    };
    timeout?: number;
    [key: string]: any;
}
export interface Fetcher {
    (params: FetchParams): Promise<any>;
}
export interface RequestConfig {
    prefix: string | ((param: FetchParams) => string);
    [key: string]: any;
}
export interface RequestInstanceConfig {
    prefix: string | ((param: FetchParams) => string);
    [key: string]: any;
}
export interface ConstructorOptions {
    fetcher: Fetcher;
    config: RequestConfig;
}
declare class MiddleRequest {
    _id: string;
    config: RequestInstanceConfig;
    constructor();
    init({ fetcher, config }: ConstructorOptions): void;
    fetch: Fetcher;
    patch: Fetcher;
    get: Fetcher;
    post: Fetcher;
    put: Fetcher;
    delete: Fetcher;
    options: Fetcher;
    connect: Fetcher;
    trace: Fetcher;
    applyMiddleware(...middlewares: Function[]): void;
    create(params: ConstructorOptions): MiddleRequest;
}
declare const request: MiddleRequest;
export default request;
export { MiddleRequest, };
