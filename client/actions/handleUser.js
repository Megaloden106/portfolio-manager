import register from '../lib/register';
import authenticate from '../lib/authenticate';

const handleRegister = user => dispatch => register(user);

const handleAuthentication = user => dispatch => authenticate(user);

export { handleRegister, handleAuthentication };
