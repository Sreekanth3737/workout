const BRANDS = "ICCN";
const MODELS = [
  "EDGE SWITCH",
  "WX7052-410G",
  "AWGT8006G",
  "WX7052-410G",
  "WP6012-8POE",
  "MGS9100SML",
  "ARC62WAP",
];
const HEADING = "Brand,Model,Material,MAC Address,Serial Number,Rev,Firmware";

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

/**
 * Get random inventory payload
 */
const getRandomInventoryPayload = () => {
  const suffix = Math.random().toString().slice(2, 10);
  return {
    comment: `Comment ${suffix}`,
    firmwareVer: `Firmware Ver ${suffix}`,
    macAddress: getRandomMACAddress(),
    materialId: `material-Id-${suffix}`,
    revision: `revision ${suffix}`,
    srNum: getRandomSerialNumber(),
  };
};

const genarateRandomCSVRow = () => {
  const model = MODELS[Math.floor(Math.random() * MODELS.length)];
  const material = getRandomInventoryPayload().materialId;
  const mac = getRandomMACAddress();
  const serialNumber = getRandomSerialNumber();
  const revision = getRandomInventoryPayload().revision;
  const firmwareVer = getRandomInventoryPayload().firmwareVer;
  return `${BRANDS},${model},${material},${mac},${serialNumber},${revision},${firmwareVer}`;
};
function generateRandomCSVPayload(numRows = 4) {
  const csvDataArray = [HEADING];

  for (let i = 0; i < numRows; i++) {
    csvDataArray.push(genarateRandomCSVRow());
  }

  const csvDataString = csvDataArray.join("\r\n");

  const payload = {
    bulkData: csvDataString,
  };

  return JSON.stringify(payload);
}

console.log(generateRandomCSVPayload(4));
