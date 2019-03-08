/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const LOAD_REPOS = 'project/App/LOAD_REPOS';
export const LOAD_REPOS_SUCCESS = 'project/App/LOAD_REPOS_SUCCESS';
export const LOAD_REPOS_ERROR = 'project/App/LOAD_REPOS_ERROR';

export const INCREMENT_LOADING = 'project/App/INCREMENT_LOADING';
export const DECREMENT_LOADING = 'project/App/DECREMENT_LOADING';

export const INITIALIZE_REQUEST = 'project/App/INITIALIZE_REQUEST';
export const INITIALIZE_SUCCESS = 'project/App/INITIALIZE_SUCCESS';
export const INITIALIZE_FAILURE = 'project/App/INITIALIZE_FAILURE';

export const SHOW_DIALOG = 'project/App/SHOW_DIALOG';

export const SET_TOKEN = 'project/App/SET_TOKEN';
export const SET_USER = 'project/App/SET_USER';
export const SET_TOAST = 'project/App/SET_TOKEN';
export const SET_DIALOG = 'project/App/SET_DIALOG';

export const LOGOUT_REQUEST = 'project/App/LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'project/App/LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'project/App/LOGOUT_FAILURE';

export const LOAD_INTRO_TOOL_REQUEST = 'project/App/LOAD_INTRO_TOOL_REQUEST';
export const LOAD_INTRO_TOOL_SUCCESS = 'project/App/LOAD_INTRO_TOOL_SUCCESS';
export const LOAD_INTRO_TOOL_FAILURE = 'project/App/LOAD_INTRO_TOOL_FAILURE';

export const POST_INTRO_TOOL_REQUEST = 'project/App/POST_INTRO_TOOL_REQUEST';
export const POST_INTRO_TOOL_SUCCESS = 'project/App/POST_INTRO_TOOL_SUCCESS';
export const POST_INTRO_TOOL_FAILURE = 'project/App/POST_INTRO_TOOL_FAILURE';

export const UPDATE_FIRST_LOAD_REQUEST =
  'project/App/UPDATE_FIRST_LOAD_REQUEST';
export const UPDATE_FIRST_LOAD_SUCCESS =
  'project/App/UPDATE_FIRST_LOAD_SUCCESS';

export const API_BASE =
  process.env.NODE_ENV === 'production'
    ? 'https://www.techastep.com/api/'
    : 'http://www.xclassets.com/api/';    //http://192.168.31.50:5000/

// For file upload
export const DOCUMENT_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://s3.amazonaws.com/xchangewallet-dev/'
    : 'https://s3.amazonaws.com/xchangewallet-dev/';

export const DEFAULT_LOCALE = 'en';
