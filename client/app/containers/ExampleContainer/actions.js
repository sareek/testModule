/*
 *
 * ExampleContainer actions
 *
 */

import action from 'utils/action';
import * as types from './constants';

export const defaultAction = action(types.DEFAULT_ACTION);

export const defaultActionRequest = action(types.DEFAULT_ACTION_REQUEST, 'payload');
export const defaultActionSuccess = action(types.DEFAULT_ACTION_SUCCESS, 'response');
export const defaultActionFailure = action(types.DEFAULT_ACTION_FAILURE, 'error');

export const getAllBlogRequest = action(types.GET_ALL_BLOG_REQUEST);
export const getAllBlogSuccess = action(types.GET_ALL_BLOG_SUCCESS, 'response');
export const getAllBlogFailure = action(types.GET_ALL_BLOG_FAILURE, 'error');

 
