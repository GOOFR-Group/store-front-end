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
 * The BestSellersSchema model module.
 * @module model/BestSellersSchema
 * @version 1.0.0
 */
export class BestSellersSchema {
  /**
   * Constructs a new <code>BestSellersSchema</code>.
   * @alias module:model/BestSellersSchema
   * @class
   * @param game {module:model/GameSchema} 
   * @param sales {Number} 
   */
  constructor(game, sales) {
    this.game = game;
    this.sales = sales;
  }

  /**
   * Constructs a <code>BestSellersSchema</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BestSellersSchema} obj Optional instance to populate.
   * @return {module:model/BestSellersSchema} The populated <code>BestSellersSchema</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new BestSellersSchema();
      if (data.hasOwnProperty('game'))
        obj.game = GameSchema.constructFromObject(data['game']);
      if (data.hasOwnProperty('sales'))
        obj.sales = ApiClient.convertToType(data['sales'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {module:model/GameSchema} game
 */
BestSellersSchema.prototype.game = undefined;

/**
 * @member {Number} sales
 */
BestSellersSchema.prototype.sales = undefined;

