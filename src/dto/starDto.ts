// src/dto/StarDto.ts
import Joi from 'joi';
// * @param {Date=} foundAt - The timestamp of when the Star was found (Defaults to a new {@link DateConstructor}).
// * @param {Date?} updatedAt - The timestamp of when the Star was last updated.


/**
 * Star object.
 * @param {Number} world - The World Number of the Star.
 * @param {Number} tier - The tier of the Star.
 * @param {string} location - The location of the Star.
 * @param {string} foundBy - The finder of the Star.
 * @param {Date?} calledAt - The timestamp of when the Star was called (released).
 * @param {Boolean?} backup

 * @param {Date?} createTime - The timestamp of when the Star was found (Defaults to a new {@link DateConstructor}).
 * @param {Date?} updateTime - The timestamp of when the Star was last updated.
 * @param {Date?} readTime - The timestamp of when the Star was last read.
*/
export interface StarDto {
  world: number;
  tier: number;
  location: string;
  foundBy: string;
  // foundAt?: Date; // Using firestore createTime instead
  // updatedAt?: Date; // using firestore updateTime instead
  calledAt?: Date;
  backup?: boolean;

  // Added by Firestore
  readTime?: Date;
  updateTime?: Date;
  createTime?: Date;
};

export const createStarSchema = Joi.object<StarDto>({
  world: Joi.number().integer().min(301).max(599).required().messages({
    'number.base': `"world" should be a type of 'number'`,
    'number.integer': `"world" should be an integer`,
    'number.min': `"world" should have a minimum value of {#limit}`,
    'number.max': `"world" should have a maximum value of {#limit}`,
    'any.required': `"world" is a required field`
  }),
  tier: Joi.number().integer().min(1).max(9).required().messages({
    'number.base': `"tier" should be a type of 'number'`,
    'number.integer': `"tier" should be an integer`,
    'number.min': `"tier" should have a minimum value of {#limit}`,
    'number.max': `"tier" should have a maximum value of {#limit}`,
    'any.required': `"tier" is a required field`
  }),
  location: Joi.string().required().min(2).max(50).messages({
    'string.base': `"location" should be a type of 'text'`,
    'string.empty': `"location" cannot be an empty field`,
    'string.min': `"location" should have a minimum length of {#limit}`,
    'string.max': `"location" should have a maximum length of {#limit}`,
    'any.required': `"location" is a required field`
  }),
  foundBy: Joi.string().required().min(3).max(50).messages({
    'string.base': `"foundBy" should be a type of 'text'`,
    'string.empty': `"foundBy" cannot be an empty field`,
    'string.min': `"foundBy" should have a minimum length of {#limit}`,
    'string.max': `"foundBy" should have a maximum length of {#limit}`,
    'any.required': `"foundBy" is a required field`
  }),
  // NOTE appernatly optional is not the same as "not required to provide" - https://github.com/hapijs/joi/issues/482
  // NOTE this is bascially "CreatedTime" added by firestore.
  // foundAt: Joi.date().allow('', null).optional().messages({
  //   'date.base': `"foundAt" should be a type of 'date'`,
  // }),
  // NOTE this is bascially "UpdateTime" added by firestore.
  // updatedAt: Joi.date().allow('', null).optional().messages({
  //   'date.base': `"updatedAt" should be a type of 'date'`,
  // }),
  calledAt: Joi.date().allow('', null).optional().messages({
    'date.base': `"calledAt" should be a type of 'date'`,
  }),
  backup: Joi.boolean().allow('', null).optional().messages({
    'boolean.base': `"backup" should be a type of 'boolean'`,
  }),
});

export const updateStarSchema = Joi.object<StarDto>({
  world: Joi.number().integer().min(301).max(599).messages({
    'number.base': `"world" should be a type of 'number'`,
    'number.integer': `"world" should be an integer`,
    'number.min': `"world" should have a minimum value of {#limit}`,
    'number.max': `"world" should have a maximum value of {#limit}`,
  }),
  tier: Joi.number().integer().min(1).max(9).messages({
    'number.base': `"tier" should be a type of 'number'`,
    'number.integer': `"tier" should be an integer`,
    'number.min': `"tier" should have a minimum value of {#limit}`,
    'number.max': `"tier" should have a maximum value of {#limit}`,
  }),
  location: Joi.string().min(2).max(50).messages({
    'string.base': `"location" should be a type of 'text'`,
    'string.empty': `"location" cannot be an empty field`,
    'string.min': `"location" should have a minimum length of {#limit}`,
    'string.max': `"location" should have a maximum length of {#limit}`,
  }),
  foundBy: Joi.string().min(3).max(50).messages({
    'string.base': `"foundBy" should be a type of 'text'`,
    'string.empty': `"foundBy" cannot be an empty field`,
    'string.min': `"foundBy" should have a minimum length of {#limit}`,
    'string.max': `"foundBy" should have a maximum length of {#limit}`,
  }),
  // foundAt: Joi.date().allow('', null).optional().messages({
  //   'date.base': `"foundAt" should be a type of 'date'`,
  // }),
  // updatedAt: Joi.date().allow('', null).optional().messages({
  //   'date.base': `"updatedAt" should be a type of 'date'`,
  // }),
  calledAt: Joi.date().allow('', null).optional().messages({
    'date.base': `"calledAt" should be a type of 'date'`,
  }),
  backup: Joi.boolean().allow('', null).optional().messages({
    'boolean.base': `"backup" should be a type of 'boolean'`,
  }),
});
