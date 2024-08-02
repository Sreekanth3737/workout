const data = [
  {
    adminPolicy: {
      geoLocationMgmt: {
        MANAGE: {
          own: false,
        },
        READ: {
          own: false,
        },
      },
      inventoryMgr: {
        MANAGE: {
          own: false,
        },
        READ: {
          own: false,
        },
      },
      neOperationMgmt: {
        READ: {
          own: false,
        },
      },
      dashboardMgmt: {
        MANAGE: {
          own: false,
        },
      },
      deviceMgmt: {
        MANAGE: {
          own: false,
        },
      },
      docTemplate: {
        MANAGE: {
          own: false,
        },
      },
      dolphinReq: {
        MANAGE: {
          own: false,
        },
      },
      roleMgmt: {
        MANAGE: {
          own: false,
        },
      },
      sonorAgentMgmt: {
        MANAGE: {
          own: false,
        },
        READ: {
          own: false,
        },
      },
      userBusinessRole: {
        MANAGE: {
          own: false,
        },
      },
      userMgmt: {
        MANAGE: {
          own: false,
        },
        READ: {
          own: false,
        },
      },
    },
    label: "Customer B2B",
  },
  {
    adminPolicy: {
      geoLocationMgmt: {
        MANAGE: {
          own: false,
        },
        READ: {
          own: false,
        },
      },
      inventoryMgr: {
        MANAGE: {
          own: false,
        },
        READ: {
          own: false,
        },
      },
      neOperationMgmt: {
        READ: {
          own: false,
        },
      },
      dashboardMgmt: {
        MANAGE: {
          own: false,
        },
      },
      deviceMgmt: {
        MANAGE: {
          own: false,
        },
      },
      docTemplate: {
        MANAGE: {
          own: false,
        },
      },
      dolphinReq: {
        MANAGE: {
          own: false,
        },
      },
      roleMgmt: {
        MANAGE: {
          own: false,
        },
      },
      sonorAgentMgmt: {
        MANAGE: {
          own: false,
        },
        READ: {
          own: false,
        },
      },
      userBusinessRole: {
        MANAGE: {
          own: false,
        },
      },
      userMgmt: {
        MANAGE: {
          own: false,
        },
        READ: {
          own: false,
        },
      },
    },
    label: "Customer GVT",
  },
  {
    adminPolicy: {
      geoLocationMgmt: {
        MANAGE: {
          own: false,
        },
        READ: {
          own: false,
        },
      },
      inventoryMgr: {
        MANAGE: {
          own: false,
        },
        READ: {
          own: false,
        },
      },
      neOperationMgmt: {
        READ: {
          own: false,
        },
      },
      businessMgmt: {
        MANAGE: {
          own: false,
        },
      },
      dashboardMgmt: {
        MANAGE: {
          own: false,
        },
      },
      deviceMgmt: {
        MANAGE: {
          own: false,
        },
      },
      docTemplate: {
        MANAGE: {
          own: false,
        },
      },
      dolphinReq: {
        MANAGE: {
          own: false,
        },
      },
      roleMgmt: {
        MANAGE: {
          own: false,
        },
      },
      sonorAgentMgmt: {
        MANAGE: {
          own: false,
        },
        READ: {
          own: false,
        },
      },
      userBusinessRole: {
        MANAGE: {
          own: false,
        },
      },
      userMgmt: {
        MANAGE: {
          own: false,
        },
        READ: {
          own: false,
        },
      },
    },
    label: "Distributor",
  },
  {
    adminPolicy: {
      geoLocationMgmt: {
        MANAGE: {
          own: false,
        },
        READ: {
          own: false,
        },
      },
      inventoryMgr: {
        MANAGE: {
          own: false,
        },
        READ: {
          own: false,
        },
      },
      neOperationMgmt: {
        READ: {
          own: false,
        },
      },
      businessMgmt: {
        MANAGE: {
          own: false,
        },
      },
      dashboardMgmt: {
        MANAGE: {
          own: false,
        },
      },
      deviceMgmt: {
        MANAGE: {
          own: false,
        },
      },
      docTemplate: {
        MANAGE: {
          own: false,
        },
      },
      dolphinReq: {
        MANAGE: {
          own: false,
        },
      },
      roleMgmt: {
        MANAGE: {
          own: false,
        },
      },
      sonorAgentMgmt: {
        MANAGE: {
          own: false,
        },
        READ: {
          own: false,
        },
      },
      userBusinessRole: {
        MANAGE: {
          own: false,
        },
      },
      userMgmt: {
        MANAGE: {
          own: false,
        },
        READ: {
          own: false,
        },
      },
    },
    label: "Partner",
  },
  {
    adminPolicy: {
      geoLocationMgmt: {
        MANAGE: {
          own: false,
        },
        READ: {
          own: false,
        },
      },
      inventoryMgr: {
        MANAGE: {
          own: false,
        },
        READ: {
          own: false,
        },
      },
      neOperationMgmt: {
        READ: {
          own: false,
        },
      },
      businessMgmt: {
        MANAGE: {
          own: false,
        },
      },
      dashboardMgmt: {
        MANAGE: {
          own: false,
        },
      },
      deviceMgmt: {
        MANAGE: {
          own: false,
        },
      },
      docTemplate: {
        MANAGE: {
          own: false,
        },
      },
      dolphinReq: {
        MANAGE: {
          own: false,
        },
      },
      roleMgmt: {
        MANAGE: {
          own: false,
        },
      },
      sonorAgentMgmt: {
        MANAGE: {
          own: false,
        },
        READ: {
          own: false,
        },
      },
      userBusinessRole: {
        MANAGE: {
          own: false,
        },
      },
      userMgmt: {
        MANAGE: {
          own: false,
        },
        READ: {
          own: false,
        },
      },
    },
    label: "Reseller",
  },
];

const SERVICE_IDS = {
  linkedBusinessList: "linkedBusinessList",
  relationshipMgmt: "relationshipMgmt",
  businessTierMgmt: "businessTierMgmt",
  lookup: "lookup",
  userAuditLog: "userAuditLog",
  bulkUploadInventory: "bulkUploadInventory",
  businessMgmt: "businessMgmt",
  dashboardMgmt: "dashboardMgmt",
  deviceMgmt: "deviceMgmt",
  docTemplate: "docTemplate",
  dolphinReq: "dolphinReq",
  geoLocationMgmt: "geoLocationMgmt",
  hostTemplateMgmt: "hostTemplateMgmt",
  inventoryMgr: "inventoryMgr",
  neOperationMgmt: "neOperationMgmt",
  oidItemsMgmt: "oidItemsMgmt",
  prodCatalogMgmt: "prodCatalogMgmt",
  relationshipBuilder: "relationshipBuilder",
  roleMgmt: "roleMgmt",
  sonorAgentMgmt: "sonorAgentMgmt",
  userBusinessRole: "userBusinessRole",
  userMgmt: "userMgmt",
};

function calculatePoints(adminPolicy, label) {
  let totalPoints = 0;

  for (const serviceId in adminPolicy) {
    if (SERVICE_IDS.hasOwnProperty(serviceId)) {
      const access = adminPolicy[serviceId];
      if (access.MANAGE && access.MANAGE.own) {
        totalPoints += 1;
      } else if (access.READ && access.READ.own) {
        totalPoints += 0.5;
      }
    }
  }
  console.log(`Label: ${label}, Total Points: ${totalPoints}`);

  return totalPoints;
}

function generateSortedLabelsWithPoints(data) {
  const sortedLabelsWithPoints = data.map((item) => {
    const label = item.label;
    const points = calculatePoints(item.adminPolicy?.access, label);
    return { label, points, restOfData: item };
  });

  sortedLabelsWithPoints.sort((a, b) => b.points - a.points);

  return sortedLabelsWithPoints;
}

function generateSortedLabelsWithValueLabelAndPoints(data) {
  const sortedLabelsWithPoints = generateSortedLabelsWithPoints(data);

  const sortedLabelsWithValueAndLabelAndPoints = sortedLabelsWithPoints.map(
    (item) => ({
      ...item,
      value: item.restOfData._id,
    })
  );

  return sortedLabelsWithValueAndLabelAndPoints;
}

const businessRelationshipTypeOptionWithPoints =
  generateSortedLabelsWithValueLabelAndPoints(data);
console.log(businessRelationshipTypeOptionWithPoints);
