const getRandomMACAddress = () => {
  const macAddress = [];
  for (let i = 0; i < 6; i++) {
    const part = Math.floor(Math.random() * 256)
      .toString(16)
      .padStart(2, "0");
    macAddress.push(part);
  }
  return macAddress.join(":").toUpperCase(); // or '-' for a different separator
};

// Example usage:
console.log(getRandomMACAddress());
