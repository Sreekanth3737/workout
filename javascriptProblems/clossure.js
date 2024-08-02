function getOIDCatForTesting() {
  const OID_TYPE_TESTING = {};
  for (let i = 101; i <= 200; i++) {
    const keyVal = `SYSTEM_CONTACT_DETAILS_${i}`;
    OID_TYPE_TESTING[keyVal] = keyVal;
  }
  return OID_TYPE_TESTING;
}

const OID_TYPE_TESTING = getOIDCatForTesting();

function* oidCatGenerator() {
  for (const key in OID_TYPE_TESTING) {
    const val = OID_TYPE_TESTING[key];
    yield val;
  }
}

const provideOIDCat = oidCatGenerator();
const getOIDCat = () => {
  provideOIDCat.next().value;
};
console.log(getOIDCat);
console.log(provideOIDCat.next().value);
