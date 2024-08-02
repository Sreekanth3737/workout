const data = [
  {
    id: "dashboard-management",
    label: "Dashboard",
    header: "Dashboard",
  },
  {
    componentName: "",
    headerId: "dashboard-management",
    icon: "Home",
    id: "dashboard-main",
    isParent: true,
    isTab: false,
    navLink: "",
    parentId: "",
    serviceId: ["businessDashboard", "networkDashboard"],
    title: "Dashboard",
    children: [
      {
        componentName: "",
        headerId: "dashboard-management",
        icon: "Circle",
        id: "dashboard",
        isParent: false,
        isTab: false,
        navLink: "/dashboard",
        parentId: "dashboard-main",
        serviceId: ["businessDashboard", "networkDashboard"],
        title: "Dashboard mgmt",
      },
    ],
  },
  {
    id: "control-panel",
    label: "Control panel",
    header: "Control panel",
  },
  {
    componentName: "",
    headerId: "control-panel",
    icon: "User",
    id: "administration",
    isParent: true,
    isTab: false,
    navLink: "",
    parentId: "",
    serviceId: [
      "businessMgmt",
      "roleMgmt",
      "userMgmt",
      "userBusinessRole",
      "docTemplate",
      "geoLocationMgmt",
    ],
    title: "Administration",
    children: [
      //   {
      //     componentName: "",
      //     headerId: "control-panel",
      //     icon: "Circle",
      //     id: "business-mgr",
      //     isParent: false,
      //     isTab: false,
      //     navLink: "/business/business-mgr",
      //     parentId: "administration",
      //     serviceId: ["businessMgmt", "relationshipBuilder"],
      //     title: "Business mgr",
      //   },
      //   {
      //     componentName: "",
      //     headerId: "control-panel",
      //     icon: "Circle",
      //     id: "user-nested-mgmt",
      //     isParent: false,
      //     isTab: false,
      //     navLink: "/business/user",
      //     parentId: "administration",
      //     serviceId: ["userMgmt", "userBusinessRole"],
      //     title: "User mgmt",
      //   },
      //   {
      //     componentName: "",
      //     headerId: "control-panel",
      //     icon: "Circle",
      //     id: "email-template-manager",
      //     isParent: false,
      //     isTab: false,
      //     navLink: "/business/email-templates",
      //     parentId: "administration",
      //     serviceId: "docTemplate",
      //     title: "Email template mgr",
      //   },
    ],
  },
  {
    id: "location-header",
    label: "Location",
    header: "Location",
  },
  {
    componentName: "",
    headerId: "location-header",
    icon: "Map",
    id: "location-management",
    isParent: true,
    isTab: false,
    navLink: "",
    parentId: "",
    serviceId: ["geoLocationMgmt"],
    title: "Location",
    children: [
      //   {
      //     componentName: "",
      //     headerId: "location-header",
      //     icon: "Circle",
      //     id: "location-manager",
      //     isParent: false,
      //     isTab: false,
      //     navLink: "/business/location-mgr",
      //     parentId: "location-management",
      //     serviceId: "geoLocationMgmt",
      //     title: "Location mgr",
      //   },
    ],
  },
  {
    id: "distribution-store",
    label: "Distribution store",
    header: "Distribution store",
  },
  {
    componentName: "",
    headerId: "distribution-store",
    icon: "HardDrive",
    id: "hardware-management",
    isParent: true,
    isTab: false,
    navLink: "",
    parentId: "",
    serviceId: [
      "bulkUploadInventory",
      "inventoryMgr",
      "prodCatalogMgmt",
      "rejectedInventoryMgmt",
      "unverifiedInventoryMgmt",
    ],
    title: "Hardware",
    children: [
      {
        componentName: "",
        headerId: "distribution-store",
        icon: "Circle",
        id: "inventory-management",
        isParent: false,
        isTab: true,
        navLink: "/hardware/inventory-mgmt",
        parentId: "hardware-management",
        serviceId: [
          "bulkUploadInventory",
          "inventoryMgr",
          "prodCatalogMgmt",
          "rejectedInventoryMgmt",
          "unverifiedInventoryMgmt",
        ],
        title: "Inventory mgmt",
      },
    ],
  },
  {
    id: "device-services",
    label: "Services",
    header: "Services",
  },
  {
    componentName: "",
    headerId: "device-services",
    icon: "Globe",
    id: "network-management",
    isParent: true,
    isTab: false,
    navLink: "",
    parentId: "",
    serviceId: [
      "sonorAgentMgmt",
      "dolphinReq",
      "deviceMgmt",
      "hostTemplateMgmt",
      "oidItemsMgmt",
    ],
    title: "Network",
    children: [
      {
        componentName: "",
        headerId: "device-services",
        icon: "Circle",
        id: "gateway-management",
        isParent: true,
        isTab: false,
        navLink: "",
        parentId: "network-management",
        serviceId: ["sonorAgentMgmt", "dolphinReq"],
        title: "Gateway",
        children: [
          {
            componentName: "",
            headerId: "device-services",
            icon: "Circle",
            id: "agent-management",
            isParent: false,
            isTab: false,
            navLink: "/network/gateway-agent",
            parentId: "gateway-management",
            serviceId: "sonorAgentMgmt",
            title: "aSonor agent",
          },
          {
            componentName: "",
            headerId: "device-services",
            icon: "Circle",
            id: "discover-devices",
            isParent: false,
            isTab: false,
            navLink: "/network/auto-discovery",
            parentId: "gateway-management",
            serviceId: "dolphinReq",
            title: "Discover",
          },
        ],
      },
      {
        componentName: "",
        headerId: "device-services",
        icon: "Circle",
        id: "device-management",
        isParent: true,
        isTab: false,
        navLink: "",
        parentId: "network-management",
        serviceId: ["deviceMgmt"],
        title: "Monitoring",
        children: [
          {
            componentName: "",
            headerId: "device-services",
            icon: "Circle",
            id: "device-manager",
            isParent: false,
            isTab: false,
            navLink: "/network/network-management",
            parentId: "device-management",
            serviceId: "deviceMgmt",
            title: "Device mgr",
          },
          {
            componentName: "",
            headerId: "device-services",
            icon: "Circle",
            id: "device-graphs",
            isParent: false,
            isTab: false,
            navLink: "/network/network-dashboard",
            parentId: "device-management",
            serviceId: "deviceMgmt",
            title: "Graphs",
          },
          {
            componentName: "",
            headerId: "device-services",
            icon: "Circle",
            id: "device-monitoring-profiles",
            isParent: false,
            isTab: false,
            navLink: "/network/monitoring-profiles",
            parentId: "device-management",
            serviceId: ["hostTemplateMgmt", "oidItemsMgmt"],
            title: "M.Profiles",
          },
        ],
      },
      {
        componentName: "",
        headerId: "device-services",
        icon: "Circle",
        id: "device-monitoring",
        isParent: true,
        isTab: false,
        navLink: "",
        parentId: "network-management",
        serviceId: ["hostTemplateMgmt", "oidItemsMgmt"],
        title: "Management",
        children: [],
      },
    ],
  },
];

const updatedItems = [];
// for (let items of data) {
//   let currentItem = data.indexOf(items);
//   let firstItem = data[currentItem];
//   let nextItem = data[currentItem + 1];
//   if (
//     nextItem &&
//     firstItem.id === nextItem.headerId &&
//     nextItem.children.length === 0
//   ) {
//     updatedItems.push(firstItem, nextItem);
//   }
// }
const newData = data.filter((item, index) => {
  let nextItem = data[index + 1];
  return (
    nextItem && item.id === nextItem.headerId && nextItem.children.length === 0
  );
});

console.log(newData);