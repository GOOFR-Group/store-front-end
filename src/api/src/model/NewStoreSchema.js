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
import {GameSchema} from './GameSchema';

/**
 * The NewStoreSchema model module.
 * @module model/NewStoreSchema
 * @version 1.0.0
 */
export class NewStoreSchema {
  /**
   * Constructs a new <code>NewStoreSchema</code>.
   * @alias module:model/NewStoreSchema
   * @class
   * @param featured {Array.<module:model/GameSchema>} 
   * @param _new {Array.<module:model/GameSchema>} 
   */
  constructor(featured, _new) {
    this.featured = featured;
    this._new = _new;
  }

  /**
   * Constructs a <code>NewStoreSchema</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NewStoreSchema} obj Optional instance to populate.
   * @return {module:model/NewStoreSchema} The populated <code>NewStoreSchema</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new NewStoreSchema();
      if (data.hasOwnProperty('featured'))
        obj.featured = ApiClient.convertToType(data['featured'], [GameSchema]);
      if (data.hasOwnProperty('new'))
        obj._new = ApiClient.convertToType(data['new'], [GameSchema]);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/GameSchema>} featured
 */
NewStoreSchema.prototype.featured = undefined;

/**
 * @member {Array.<module:model/GameSchema>} _new
 */
NewStoreSchema.prototype._new = undefined;

