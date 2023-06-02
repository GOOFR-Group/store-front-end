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
import {ErrorSchema} from '../model/ErrorSchema';
import {GameSchema} from '../model/GameSchema';

/**
* Library service.
* @module api/LibraryApi
* @version 1.0.0
*/
export class LibraryApi {

    /**
    * Constructs a new LibraryApi. 
    * @alias module:api/LibraryApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the libraryGet operation.
     * @callback moduleapi/LibraryApi~libraryGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GameSchema>{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets all the games the client has in his library
     * @param {String} id Client ID
     * @param {module:api/LibraryApi~libraryGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    libraryGet(id, callback) {
      
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling libraryGet");
      }

      let pathParams = {
        
      };
      let queryParams = {
        'id': id
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [GameSchema];

      return this.apiClient.callApi(
        '/library', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}