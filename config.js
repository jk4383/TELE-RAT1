const parsedId = Number(process.env.ID);
module.exports = {
  token: process.env.TOKEN || '7908847611:AAHsi0DCDk9ccD0ZcjacQh5LDMWttOHomY8',
  id: isNaN(parsedId) ? 1744992866 : parsedId // replace 12345.. with your telegram chat id
};
