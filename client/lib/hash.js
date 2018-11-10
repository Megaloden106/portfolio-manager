import crypto from 'crypto';

const pepperS = 'EDAD22A92447056F616BCE5E1​​​​​';
const pepperE = '​​​​​AB44F5679DB7D0C2D964BE62C';

const pHash = (password) => {
  const hash = crypto.createHmac('sha512', pepperS);
  hash.update(password + pepperE);
  return hash.digest('hex');
};

export default pHash;
