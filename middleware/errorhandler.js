const { constants } = require("../constants");

const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;

  let errorResponse = {
    title: "Unknown Error",
    message: "An unknown error occurred.",
    stackTrace: err.stack,
  };

  switch (statusCode) {
    case constants.BAD_REQUEST:
      errorResponse = {
        title: "Bad Request",
        message:
          "The server could not understand the request due to invalid syntax.",
        stackTrace: err.stack,
      };
      break;
    case constants.UNAUTHORIZED:
      errorResponse = {
        title: "Unauthorized",
        message:
          "Authentication is required and has failed or has not yet been provided.",
        stackTrace: err.stack,
      };
      break;
    case constants.FORBIDDEN:
      errorResponse = {
        title: "Forbidden",
        message: "You do not have permission to access this resource.",
        stackTrace: err.stack,
      };
      break;
    case constants.NOT_FOUND:
      errorResponse = {
        title: "Not Found",
        message: "The requested resource could not be found.",
        stackTrace: err.stack,
      };
      break;
    case constants.METHOD_NOT_ALLOWED:
      errorResponse = {
        title: "Method Not Allowed",
        message: "The HTTP method used is not allowed for this resource.",
        stackTrace: err.stack,
      };
      break;
    case constants.CONFLICT:
      errorResponse = {
        title: "Conflict",
        message: "There was a conflict with the current state of the resource.",
        stackTrace: err.stack,
      };
      break;
    case constants.UNPROCESSABLE_ENTITY:
      errorResponse = {
        title: "Unprocessable Entity",
        message:
          "The server understands the content type and syntax but was unable to process the contained instructions.",
        stackTrace: err.stack,
      };
      break;
    case constants.INTERNAL_SERVER_ERROR:
      errorResponse = {
        title: "Internal Server Error",
        message: "An unexpected condition was encountered on the server.",
        stackTrace: err.stack,
      };
      break;
    case constants.NOT_IMPLEMENTED:
      errorResponse = {
        title: "Not Implemented",
        message:
          "The server does not support the functionality required to fulfill the request.",
        stackTrace: err.stack,
      };
      break;
    case constants.BAD_GATEWAY:
      errorResponse = {
        title: "Bad Gateway",
        message:
          "The server received an invalid response from the upstream server.",
        stackTrace: err.stack,
      };
      break;
    case constants.SERVICE_UNAVAILABLE:
      errorResponse = {
        title: "Service Unavailable",
        message:
          "The server is currently unable to handle the request due to maintenance or overload.",
        stackTrace: err.stack,
      };
      break;
    case constants.GATEWAY_TIMEOUT:
      errorResponse = {
        title: "Gateway Timeout",
        message:
          "The server did not receive a timely response from the upstream server.",
        stackTrace: err.stack,
      };
      break;
  }

  res.status(statusCode).json(errorResponse);
};

module.exports = errorHandler;
