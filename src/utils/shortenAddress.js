export const shortenAddress = (address) =>
  `${address.slice(0, 21)}...${address.slice(address.length - 4)}`;
