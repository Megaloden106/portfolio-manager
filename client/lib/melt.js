import crypto from 'crypto';

const red = process.env.PEPPER_S;
const blue = process.env.PEPPER_E;

const spice = (password) => {
  const hash = crypto.createHmac('sha512', red);
  hash.update(password + blue);
  return hash.digest('hex');
};

export default spice;
