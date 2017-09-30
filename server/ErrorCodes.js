module.exports = {
  User: {
    NUMBER_ALREADY_EXISTS: 100001,
    USER_NOT_FOUND: 100002,
    AT_LEAST_ONE_ADDRESS_MUST_BE_SET: 100003
  },
  Address: {
    EITHER_DETAIL_OR_LOCATION_MUST_BE_SET: 200001,
    INCORRECT_COORDINATE_FORMAT: 200002,
    EITHER_STATE_OR_PROVINCE_MUST_BE_SET: 200003,
    ONLY_ONE_Of_STATE_OR_PROVINCE_MUST_BE_SET: 200004,
    EXACTLY_ONE_PRIMARY_ADDRESS_MUST_BE_SET: 200005,
    ADDRESS_NOT_FOUND: 200006
  },
  Global: {
    REQUIRED_HEADER_PARAMS_NOT_SET: 300001,
    ID_IN_REQUEST_NOT_VALID: 300002
  }
};
