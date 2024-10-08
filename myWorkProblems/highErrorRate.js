const oidList = [
  {
    oid: "1.3.6.1.2.1.2.2.1.10.1",
    value: "0",
    oidCat: "INTERFACE_BITS_RECEIVED",
    oidRef: "1.3.6.1.2.1.2.2.1.10.{#SNMPINDEX}",
  },
  {
    oid: "1.3.6.1.2.1.2.2.1.16.1",
    value: "0",
    oidCat: "INTERFACE_BITS_SEND",
    oidRef: "1.3.6.1.2.1.2.2.1.16.{#SNMPINDEX}",
  },
  {
    oid: "1.3.6.1.2.1.2.2.1.13.1",
    value: "0",
    oidCat: "INTERFACE_INBOUND_PACKETS_DISCARDED",
    oidRef: "1.3.6.1.2.1.2.2.1.13.{#SNMPINDEX}",
  },
  {
    oid: "1.3.6.1.2.1.2.2.1.14.1",
    value: "0",
    oidCat: "INTERFACE_INBOUND_PACKETS_WITH_ERRORS",
    oidRef: "1.3.6.1.2.1.2.2.1.14.{#SNMPINDEX}",
    valuePrev: "0",
  },
  {
    oid: "1.3.6.1.2.1.2.2.1.2.1",
    value: "em0",
    oidCat: "INTERFACE_NAME",
    oidRef: "1.3.6.1.2.1.2.2.1.2.{#SNMPINDEX}",
  },
  {
    oid: "1.3.6.1.2.1.2.2.1.8.1",
    value: "2",
    oidCat: "INTERFACE_OPERATIONAL_STATUS",
    oidRef: "1.3.6.1.2.1.2.2.1.8.{#SNMPINDEX}",
    valuePrev: "2",
  },
  {
    oid: "1.3.6.1.2.1.2.2.1.19.1",
    value: "0",
    oidCat: "INTERFACE_OUTBOUND_PACKETS_DISCARDED",
    oidRef: "1.3.6.1.2.1.2.2.1.19.{#SNMPINDEX}",
  },
  {
    oid: "1.3.6.1.2.1.2.2.1.20.1",
    value: "0",
    oidCat: "INTERFACE_OUTBOUND_PACKETS_WITH_ERRORS",
    oidRef: "1.3.6.1.2.1.2.2.1.20.{#SNMPINDEX}",
    valuePrev: "0",
  },
  {
    oid: "1.3.6.1.2.1.2.2.1.5.1",
    value: "1000000000",
    oidCat: "INTERFACE_SPEED",
    oidRef: "1.3.6.1.2.1.2.2.1.5.{#SNMPINDEX}",
    valuePrev: "1000000000",
  },
  {
    oid: "1.3.6.1.2.1.2.2.1.3.1",
    value: "6",
    oidCat: "INTERFACE_TYPE",
    oidRef: "1.3.6.1.2.1.2.2.1.3.{#SNMPINDEX}",
  },
  {
    oid: "1.3.6.1.2.1.2.2.1.10.2",
    value: "4244028096",
    oidCat: "INTERFACE_BITS_RECEIVED",
    oidRef: "1.3.6.1.2.1.2.2.1.10.{#SNMPINDEX}",
  },
  {
    oid: "1.3.6.1.2.1.2.2.1.16.2",
    value: "59952496",
    oidCat: "INTERFACE_BITS_SEND",
    oidRef: "1.3.6.1.2.1.2.2.1.16.{#SNMPINDEX}",
  },
  {
    oid: "1.3.6.1.2.1.2.2.1.13.2",
    value: "0",
    oidCat: "INTERFACE_INBOUND_PACKETS_DISCARDED",
    oidRef: "1.3.6.1.2.1.2.2.1.13.{#SNMPINDEX}",
  },
  {
    oid: "1.3.6.1.2.1.2.2.1.14.2",
    value: "82",
    oidCat: "INTERFACE_INBOUND_PACKETS_WITH_ERRORS",
    oidRef: "1.3.6.1.2.1.2.2.1.14.{#SNMPINDEX}",
    valuePrev: "82",
  },
  {
    oid: "1.3.6.1.2.1.2.2.1.2.2",
    value: "em1",
    oidCat: "INTERFACE_NAME",
    oidRef: "1.3.6.1.2.1.2.2.1.2.{#SNMPINDEX}",
  },
  {
    oid: "1.3.6.1.2.1.2.2.1.8.2",
    value: "1",
    oidCat: "INTERFACE_OPERATIONAL_STATUS",
    oidRef: "1.3.6.1.2.1.2.2.1.8.{#SNMPINDEX}",
    valuePrev: "1",
  },
  {
    oid: "1.3.6.1.2.1.2.2.1.19.2",
    value: "0",
    oidCat: "INTERFACE_OUTBOUND_PACKETS_DISCARDED",
    oidRef: "1.3.6.1.2.1.2.2.1.19.{#SNMPINDEX}",
  },
  {
    oid: "1.3.6.1.2.1.2.2.1.20.2",
    value: "0",
    oidCat: "INTERFACE_OUTBOUND_PACKETS_WITH_ERRORS",
    oidRef: "1.3.6.1.2.1.2.2.1.20.{#SNMPINDEX}",
    valuePrev: "0",
  },
  {
    oid: "1.3.6.1.2.1.2.2.1.5.2",
    value: "1000000000",
    oidCat: "INTERFACE_SPEED",
    oidRef: "1.3.6.1.2.1.2.2.1.5.{#SNMPINDEX}",
    valuePrev: "1000000000",
  },
  {
    oid: "1.3.6.1.2.1.2.2.1.3.2",
    value: "6",
    oidCat: "INTERFACE_TYPE",
    oidRef: "1.3.6.1.2.1.2.2.1.3.{#SNMPINDEX}",
  },
  {
    oid: "1.3.6.1.2.1.2.2.1.10.3",
    value: "0",
    oidCat: "INTERFACE_BITS_RECEIVED",
    oidRef: "1.3.6.1.2.1.2.2.1.10.{#SNMPINDEX}",
  },
  {
    oid: "1.3.6.1.2.1.2.2.1.16.3",
    value: "0",
    oidCat: "INTERFACE_BITS_SEND",
    oidRef: "1.3.6.1.2.1.2.2.1.16.{#SNMPINDEX}",
  },
  {
    oid: "1.3.6.1.2.1.2.2.1.13.3",
    value: "0",
    oidCat: "INTERFACE_INBOUND_PACKETS_DISCARDED",
    oidRef: "1.3.6.1.2.1.2.2.1.13.{#SNMPINDEX}",
  },
  {
    oid: "1.3.6.1.2.1.2.2.1.14.3",
    value: "0",
    oidCat: "INTERFACE_INBOUND_PACKETS_WITH_ERRORS",
    oidRef: "1.3.6.1.2.1.2.2.1.14.{#SNMPINDEX}",
    valuePrev: "0",
  },
  {
    oid: "1.3.6.1.2.1.2.2.1.2.3",
    value: "em2",
    oidCat: "INTERFACE_NAME",
    oidRef: "1.3.6.1.2.1.2.2.1.2.{#SNMPINDEX}",
  },
  {
    oid: "1.3.6.1.2.1.2.2.1.8.3",
    value: "2",
    oidCat: "INTERFACE_OPERATIONAL_STATUS",
    oidRef: "1.3.6.1.2.1.2.2.1.8.{#SNMPINDEX}",
    valuePrev: "2",
  },
  {
    oid: "1.3.6.1.2.1.2.2.1.19.3",
    value: "0",
    oidCat: "INTERFACE_OUTBOUND_PACKETS_DISCARDED",
    oidRef: "1.3.6.1.2.1.2.2.1.19.{#SNMPINDEX}",
  },
  {
    oid: "1.3.6.1.2.1.2.2.1.20.3",
    value: "0",
    oidCat: "INTERFACE_OUTBOUND_PACKETS_WITH_ERRORS",
    oidRef: "1.3.6.1.2.1.2.2.1.20.{#SNMPINDEX}",
    valuePrev: "0",
  },
  {
    oid: "1.3.6.1.2.1.2.2.1.5.3",
    value: "1000000000",
    oidCat: "INTERFACE_SPEED",
    oidRef: "1.3.6.1.2.1.2.2.1.5.{#SNMPINDEX}",
    valuePrev: "1000000000",
  },
  {
    oid: "1.3.6.1.2.1.2.2.1.3.3",
    value: "6",
    oidCat: "INTERFACE_TYPE",
    oidRef: "1.3.6.1.2.1.2.2.1.3.{#SNMPINDEX}",
  },
  {
    oid: "1.3.6.1.2.1.2.2.1.10.4",
    value: "0",
    oidCat: "INTERFACE_BITS_RECEIVED",
    oidRef: "1.3.6.1.2.1.2.2.1.10.{#SNMPINDEX}",
  },
  {
    oid: "1.3.6.1.2.1.2.2.1.16.4",
    value: "0",
    oidCat: "INTERFACE_BITS_SEND",
    oidRef: "1.3.6.1.2.1.2.2.1.16.{#SNMPINDEX}",
  },
  {
    oid: "1.3.6.1.2.1.2.2.1.13.4",
    value: "0",
    oidCat: "INTERFACE_INBOUND_PACKETS_DISCARDED",
    oidRef: "1.3.6.1.2.1.2.2.1.13.{#SNMPINDEX}",
  },
  {
    oid: "1.3.6.1.2.1.2.2.1.14.4",
    value: "0",
    oidCat: "INTERFACE_INBOUND_PACKETS_WITH_ERRORS",
    oidRef: "1.3.6.1.2.1.2.2.1.14.{#SNMPINDEX}",
    valuePrev: "0",
  },
  {
    oid: "1.3.6.1.2.1.2.2.1.2.4",
    value: "em3",
    oidCat: "INTERFACE_NAME",
    oidRef: "1.3.6.1.2.1.2.2.1.2.{#SNMPINDEX}",
  },
  {
    oid: "1.3.6.1.2.1.2.2.1.8.4",
    value: "2",
    oidCat: "INTERFACE_OPERATIONAL_STATUS",
    oidRef: "1.3.6.1.2.1.2.2.1.8.{#SNMPINDEX}",
    valuePrev: "2",
  },
  {
    oid: "1.3.6.1.2.1.2.2.1.19.4",
    value: "0",
    oidCat: "INTERFACE_OUTBOUND_PACKETS_DISCARDED",
    oidRef: "1.3.6.1.2.1.2.2.1.19.{#SNMPINDEX}",
  },
  {
    oid: "1.3.6.1.2.1.2.2.1.20.4",
    value: "0",
    oidCat: "INTERFACE_OUTBOUND_PACKETS_WITH_ERRORS",
    oidRef: "1.3.6.1.2.1.2.2.1.20.{#SNMPINDEX}",
    valuePrev: "0",
  },
  {
    oid: "1.3.6.1.2.1.2.2.1.5.4",
    value: "1000000000",
    oidCat: "INTERFACE_SPEED",
    oidRef: "1.3.6.1.2.1.2.2.1.5.{#SNMPINDEX}",
    valuePrev: "1000000000",
  },
  {
    oid: "1.3.6.1.2.1.2.2.1.3.4",
    value: "6",
    oidCat: "INTERFACE_TYPE",
    oidRef: "1.3.6.1.2.1.2.2.1.3.{#SNMPINDEX}",
  },
  {
    oid: "1.3.6.1.2.1.2.2.1.10.5",
    value: "0",
    oidCat: "INTERFACE_BITS_RECEIVED",
    oidRef: "1.3.6.1.2.1.2.2.1.10.{#SNMPINDEX}",
  },
  {
    oid: "1.3.6.1.2.1.2.2.1.16.5",
    value: "0",
    oidCat: "INTERFACE_BITS_SEND",
    oidRef: "1.3.6.1.2.1.2.2.1.16.{#SNMPINDEX}",
  },
  {
    oid: "1.3.6.1.2.1.2.2.1.13.5",
    value: "0",
    oidCat: "INTERFACE_INBOUND_PACKETS_DISCARDED",
    oidRef: "1.3.6.1.2.1.2.2.1.13.{#SNMPINDEX}",
  },
  {
    oid: "1.3.6.1.2.1.2.2.1.14.5",
    value: "0",
    oidCat: "INTERFACE_INBOUND_PACKETS_WITH_ERRORS",
    oidRef: "1.3.6.1.2.1.2.2.1.14.{#SNMPINDEX}",
    valuePrev: "0",
  },
  {
    oid: "1.3.6.1.2.1.2.2.1.2.5",
    value: "em4",
    oidCat: "INTERFACE_NAME",
    oidRef: "1.3.6.1.2.1.2.2.1.2.{#SNMPINDEX}",
  },
  {
    oid: "1.3.6.1.2.1.2.2.1.8.5",
    value: "1",
    oidCat: "INTERFACE_OPERATIONAL_STATUS",
    oidRef: "1.3.6.1.2.1.2.2.1.8.{#SNMPINDEX}",
    valuePrev: "1",
  },
  {
    oid: "1.3.6.1.2.1.2.2.1.19.5",
    value: "0",
    oidCat: "INTERFACE_OUTBOUND_PACKETS_DISCARDED",
    oidRef: "1.3.6.1.2.1.2.2.1.19.{#SNMPINDEX}",
  },
  {
    oid: "1.3.6.1.2.1.2.2.1.20.5",
    value: "0",
    oidCat: "INTERFACE_OUTBOUND_PACKETS_WITH_ERRORS",
    oidRef: "1.3.6.1.2.1.2.2.1.20.{#SNMPINDEX}",
    valuePrev: "0",
  },
  {
    oid: "1.3.6.1.2.1.2.2.1.5.5",
    value: "1000000000",
    oidCat: "INTERFACE_SPEED",
    oidRef: "1.3.6.1.2.1.2.2.1.5.{#SNMPINDEX}",
    valuePrev: "1000000000",
  },
  {
    oid: "1.3.6.1.2.1.2.2.1.3.5",
    value: "6",
    oidCat: "INTERFACE_TYPE",
    oidRef: "1.3.6.1.2.1.2.2.1.3.{#SNMPINDEX}",
  },
  {
    oid: "1.3.6.1.2.1.2.2.1.10.6",
    value: "1287440068",
    oidCat: "INTERFACE_BITS_RECEIVED",
    oidRef: "1.3.6.1.2.1.2.2.1.10.{#SNMPINDEX}",
  },
  {
    oid: "1.3.6.1.2.1.2.2.1.16.6",
    value: "1494651516",
    oidCat: "INTERFACE_BITS_SEND",
    oidRef: "1.3.6.1.2.1.2.2.1.16.{#SNMPINDEX}",
  },
  {
    oid: "1.3.6.1.2.1.2.2.1.13.6",
    value: "0",
    oidCat: "INTERFACE_INBOUND_PACKETS_DISCARDED",
    oidRef: "1.3.6.1.2.1.2.2.1.13.{#SNMPINDEX}",
  },
  {
    oid: "1.3.6.1.2.1.2.2.1.14.6",
    value: "0",
    oidCat: "INTERFACE_INBOUND_PACKETS_WITH_ERRORS",
    oidRef: "1.3.6.1.2.1.2.2.1.14.{#SNMPINDEX}",
    valuePrev: "0",
  },
  {
    oid: "1.3.6.1.2.1.2.2.1.2.6",
    value: "em5",
    oidCat: "INTERFACE_NAME",
    oidRef: "1.3.6.1.2.1.2.2.1.2.{#SNMPINDEX}",
  },
  {
    oid: "1.3.6.1.2.1.2.2.1.8.6",
    value: "1",
    oidCat: "INTERFACE_OPERATIONAL_STATUS",
    oidRef: "1.3.6.1.2.1.2.2.1.8.{#SNMPINDEX}",
    valuePrev: "1",
  },
  {
    oid: "1.3.6.1.2.1.2.2.1.19.6",
    value: "0",
    oidCat: "INTERFACE_OUTBOUND_PACKETS_DISCARDED",
    oidRef: "1.3.6.1.2.1.2.2.1.19.{#SNMPINDEX}",
  },
  {
    oid: "1.3.6.1.2.1.2.2.1.20.6",
    value: "0",
    oidCat: "INTERFACE_OUTBOUND_PACKETS_WITH_ERRORS",
    oidRef: "1.3.6.1.2.1.2.2.1.20.{#SNMPINDEX}",
    valuePrev: "0",
  },
  {
    oid: "1.3.6.1.2.1.2.2.1.5.6",
    value: "1000000000",
    oidCat: "INTERFACE_SPEED",
    oidRef: "1.3.6.1.2.1.2.2.1.5.{#SNMPINDEX}",
    valuePrev: "1000000000",
  },
  {
    oid: "1.3.6.1.2.1.2.2.1.3.6",
    value: "6",
    oidCat: "INTERFACE_TYPE",
    oidRef: "1.3.6.1.2.1.2.2.1.3.{#SNMPINDEX}",
  },
  {
    oid: "1.3.6.1.2.1.2.2.1.10.7",
    value: "0",
    oidCat: "INTERFACE_BITS_RECEIVED",
    oidRef: "1.3.6.1.2.1.2.2.1.10.{#SNMPINDEX}",
  },
  {
    oid: "1.3.6.1.2.1.2.2.1.16.7",
    value: "0",
    oidCat: "INTERFACE_BITS_SEND",
    oidRef: "1.3.6.1.2.1.2.2.1.16.{#SNMPINDEX}",
  },
  {
    oid: "1.3.6.1.2.1.2.2.1.13.7",
    value: "0",
    oidCat: "INTERFACE_INBOUND_PACKETS_DISCARDED",
    oidRef: "1.3.6.1.2.1.2.2.1.13.{#SNMPINDEX}",
  },
  {
    oid: "1.3.6.1.2.1.2.2.1.14.7",
    value: "0",
    oidCat: "INTERFACE_INBOUND_PACKETS_WITH_ERRORS",
    oidRef: "1.3.6.1.2.1.2.2.1.14.{#SNMPINDEX}",
    valuePrev: "0",
  },
  {
    oid: "1.3.6.1.2.1.2.2.1.2.7",
    value: "enc0",
    oidCat: "INTERFACE_NAME",
    oidRef: "1.3.6.1.2.1.2.2.1.2.{#SNMPINDEX}",
  },
  {
    oid: "1.3.6.1.2.1.2.2.1.8.7",
    value: "2",
    oidCat: "INTERFACE_OPERATIONAL_STATUS",
    oidRef: "1.3.6.1.2.1.2.2.1.8.{#SNMPINDEX}",
    valuePrev: "2",
  },
  {
    oid: "1.3.6.1.2.1.2.2.1.19.7",
    value: "0",
    oidCat: "INTERFACE_OUTBOUND_PACKETS_DISCARDED",
    oidRef: "1.3.6.1.2.1.2.2.1.19.{#SNMPINDEX}",
  },
  {
    oid: "1.3.6.1.2.1.2.2.1.20.7",
    value: "0",
    oidCat: "INTERFACE_OUTBOUND_PACKETS_WITH_ERRORS",
    oidRef: "1.3.6.1.2.1.2.2.1.20.{#SNMPINDEX}",
    valuePrev: "0",
  },
  {
    oid: "1.3.6.1.2.1.2.2.1.5.7",
    value: "0",
    oidCat: "INTERFACE_SPEED",
    oidRef: "1.3.6.1.2.1.2.2.1.5.{#SNMPINDEX}",
    valuePrev: "0",
  },
  {
    oid: "1.3.6.1.2.1.2.2.1.3.7",
    value: "244",
    oidCat: "INTERFACE_TYPE",
    oidRef: "1.3.6.1.2.1.2.2.1.3.{#SNMPINDEX}",
  },
  {
    oid: "1.3.6.1.2.1.2.2.1.10.8",
    value: "51070080",
    oidCat: "INTERFACE_BITS_RECEIVED",
    oidRef: "1.3.6.1.2.1.2.2.1.10.{#SNMPINDEX}",
  },
  {
    oid: "1.3.6.1.2.1.2.2.1.16.8",
    value: "51070080",
    oidCat: "INTERFACE_BITS_SEND",
    oidRef: "1.3.6.1.2.1.2.2.1.16.{#SNMPINDEX}",
  },
  {
    oid: "1.3.6.1.2.1.2.2.1.13.8",
    value: "0",
    oidCat: "INTERFACE_INBOUND_PACKETS_DISCARDED",
    oidRef: "1.3.6.1.2.1.2.2.1.13.{#SNMPINDEX}",
  },
  {
    oid: "1.3.6.1.2.1.2.2.1.14.8",
    value: "0",
    oidCat: "INTERFACE_INBOUND_PACKETS_WITH_ERRORS",
    oidRef: "1.3.6.1.2.1.2.2.1.14.{#SNMPINDEX}",
    valuePrev: "0",
  },
  {
    oid: "1.3.6.1.2.1.2.2.1.2.8",
    value: "lo0",
    oidCat: "INTERFACE_NAME",
    oidRef: "1.3.6.1.2.1.2.2.1.2.{#SNMPINDEX}",
  },
  {
    oid: "1.3.6.1.2.1.2.2.1.8.8",
    value: "1",
    oidCat: "INTERFACE_OPERATIONAL_STATUS",
    oidRef: "1.3.6.1.2.1.2.2.1.8.{#SNMPINDEX}",
    valuePrev: "1",
  },
  {
    oid: "1.3.6.1.2.1.2.2.1.19.8",
    value: "0",
    oidCat: "INTERFACE_OUTBOUND_PACKETS_DISCARDED",
    oidRef: "1.3.6.1.2.1.2.2.1.19.{#SNMPINDEX}",
  },
  {
    oid: "1.3.6.1.2.1.2.2.1.20.8",
    value: "0",
    oidCat: "INTERFACE_OUTBOUND_PACKETS_WITH_ERRORS",
    oidRef: "1.3.6.1.2.1.2.2.1.20.{#SNMPINDEX}",
    valuePrev: "0",
  },
  {
    oid: "1.3.6.1.2.1.2.2.1.5.8",
    value: "0",
    oidCat: "INTERFACE_SPEED",
    oidRef: "1.3.6.1.2.1.2.2.1.5.{#SNMPINDEX}",
    valuePrev: "0",
  },
  {
    oid: "1.3.6.1.2.1.2.2.1.3.8",
    value: "24",
    oidCat: "INTERFACE_TYPE",
    oidRef: "1.3.6.1.2.1.2.2.1.3.{#SNMPINDEX}",
  },
  {
    oid: "1.3.6.1.2.1.2.2.1.10.9",
    value: "0",
    oidCat: "INTERFACE_BITS_RECEIVED",
    oidRef: "1.3.6.1.2.1.2.2.1.10.{#SNMPINDEX}",
  },
  {
    oid: "1.3.6.1.2.1.2.2.1.16.9",
    value: "0",
    oidCat: "INTERFACE_BITS_SEND",
    oidRef: "1.3.6.1.2.1.2.2.1.16.{#SNMPINDEX}",
  },
  {
    oid: "1.3.6.1.2.1.2.2.1.13.9",
    value: "0",
    oidCat: "INTERFACE_INBOUND_PACKETS_DISCARDED",
    oidRef: "1.3.6.1.2.1.2.2.1.13.{#SNMPINDEX}",
  },
  {
    oid: "1.3.6.1.2.1.2.2.1.14.9",
    value: "0",
    oidCat: "INTERFACE_INBOUND_PACKETS_WITH_ERRORS",
    oidRef: "1.3.6.1.2.1.2.2.1.14.{#SNMPINDEX}",
    valuePrev: "0",
  },
  {
    oid: "1.3.6.1.2.1.2.2.1.2.9",
    value: "pfsync0",
    oidCat: "INTERFACE_NAME",
    oidRef: "1.3.6.1.2.1.2.2.1.2.{#SNMPINDEX}",
  },
  {
    oid: "1.3.6.1.2.1.2.2.1.8.9",
    value: "2",
    oidCat: "INTERFACE_OPERATIONAL_STATUS",
    oidRef: "1.3.6.1.2.1.2.2.1.8.{#SNMPINDEX}",
    valuePrev: "2",
  },
  {
    oid: "1.3.6.1.2.1.2.2.1.19.9",
    value: "0",
    oidCat: "INTERFACE_OUTBOUND_PACKETS_DISCARDED",
    oidRef: "1.3.6.1.2.1.2.2.1.19.{#SNMPINDEX}",
  },
  {
    oid: "1.3.6.1.2.1.2.2.1.20.9",
    value: "0",
    oidCat: "INTERFACE_OUTBOUND_PACKETS_WITH_ERRORS",
    oidRef: "1.3.6.1.2.1.2.2.1.20.{#SNMPINDEX}",
    valuePrev: "0",
  },
  {
    oid: "1.3.6.1.2.1.2.2.1.5.9",
    value: "0",
    oidCat: "INTERFACE_SPEED",
    oidRef: "1.3.6.1.2.1.2.2.1.5.{#SNMPINDEX}",
    valuePrev: "0",
  },
  {
    oid: "1.3.6.1.2.1.2.2.1.3.9",
    value: "247",
    oidCat: "INTERFACE_TYPE",
    oidRef: "1.3.6.1.2.1.2.2.1.3.{#SNMPINDEX}",
  },
  {
    oid: "1.3.6.1.2.1.2.2.1.10.10",
    value: "0",
    oidCat: "INTERFACE_BITS_RECEIVED",
    oidRef: "1.3.6.1.2.1.2.2.1.10.{#SNMPINDEX}",
  },
  {
    oid: "1.3.6.1.2.1.2.2.1.16.10",
    value: "122546417",
    oidCat: "INTERFACE_BITS_SEND",
    oidRef: "1.3.6.1.2.1.2.2.1.16.{#SNMPINDEX}",
  },
  {
    oid: "1.3.6.1.2.1.2.2.1.13.10",
    value: "0",
    oidCat: "INTERFACE_INBOUND_PACKETS_DISCARDED",
    oidRef: "1.3.6.1.2.1.2.2.1.13.{#SNMPINDEX}",
  },
  {
    oid: "1.3.6.1.2.1.2.2.1.14.10",
    value: "0",
    oidCat: "INTERFACE_INBOUND_PACKETS_WITH_ERRORS",
    oidRef: "1.3.6.1.2.1.2.2.1.14.{#SNMPINDEX}",
    valuePrev: "0",
  },
  {
    oid: "1.3.6.1.2.1.2.2.1.2.10",
    value: "pflog0",
    oidCat: "INTERFACE_NAME",
    oidRef: "1.3.6.1.2.1.2.2.1.2.{#SNMPINDEX}",
  },
  {
    oid: "1.3.6.1.2.1.2.2.1.8.10",
    value: "2",
    oidCat: "INTERFACE_OPERATIONAL_STATUS",
    oidRef: "1.3.6.1.2.1.2.2.1.8.{#SNMPINDEX}",
    valuePrev: "2",
  },
  {
    oid: "1.3.6.1.2.1.2.2.1.19.10",
    value: "0",
    oidCat: "INTERFACE_OUTBOUND_PACKETS_DISCARDED",
    oidRef: "1.3.6.1.2.1.2.2.1.19.{#SNMPINDEX}",
  },
  {
    oid: "1.3.6.1.2.1.2.2.1.20.10",
    value: "0",
    oidCat: "INTERFACE_OUTBOUND_PACKETS_WITH_ERRORS",
    oidRef: "1.3.6.1.2.1.2.2.1.20.{#SNMPINDEX}",
    valuePrev: "0",
  },
  {
    oid: "1.3.6.1.2.1.2.2.1.5.10",
    value: "0",
    oidCat: "INTERFACE_SPEED",
    oidRef: "1.3.6.1.2.1.2.2.1.5.{#SNMPINDEX}",
    valuePrev: "0",
  },
  {
    oid: "1.3.6.1.2.1.2.2.1.3.10",
    value: "246",
    oidCat: "INTERFACE_TYPE",
    oidRef: "1.3.6.1.2.1.2.2.1.3.{#SNMPINDEX}",
  },
  {
    oid: "1.3.6.1.2.1.2.2.1.10.11",
    value: "82601257",
    oidCat: "INTERFACE_BITS_RECEIVED",
    oidRef: "1.3.6.1.2.1.2.2.1.10.{#SNMPINDEX}",
  },
  {
    oid: "1.3.6.1.2.1.2.2.1.16.11",
    value: "2441912600",
    oidCat: "INTERFACE_BITS_SEND",
    oidRef: "1.3.6.1.2.1.2.2.1.16.{#SNMPINDEX}",
  },
  {
    oid: "1.3.6.1.2.1.2.2.1.13.11",
    value: "0",
    oidCat: "INTERFACE_INBOUND_PACKETS_DISCARDED",
    oidRef: "1.3.6.1.2.1.2.2.1.13.{#SNMPINDEX}",
  },
  {
    oid: "1.3.6.1.2.1.2.2.1.14.11",
    value: "0",
    oidCat: "INTERFACE_INBOUND_PACKETS_WITH_ERRORS",
    oidRef: "1.3.6.1.2.1.2.2.1.14.{#SNMPINDEX}",
    valuePrev: "0",
  },
  {
    oid: "1.3.6.1.2.1.2.2.1.2.11",
    value: "ztb6k29b6h8qv7a",
    oidCat: "INTERFACE_NAME",
    oidRef: "1.3.6.1.2.1.2.2.1.2.{#SNMPINDEX}",
  },
  {
    oid: "1.3.6.1.2.1.2.2.1.8.11",
    value: "1",
    oidCat: "INTERFACE_OPERATIONAL_STATUS",
    oidRef: "1.3.6.1.2.1.2.2.1.8.{#SNMPINDEX}",
    valuePrev: "1",
  },
  {
    oid: "1.3.6.1.2.1.2.2.1.19.11",
    value: "0",
    oidCat: "INTERFACE_OUTBOUND_PACKETS_DISCARDED",
    oidRef: "1.3.6.1.2.1.2.2.1.19.{#SNMPINDEX}",
  },
  {
    oid: "1.3.6.1.2.1.2.2.1.20.11",
    value: "0",
    oidCat: "INTERFACE_OUTBOUND_PACKETS_WITH_ERRORS",
    oidRef: "1.3.6.1.2.1.2.2.1.20.{#SNMPINDEX}",
    valuePrev: "0",
  },
  {
    oid: "1.3.6.1.2.1.2.2.1.5.11",
    value: "10000000",
    oidCat: "INTERFACE_SPEED",
    oidRef: "1.3.6.1.2.1.2.2.1.5.{#SNMPINDEX}",
    valuePrev: "10000000",
  },
  {
    oid: "1.3.6.1.2.1.2.2.1.3.11",
    value: "6",
    oidCat: "INTERFACE_TYPE",
    oidRef: "1.3.6.1.2.1.2.2.1.3.{#SNMPINDEX}",
  },
  {
    oid: "1.3.6.1.2.1.2.2.1.10.12",
    value: "0",
    oidCat: "INTERFACE_BITS_RECEIVED",
    oidRef: "1.3.6.1.2.1.2.2.1.10.{#SNMPINDEX}",
  },
  {
    oid: "1.3.6.1.2.1.2.2.1.16.12",
    value: "2144282",
    oidCat: "INTERFACE_BITS_SEND",
    oidRef: "1.3.6.1.2.1.2.2.1.16.{#SNMPINDEX}",
  },
  {
    oid: "1.3.6.1.2.1.2.2.1.13.12",
    value: "0",
    oidCat: "INTERFACE_INBOUND_PACKETS_DISCARDED",
    oidRef: "1.3.6.1.2.1.2.2.1.13.{#SNMPINDEX}",
  },
  {
    oid: "1.3.6.1.2.1.2.2.1.14.12",
    value: "0",
    oidCat: "INTERFACE_INBOUND_PACKETS_WITH_ERRORS",
    oidRef: "1.3.6.1.2.1.2.2.1.14.{#SNMPINDEX}",
    valuePrev: "0",
  },
  {
    oid: "1.3.6.1.2.1.2.2.1.2.12",
    value: "ztb6k29b6h7jma2",
    oidCat: "INTERFACE_NAME",
    oidRef: "1.3.6.1.2.1.2.2.1.2.{#SNMPINDEX}",
  },
  {
    oid: "1.3.6.1.2.1.2.2.1.8.12",
    value: "1",
    oidCat: "INTERFACE_OPERATIONAL_STATUS",
    oidRef: "1.3.6.1.2.1.2.2.1.8.{#SNMPINDEX}",
    valuePrev: "1",
  },
  {
    oid: "1.3.6.1.2.1.2.2.1.19.12",
    value: "0",
    oidCat: "INTERFACE_OUTBOUND_PACKETS_DISCARDED",
    oidRef: "1.3.6.1.2.1.2.2.1.19.{#SNMPINDEX}",
  },
  {
    oid: "1.3.6.1.2.1.2.2.1.20.12",
    value: "0",
    oidCat: "INTERFACE_OUTBOUND_PACKETS_WITH_ERRORS",
    oidRef: "1.3.6.1.2.1.2.2.1.20.{#SNMPINDEX}",
    valuePrev: "0",
  },
  {
    oid: "1.3.6.1.2.1.2.2.1.5.12",
    value: "10000000",
    oidCat: "INTERFACE_SPEED",
    oidRef: "1.3.6.1.2.1.2.2.1.5.{#SNMPINDEX}",
    valuePrev: "10000000",
  },
  {
    oid: "1.3.6.1.2.1.2.2.1.3.12",
    value: "6",
    oidCat: "INTERFACE_TYPE",
    oidRef: "1.3.6.1.2.1.2.2.1.3.{#SNMPINDEX}",
  },
  {
    oid: "1.3.6.1.2.1.2.2.1.10.13",
    value: "1295122",
    oidCat: "INTERFACE_BITS_RECEIVED",
    oidRef: "1.3.6.1.2.1.2.2.1.10.{#SNMPINDEX}",
  },
  {
    oid: "1.3.6.1.2.1.2.2.1.16.13",
    value: "2338804",
    oidCat: "INTERFACE_BITS_SEND",
    oidRef: "1.3.6.1.2.1.2.2.1.16.{#SNMPINDEX}",
  },
  {
    oid: "1.3.6.1.2.1.2.2.1.13.13",
    value: "0",
    oidCat: "INTERFACE_INBOUND_PACKETS_DISCARDED",
    oidRef: "1.3.6.1.2.1.2.2.1.13.{#SNMPINDEX}",
  },
  {
    oid: "1.3.6.1.2.1.2.2.1.14.13",
    value: "0",
    oidCat: "INTERFACE_INBOUND_PACKETS_WITH_ERRORS",
    oidRef: "1.3.6.1.2.1.2.2.1.14.{#SNMPINDEX}",
    valuePrev: "0",
  },
  {
    oid: "1.3.6.1.2.1.2.2.1.2.13",
    value: "ztb6k29b6h6g24m",
    oidCat: "INTERFACE_NAME",
    oidRef: "1.3.6.1.2.1.2.2.1.2.{#SNMPINDEX}",
  },
  {
    oid: "1.3.6.1.2.1.2.2.1.8.13",
    value: "1",
    oidCat: "INTERFACE_OPERATIONAL_STATUS",
    oidRef: "1.3.6.1.2.1.2.2.1.8.{#SNMPINDEX}",
    valuePrev: "1",
  },
  {
    oid: "1.3.6.1.2.1.2.2.1.19.13",
    value: "0",
    oidCat: "INTERFACE_OUTBOUND_PACKETS_DISCARDED",
    oidRef: "1.3.6.1.2.1.2.2.1.19.{#SNMPINDEX}",
  },
  {
    oid: "1.3.6.1.2.1.2.2.1.20.13",
    value: "0",
    oidCat: "INTERFACE_OUTBOUND_PACKETS_WITH_ERRORS",
    oidRef: "1.3.6.1.2.1.2.2.1.20.{#SNMPINDEX}",
    valuePrev: "0",
  },
  {
    oid: "1.3.6.1.2.1.2.2.1.5.13",
    value: "10000000",
    oidCat: "INTERFACE_SPEED",
    oidRef: "1.3.6.1.2.1.2.2.1.5.{#SNMPINDEX}",
    valuePrev: "10000000",
  },
  {
    oid: "1.3.6.1.2.1.2.2.1.3.13",
    value: "6",
    oidCat: "INTERFACE_TYPE",
    oidRef: "1.3.6.1.2.1.2.2.1.3.{#SNMPINDEX}",
  },
];

const oidToOIDCatMap = oidList.reduce((acc, curr, index) => {
  const { oid, oidCat, value, oidRef } = curr;
  acc[index + 1] = {
    [oidCat]: {
      oid,
      value,
      oidCat,
      oidRef,
    },
  };

  return acc;
}, {});
console.log(JSON.stringify(oidToOIDCatMap, null, 3));
