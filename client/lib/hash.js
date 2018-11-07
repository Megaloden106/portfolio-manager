import crypto from 'crypto';

const pepperS = 'EDAD22A92447056F616BCE5E1​​​​​';
const pepperE = '​​​​​AB44F5679DB7D0C2D964BE62C';

const genRandomString = length => crypto.randomBytes(Math.ceil(length / 2))
  .toString('hex')
  .slice(0, length);

const sha512 = (password, salt) => {
  const hash = crypto.createHmac('sha512', pepperS + salt);
  hash.update(password + pepperE);
  const value = hash.digest('hex');
  return value;
};

export { genRandomString, sha512 };
