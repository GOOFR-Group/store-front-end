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
import {ApiClient} from '../ApiClient';

/**
 * The ClientWalletSchema model module.
 * @module model/ClientWalletSchema
 * @version 1.0.0
 */
export class ClientWalletSchema {
  /**
   * Constructs a new <code>ClientWalletSchema</code>.
   * @alias module:model/ClientWalletSchema
   * @class
   * @param balance {Number} 
   * @param coin {String} 
   */
  constructor(balance, coin) {
    this.balance = balance;
    this.coin = coin;
  }

  /**
   * Constructs a <code>ClientWalletSchema</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ClientWalletSchema} obj Optional instance to populate.
   * @return {module:model/ClientWalletSchema} The populated <code>ClientWalletSchema</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ClientWalletSchema();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('id_client'))
        obj.idClient = ApiClient.convertToType(data['id_client'], 'String');
      if (data.hasOwnProperty('balance'))
        obj.balance = ApiClient.convertToType(data['balance'], 'Number');
      if (data.hasOwnProperty('coin'))
        obj.coin = ApiClient.convertToType(data['coin'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} id
 */
ClientWalletSchema.prototype.id = undefined;

/**
 * @member {String} idClient
 */
ClientWalletSchema.prototype.idClient = undefined;

/**
 * @member {Number} balance
 */
ClientWalletSchema.prototype.balance = undefined;

/**
 * @member {String} coin
 */
ClientWalletSchema.prototype.coin = undefined;

