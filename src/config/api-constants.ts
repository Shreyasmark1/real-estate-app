export const CONTENT_TYPE_JSON : string = 'application/json';
export const CONTENT_TYPE_MULTIPART_FORM : string = 'multipart/form-data';
// export const CONTENT_TYPE_MULTIPART_FORM : string = 'multipart/form-data;boundary=mutipartAppData';

// status from server
export const FAILED = 5000 // don't show this error to user
export const FAILED_INFO = 5001 // show error to user
export const FAILED_DEFAULT = 5002; // don't show this error

export const SUCCESS = 2000; // don't show this message
export const SUCCESS_INFO = 2001; // ok to show this error
export const SUCCESS_DEFAULT = 2002; // don't show this message

export const AUTH_ERROR = 4000; // remove jwt and redirect to login page
export const AUTH_ERROR_INFO = 4001; // show error to front end