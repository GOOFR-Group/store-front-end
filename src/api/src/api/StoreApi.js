/*
 * GOOFR Store
 * API documentation for GOOFR Store, a digital game store.
 *
 * OpenAPI spec version: 1.0.0
 * Contact: help.goofrportugal@gmail.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.33
 *
 * Do not edit the class manually.
 *
 */
import {ApiClient} from "../ApiClient";
import {NewStoreSchema} from '../model/NewStoreSchema';
import {NoteworthyStoreSchema} from '../model/NoteworthyStoreSchema';
import {YourStoreSchema} from '../model/YourStoreSchema';

/**
* Store service.
* @module api/StoreApi
* @version 1.0.0
*/
export class StoreApi {

    /**
    * Constructs a new StoreApi. 
    * @alias module:api/StoreApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the newStoreGet operation.
     * @callback moduleapi/StoreApi~newStoreGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/NewStoreSchema{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns the new games from the store
     * Returns the most recently released games. If provided, filters games by their tags
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.ids Tag ids
     * @param {module:api/StoreApi~newStoreGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    newStoreGet(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        
      };
      let queryParams = {
        'ids': this.apiClient.buildCollectionParam(opts['ids'], 'multi')
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = NewStoreSchema;

      return this.apiClient.callApi(
        '/newStore', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the noteworthyStoreGet operation.
     * @callback moduleapi/StoreApi~noteworthyStoreGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/NoteworthyStoreSchema{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns featured games from the store
     * Returns the most purchased games from the store. If provided, filters games by their tags
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.ids Tag ids
     * @param {module:api/StoreApi~noteworthyStoreGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    noteworthyStoreGet(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        
      };
      let queryParams = {
        'ids': this.apiClient.buildCollectionParam(opts['ids'], 'multi')
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = NoteworthyStoreSchema;

      return this.apiClient.callApi(
        '/noteworthyStore', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the yourStoreGet operation.
     * @callback moduleapi/StoreApi~yourStoreGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/YourStoreSchema{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Client&#x27;s main store
     * @param {Object} opts Optional parameters
     * @param {String} opts.id Client ID
     * @param {module:api/StoreApi~yourStoreGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    yourStoreGet(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        
      };
      let queryParams = {
        'id': opts['id']
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = YourStoreSchema;

      return this.apiClient.callApi(
        '/yourStore', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}