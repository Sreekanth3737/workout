const fs = require("fs");
function updateEnvVariable(updateData) {
  try {
    const envFilePath = "./.env";
    const envVars = fs.readFileSync(envFilePath, "utf8").split("\n");

    const envVarsObj = {};
    const updatedVars = [];

    envVars.forEach((useLine) => {
      const [key, value] = useLine.split("=");
      if (key) {
        envVarsObj[key] = value;
      }
    });

    updateData.forEach(({ key, value }) => {
      envVarsObj[key] = value;
      console.log(`Updated ${key} in .env file.`);
    });

    for (const key in envVarsObj) {
      if (envVarsObj.hasOwnProperty(key)) {
        updatedVars.push(`${key}=${envVarsObj[key]}`);
      }
    }

    fs.writeFileSync(envFilePath, updatedVars.join("\n"));
    console.log("done", updatedVars.join("\n"));
  } catch (error) {
    console.log(`Failed to update .env file: ${error.stack || error.message}`);
    throw error;
  }
}

updateEnvVariable([
  { key: "ACCESS_TOKEN", value: "AccessToken4444" },
  { key: "REFRESH_TOKEN", value: "RefreshToken4444" },
]);
