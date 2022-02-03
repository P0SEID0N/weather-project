export const formatGetRequest = (q = {}) => {
    return Object.keys(q).reduce((result, key) => {
        return [...result, `${encodeURIComponent(key)}=${encodeURIComponent(q[key])}`]
    }, []).join('&');
}