const BUSINESS_ID = "111111111111111111";
const RoleType = {
  SUPER_USER: -1,
};
const ROLE_ID = "555555555555";
const BUSINESS_WIZARD_TOKEN = {
  ctx: { businessId: BUSINESS_ID, roleId: ROLE_ID },
  UserInfo: { uType: RoleType.SUPER_USER, businessId: BUSINESS_ID },
};

function modifyBusinessId(newBusinessId) {
  const modifiedToken = { ...BUSINESS_WIZARD_TOKEN };

  modifiedToken.ctx = {
    ...modifiedToken.ctx,
    businessId: newBusinessId,
  };

  modifiedToken.UserInfo = {
    ...modifiedToken.UserInfo,
    businessId: newBusinessId,
  };

  return modifiedToken;
}

const result = modifyBusinessId("13232312442");
console.log(JSON.stringify(result, null, 3));

/**
 * Get random macAddress
 */
const getRandomMACAddress = () => {
  const macAddress = [];
  for (let i = 0; i < 6; i++) {
    const part = Math.floor(Math.random() * 256)
      .toString(16)
      .padStart(2, "0");
    macAddress.push(part);
  }
  return macAddress.join(":").toUpperCase();
};

/**
 * Get random serial number
 */
const getRandomSerialNumber = () => {
  const suffix = Math.random().toString().slice(2, 10);
  return `serial-number-${suffix}`;
};

const createRandomInventoryData = (numberOfInventory = 5) => {
  let data = [];
  for (let i = 1; i <= numberOfInventory; i++) {
    const suffix = Math.random().toString().slice(2, 10);
    const transferData = {
      neTypeId: {
        name: `NEType Name ${suffix}`,
      },
      macAddress: getRandomMACAddress(),
      revision: `Revision ${suffix}`,
      srNum: getRandomSerialNumber(),
    };
    data.push(transferData);
  }
  return { data };
};

console.log(createRandomInventoryData());
