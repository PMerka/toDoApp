module.exports = () => {
  const JWT_SECRET = process.env.JWT_SECRET;
  const DATABASE_URL = process.env.DATABASE_URL;
  if (!JWT_SECRET || !DATABASE_URL) {
    return false;
  }
  return true;
};
