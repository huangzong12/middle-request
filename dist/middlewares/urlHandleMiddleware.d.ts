import { FetchParams, MiddleRequest } from "../index";
declare function urlHandleProxy(this: MiddleRequest, next: Function): (params: FetchParams) => any;
export default urlHandleProxy;
