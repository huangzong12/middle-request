declare const urlPartNames: string[];
type urlPartNames = "url" | "scheme" | "slash" | "host" | "port" | "path" | "query" | "hash";
/**
 * 拼接url query, 返回值无前置问号
 *
 * @param {any} [options={}]
 * @param {Array<string>} [exceptQuery=[]]
 * @returns {string}
 * @example buildUrlQuery({ name: 'boyd', age: 29}) => 'name=boyd&age=29'
 */
declare function buildUrlQuery(options?: any, exceptQuery?: Array<string>): string;
/**
 * 获取url的某个query参数
 *
 * @param {string} url
 * @param {string} queryName
 * @returns {string}
 * @example getQueryPart('http://www.xyb2b.com?age=29&name=boyd','age') => '29'
 */
declare function getQueryPart(url: string, queryName: string): string;
/**
 * 拼接url
 *
 * @param {string} url
 * @param {any} options query参数对象
 * @param {Array<string>} [exceptQuery=[]]
 * @returns {string}
 * @example buildUrl('www.xyb2b.com', { name: 'boyd', age: 29}) => 'www.xyb2b.com?name=boyd&age=29'
 */
declare function buildUrl(url: string, options: any, exceptQuery?: Array<string>): string;
/**
 * 获取url某一组成部分
 *
 * @param {string} url
 * @param {string} partName
 * @returns {string}
 * @example getUrlPart('www.xy2b2.com/test?name=boyd&age=29#myhash', host) => wwww.xy2b2.com
 */
declare function getUrlPart(url: string, partName: string): string;
/**
 * 获取query字符串
 *
 * @param {string} url
 * @returns {string}
 * @example getQuery('www.xy2b2.com/test?name=boyd&age=29') => 'name=boyd&age=29'
 */
declare function getQuery(url: string): string;
/**
 * 给url 拼接query参数
 *
 * @param {string} url
 * @param {any} options
 * @param {Array<string>} exceptQuery
 * @returns {string}
 * @example appendQuery('www.xy2b2.com/test#myhash',{ name: 'boyd', age: 29 }) => 'www.xy2b2.com/test?name=boyd&age=29#myhash'
 */
declare function appendQuery(url: string, options: any, exceptQuery?: Array<string>): string;
/**
 * 给url hash后追加拼接hash query参数
 *
 * @param {string} url
 * @param {any} options
 * @param {Array<string>} exceptQuery
 * @returns {string}
 * @example appendHashQuery('www.xy2b2.com/test#myhash', { name : 'boyd', age: 29 }) => 'www.xy2b2.com/test#myhash?name=boyd&age=29'
 */
declare function appendHashQuery(url: string, options: any, exceptQuery: Array<string>): string;
/**
 * 获取hash中的query字符串
 *
 * @param {string} hash
 * @returns {string}
 * @example getHashQuery('www.xy2b2.com/test#myhash?name=boyd&age=29') => 'name=boyd&age=29'
 */
declare function getHashQuery(hash: string): string;
/**
 * 获取hash query对象
 *
 * @param {string} hash
 * @returns {any}
 * @example getHashQueryObject('www.xy2b2.com/test#myhash?name=boyd&age=29') => { name: 'boyd', age: 29 }
 */
declare function getHashQueryObject(hash: string): any;
/**
 * 获取hash query中某个参数
 *
 * @param {string} hash
 * @param {string} partName
 * @returns {string}
 * @example getHashQueryPart('www.xy2b2.com/test#myhash?name=boyd&age=29', 'name') => 'boyd'
 */
declare function getHashQueryPart(hash: string, partName: urlPartNames): string;
/**
 * 解析url 所有query返回一个对象
 *
 * @param {string} url
 * @returns {any}
 * @example getQueryObject('www.xy2b2.com/test?name=boyd&age=29') => { name: 'boyd', age: 29 }
 */
declare function getQueryObject(url: string): any;
declare const _default: {
    buildUrl: typeof buildUrl;
    buildUrlQuery: typeof buildUrlQuery;
    getQuery: typeof getQuery;
    getQueryPart: typeof getQueryPart;
    getQueryObject: typeof getQueryObject;
    getUrlPart: typeof getUrlPart;
    appendQuery: typeof appendQuery;
    getHashQuery: typeof getHashQuery;
    getHashQueryObject: typeof getHashQueryObject;
    getHashQueryPart: typeof getHashQueryPart;
    appendHashQuery: typeof appendHashQuery;
};
export default _default;
