import Cookies from 'universal-cookie';

export default function isLoggedIn() {
    const cookies = new Cookies();
    let curId = cookies.get('cur-id');
    if(!curId) return -1;
    return curId;
}