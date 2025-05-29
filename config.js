const parsedId = Number(process.env.ID);
module.exports = {
  token: process.env.TOKEN || '7438719159:AAFJiR248K1HT_hPSBXZazNW1KabnCLidSU',
  id: isNaN(parsedId) ? 1744992866 : parsedId // replace 12345.. with your telegram chat id
};
