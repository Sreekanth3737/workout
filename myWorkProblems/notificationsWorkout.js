// ** NOTIFICATION_TYPE
const NOTIFICATION_TYPE = {
  // ** Agent
  AGENT_ADD: "AGENT_ADD",
  AGENT_ONBOARD: "AGENT_ONBOARD",
  AGENT_STATUS_OFFLINE: "AGENT_STATUS_OFFLINE",
  AGENT_STATUS_ONLINE: "AGENT_STATUS_ONLINE",
  NETWORK_ALERT_ACTIVE: "NETWORK_ALERT_ACTIVE",
  NETWORK_ALERT_INACTIVE: "NETWORK_ALERT_INACTIVE",
  NETWORK_ALERT_STOP: "NETWORK_ALERT_STOP",

  // ** Business
  BUSINESS_CREATE: "BUSINESS_CREATE",
  BUSINESS_POLICY_CREATE: "BUSINESS_POLICY_CREATE",
  BUSINESS_UPDATE: "BUSINESS_UPDATE",

  // ** Hardware
  BULK_UPLOAD: "BULK_UPLOAD",
  INVENTORY_ASSIGN: "INVENTORY_ASSIGN",
  UNVERIFIED_INVENTORY_ACCEPT: "UNVERIFIED_INVENTORY_ACCEPT",
  UNVERIFIED_INVENTORY_ADD: "UNVERIFIED_INVENTORY_ADD",
  UNVERIFIED_INVENTORY_REJECT: "UNVERIFIED_INVENTORY_REJECT",

  // ** Location
  LOCATION_CREATE: "LOCATION_CREATE",
  LOCATION_DELETE: "LOCATION_DELETE",
  LOCATION_UPDATE: "LOCATION_UPDATE",

  // ** User
  FORGOT_PASSWORD: "FORGOT_PASSWORD",
  USER_CREATE: "USER_CREATE",
  USER_DELETE: "USER_DELETE",
  USER_POLICY_ASSIGN: "USER_POLICY_ASSIGN",
  USER_POLICY_CREATE: "USER_POLICY_CREATE",
  USER_POLICY_REMOVE: "USER_POLICY_REMOVE",
};
const generateNotificationConfig = (
  notificationType,
  templateType,
  recipients,
  alertType,
  color
) => ({
  [notificationType]: {
    alertType,
    color,
    notificationTypes: {
      email: { templateType, recipients: recipients },
      sms: { templateType, recipients: recipients },
      web: { templateType, recipients: recipients },
    },
  },
});
const NOTIFICATION_CONSTANTS = {
  alertType: {
    ALERT: "ALERT",
    BUSINESS: "BUSINESS",
    FAILURE: "FAILURE",
    INFO: "INFO",
    INTERNAL: "INTERNAL",
    NETWORK: "NETWORK",
    NETWORK_ALERT_FAILURE: "NETWORK_ALERT_FAILURE",
    NETWORK_ALERT_SUCCESS: "NETWORK_ALERT_SUCCESS",
    OTHER: "OTHER",
    SUCCESS: "SUCCESS",
    WARN: "WARN",
  },
  color: {
    ALERT: "light-danger",
    BUSINESS: "info",
    FAILURE: "danger",
    INFO: "light-info",
    INTERNAL: "info",
    NETWORK_ALERT: "light-danger",
    NETWORK_ALERT_FAILURE: "danger",
    NETWORK_ALERT_SUCCESS: "success",
    OTHER: "light-info",
    SUCCESS: "success",
    WARN: "light-warning",
  },
  type: {
    EMAIL: "email",
    SMS: "sms",
    WEB: "web",
  },
};
const userConfigData = [
  [
    "NOTIFICATION_TYPES.USER_CREATE",
    " EMAIL_TEMPLATE_TYPES.USER_CREATE",
    ["NOTIFICATION_RECIPIENT.RESOURCE"],
    "NOTIFICATION_CONSTANTS.alertType.SUCCESS",
    "NOTIFICATION_CONSTANTS.color.SUCCESS",
  ],
  [
    "NOTIFICATION_TYPES.USER_POLICY_ASSIGN",
    "EMAIL_TEMPLATE_TYPES.USER_POLICY_ASSIGN",
    ["NOTIFICATION_RECIPIENT.RESOURCE"],
    "NOTIFICATION_CONSTANTS.alertType.SUCCESS",
    "NOTIFICATION_CONSTANTS.color.SUCCESS",
  ],
  [
    "NOTIFICATION_TYPES.USER_POLICY_REMOVE",
    "EMAIL_TEMPLATE_TYPES.USER_POLICY_REMOVE",
    ["NOTIFICATION_RECIPIENT.RESOURCE"],
    "NOTIFICATION_CONSTANTS.alertType.INFO",
    "NOTIFICATION_CONSTANTS.color.INFO",
  ],
  [
    "NOTIFICATION_TYPES.USER_POLICY_CREATE",
    "EMAIL_TEMPLATE_TYPES.USER_POLICY_CREATE",
    ["NOTIFICATION_RECIPIENT.AC_ADMIN"],
    "NOTIFICATION_CONSTANTS.alertType.SUCCESS",
    "NOTIFICATION_CONSTANTS.color.SUCCESS",
  ],
  [
    "NOTIFICATION_TYPES.USER_DELETE",
    "EMAIL_TEMPLATE_TYPES.USER_DELETE",
    ["NOTIFICATION_RECIPIENT.AC_ADMIN"],
    "NOTIFICATION_CONSTANTS.alertType.INFO",
    "NOTIFICATION_CONSTANTS.color.INFO",
  ],
];
// ** Checks if the data type is an Array and if it is empty
const isValidArray = (val) => {
  return Array.isArray(val) && val.length > 0;
};

// ** Checks if the data type is a Boolean
const isValidBoolean = (val) => {
  return typeof val === "boolean";
};

// ** Checks if the data type is a Function
const isValidFunction = (val) => {
  return typeof val === "function";
};

// ** Checks if the data type is a Number
const isValidNumber = (val) => {
  return typeof val === "number" && !Number.isNaN(val);
};

// ** Checks if the data type is an Object (JSON)
const isValidObject = (val) => {
  return !Array.isArray(val) && typeof val === "object" && !!val;
};

const NOTIFICATION_CONFIG_USER_MGMT = userConfigData.reduce(
  (obj, [notificationType, templateType, recipients, alertType, color]) => ({
    ...obj,
    ...generateNotificationConfig(
      notificationType,
      templateType,
      recipients,
      alertType,
      color
    ),
  }),
  {}
);
const NOTIFICATION_RECIPIENT_CONFIG = {
  AC_ADMIN: {
    recipientType: " NOTIFICATION_RECIPIENT_CONFIG_TYPE.ROLE_TYPE",
    type: "NOTIFICATION_RECIPIENT_TYPE.AC_ADMIN",
    value: "RoleType.ADMIN",
  },
  AC_INVENTORY_MGMT: {
    recipientType: " NOTIFICATION_RECIPIENT_CONFIG_TYPE.ROLE_NAME",
    type: "NOTIFICATION_RECIPIENT_TYPE.AC_INVENTORY_MGMT",
    value: "POLICY_TYPE.AC_INVENTORY_MGMT",
  },
  AC_MONITORING: {
    recipientType: " NOTIFICATION_RECIPIENT_CONFIG_TYPE.ROLE_NAME",
    type: "NOTIFICATION_RECIPIENT_TYPE.AC_MONITORING",
    value: "POLICY_TYPE.AC_MONITORING",
  },
  AC_NETWORKING: {
    recipientType: "NOTIFICATION_RECIPIENT_CONFIG_TYPE.ROLE_NAME",
    type: " NOTIFICATION_RECIPIENT_TYPE.AC_NETWORKING",
    value: " POLICY_TYPE.AC_NETWORKING",
  },
  // ** User Created | User Deleted | Role Assigned | Role Removed
  RESOURCE: {
    type: "NOTIFICATION_RECIPIENT_TYPE.RESOURCE",
  },
  SUPER_ADMIN: {
    recipientType: "NOTIFICATION_RECIPIENT_CONFIG_TYPE.ROLE_TYPE",
    type: "NOTIFICATION_RECIPIENT_TYPE.SUPER_ADMIN",
    value: "RoleType.SUPER_USER",
  },
};
// console.log(JSON.stringify(NOTIFICATION_CONFIG_USER_MGMT, null, 3));

const NOTIFICATION_CONFIG = { ...NOTIFICATION_CONFIG_USER_MGMT };

const GET_NOTIFICATION_COMMON_PROP = {
  // ** user
  [NOTIFICATION_TYPE.USER_CREATE]: {
    alertType: NOTIFICATION_CONSTANTS.alertType.SUCCESS,
    color: NOTIFICATION_CONSTANTS.color.SUCCESS,
    recipients: {
      web: [NOTIFICATION_RECIPIENT_CONFIG.AC_ADMIN],

      email: [NOTIFICATION_RECIPIENT_CONFIG.AC_INVENTORY_MGMT],

      sms: [
        NOTIFICATION_RECIPIENT_CONFIG.AC_MONITORING,
        NOTIFICATION_RECIPIENT_CONFIG.AC_NETWORKING,
      ],
    },
  },
  [NOTIFICATION_TYPE.USER_DELETE]: {
    alertType: NOTIFICATION_CONSTANTS.alertType.INFO,
    color: NOTIFICATION_CONSTANTS.color.INFO,
    recipients: [
      NOTIFICATION_RECIPIENT_CONFIG.AC_INVENTORY_MGMT,
      NOTIFICATION_RECIPIENT_CONFIG.AC_ADMIN,
      NOTIFICATION_RECIPIENT_CONFIG.AC_MONITORING,
    ],
  },
};

const GENERATE_NOTIFICATION_CONFIG = ({ notificationType }) => {
  const { alertType, recipients, color } =
    GET_NOTIFICATION_COMMON_PROP[notificationType];
  let notificationTypes = {};

  if (isValidArray(recipients)) {
    console.log("---1");
    notificationTypes = {
      email: { templateType: notificationType, sendTo: recipients },
      sms: { templateType: notificationType, sendTo: recipients },
      web: { templateType: notificationType, sendTo: recipients },
    };
  } else if (isValidObject(recipients)) {
    for (const channel in recipients) {
      if (recipients.hasOwnProperty(channel)) {
        const recipientChannelsObj = recipients[channel];
        notificationTypes[channel] = {
          templateType: notificationType,
          sendTo: recipientChannelsObj,
        };
      }
    }
  }

  return {
    notificationTypes,
    alertType,
    color,
  };
};
console.log(
  JSON.stringify(
    GENERATE_NOTIFICATION_CONFIG({
      notificationType: NOTIFICATION_TYPE.USER_CREATE,
    }),
    null,
    3
  )
);
// console.log(
//   JSON.stringify(
//     GET_NOTIFICATION_COMMON_PROP[NOTIFICATION_TYPE.USER_CREATE],
//     null,
//     3
//   )
// );
