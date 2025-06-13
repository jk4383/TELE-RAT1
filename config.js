const parsedId = Number(process.env.ID);
module.exports = {
  token: process.env.TOKEN || ':7813666870:AAGM6STxxN2mqeZm0Vjb1RrrR1paecUdPDE',
  id: isNaN(parsedId) ? 1744992866 : parsedId // replace 12345.. with your telegram chat id
};
