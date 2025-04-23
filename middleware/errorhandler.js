const { constants } = require("../constants");

const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  switch (statusCode) {
    case constants.BAD_REQUEST:
      return {
        title: "Bad Request",
        message:
          "The server could not understand the request due to invalid syntax.",
        stackTrace: err.stack,
      };
    case constants.UNAUTHORIZED:
      return {
        title: "Unauthorized",
        message:
          "Authentication is required and has failed or has not yet been provided.",
        stackTrace: err.stack,
      };
    case constants.FORBIDDEN:
      return {
        title: "Forbidden",
        message: "You do not have permission to access this resource.",
        stackTrace: err.stack,
      };
    case constants.NOT_FOUND:
      return {
        title: "Not Found",
        message: "The requested resource could not be found.",
        stackTrace: err.stack,
      };
    case constants.METHOD_NOT_ALLOWED:
      return {
        title: "Method Not Allowed",
        message: "The HTTP method used is not allowed for this resource.",
        stackTrace: err.stack,
      };
    case constants.CONFLICT:
      return {
        title: "Conflict",
        message: "There was a conflict with the current state of the resource.",
        stackTrace: err.stack,
      };
    case constants.UNPROCESSABLE_ENTITY:
      return {
        title: "Unprocessable Entity",
        message:
          "The server understands the content type and syntax but was unable to process the contained instructions.",
        stackTrace: err.stack,
      };
    case constants.INTERNAL_SERVER_ERROR:
      return {
        title: "Internal Server Error",
        message: "An unexpected condition was encountered on the server.",
        stackTrace: err.stack,
      };
    case constants.NOT_IMPLEMENTED:
      return {
        title: "Not Implemented",
        message:
          "The server does not support the functionality required to fulfill the request.",
        stackTrace: err.stack,
      };
    case constants.BAD_GATEWAY:
      return {
        title: "Bad Gateway",
        message:
          "The server received an invalid response from the upstream server.",
        stackTrace: err.stack,
      };
    case constants.SERVICE_UNAVAILABLE:
      return {
        title: "Service Unavailable",
        message:
          "The server is currently unable to handle the request due to maintenance or overload.",
        stackTrace: err.stack,
      };
    case constants.GATEWAY_TIMEOUT:
      return {
        title: "Gateway Timeout",
        message:
          "The server did not receive a timely response from the upstream server.",
        stackTrace: err.stack,
      };
    default:
      return {
        title: "Unknown Error",
        message: "An unknown error occurred.",
        stackTrace: err.stack,
      };
  }
};

module.exports = errorHandler;
