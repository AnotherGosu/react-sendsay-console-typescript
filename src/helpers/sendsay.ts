// @ts-ignore: No types declaration for such module
import Sendsay from 'sendsay-api';

const sendsay = new Sendsay();
sendsay.setSessionFromCookie('sendsay_session');

export default sendsay;
