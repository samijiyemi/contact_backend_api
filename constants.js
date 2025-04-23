exports.constants = {
  BAD_REQUEST: 400, // Invalid request parameters
  UNAUTHORIZED: 401, // Authentication required or failed
  FORBIDDEN: 403, // Access denied
  NOT_FOUND: 404, // Resource not found
  METHOD_NOT_ALLOWED: 405, // HTTP method not allowed
  CONFLICT: 409, // Resource conflict
  UNPROCESSABLE_ENTITY: 422, // Validation error
  INTERNAL_SERVER_ERROR: 500, // General server error
  NOT_IMPLEMENTED: 501, // Endpoint not implemented
  BAD_GATEWAY: 502, // Invalid response from upstream server
  SERVICE_UNAVAILABLE: 503, // Server temporarily unavailable
  GATEWAY_TIMEOUT: 504, // Server didn't respond in time
};
