const data = [
  {
    label: "Information",
    total: 6,
  },

  {
    label: "Warning",
    total: 1,
  },
];
const MONITORING_ALERT_SEVERITY = {
  AVERAGE: "AVERAGE",
  DISASTER: "DISASTER",
  HIGH: "HIGH",
  INFORMATION: "INFORMATION",
  WARNING: "WARNING",
};

const severityTypes = Object.values(MONITORING_ALERT_SEVERITY);

const proccessData = severityTypes.map((useItem) => {
  const matchingItem = data.find(
    (item) => item.label.toLowerCase() === useItem.toLowerCase()
  );
  return {
    label: useItem.toLowerCase(),
    total: matchingItem ? matchingItem.total : 0,
  };
});

const GEO_LOCATION_PAYLOAD = {
  businessId: "123344",
  cityId: "NEW_YORK_CITY",
  countryId: "UNITED_STATES_COUNTRY",
  desc: "1",
  location: { lat: 56.26392, lng: 9.501785 },
  name: "",
  stateId: "NEW_YORK_STATE",
  zipCode: "6565",
};
const newPayload = { ...GEO_LOCATION_PAYLOAD, businessId: "777777777" };
console.log(newPayload);
