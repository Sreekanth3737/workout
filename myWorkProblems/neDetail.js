const NEDETAIL_PAYLOAD = {
  hostList: [
    {
      category: "652945d4d39239993b4b0246",
      hostName: "ICX20UAD",
      ip: "192.168.32.108",
      mac: "F8:F7:D3:01:A8:E0",
      neTypeId: "652945e1d39239993b4b027f",
      srNum: "djfdf",
      vendorCode: "ICCN",
      businessId: "656f387035aa8049f166c709",
      dolphinAgentId: "656f397d7ec0c88db83918fe",
      locationId: "656f38777ec0c88db83917a8",
      port: "igb2",
      status: "UNKNOWN",
    },
  ],
};
console.log(NEDETAIL_PAYLOAD);
function getRandomIP() {
  return `${Math.floor(Math.random() * 256)}.${Math.floor(
    Math.random() * 256
  )}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}`;
}
console.log(getRandomIP());

const getRandomNEDetailPayload = (documentCount) => {
  const CATEGORY = "getRandomUUID()";
  const NE_TYPE_ID = "getRandomUUID()";
  const BUSINESS_ID = "getRandomUUID()";
  const DOLPHIN_AGENT_ID = "getRandomUUID()";
  const GEO_LOCATION_ID = "getRandomUUID()";

  const hostList = [];
  for (let i = 0; i < documentCount; i++) {
    hostList.push({
      category: "CATEGORY",
      hostName: "ICX20UAD",
      ip: "getRandomIP()",
      mac: "getRandomMACAddress()",
      neTypeId: "NE_TYPE_ID",
      srNum: " getRandomSerialNumber()",
      vendorCode: "getRandomVendorCode()",
      businessId: "BUSINESS_ID",
      dolphinAgentId: "DOLPHIN_AGENT_ID",
      locationId: "GEO_LOCATION_ID",
      port: `igb${Math.floor(Math.random() * 4) + 1}`,
      status: "UNKNOWN",
    });
  }

  return { hostList };
};
console.log(getRandomNEDetailPayload(3));
