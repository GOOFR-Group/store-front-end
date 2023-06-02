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
 * The NewsletterSchema model module.
 * @module model/NewsletterSchema
 * @version 1.0.0
 */
export class NewsletterSchema {
  /**
   * Constructs a new <code>NewsletterSchema</code>.
   * @alias module:model/NewsletterSchema
   * @class
   * @param email {String} 
   */
  constructor(email) {
    this.email = email;
  }

  /**
   * Constructs a <code>NewsletterSchema</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NewsletterSchema} obj Optional instance to populate.
   * @return {module:model/NewsletterSchema} The populated <code>NewsletterSchema</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new NewsletterSchema();
      if (data.hasOwnProperty('email'))
        obj.email = ApiClient.convertToType(data['email'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} email
 */
NewsletterSchema.prototype.email = undefined;
