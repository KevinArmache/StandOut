import axios from 'axios';
const baseDomain = 'https://supro.noudeveloper.com';
export const wp = 'https://wp.nouhtml5.com';
export const baseUrlProduct = 'https://supro.noudeveloper.com';

export const customHeaders = {
    Accept: 'application/json',
};

export const baseUrl = `${baseDomain}`;

export default axios.create({
    baseUrl,
    headers: customHeaders,
});

export const serializeQuery = (query) => {
    return Object.keys(query)
        .map(
            (key) =>
                `${encodeURIComponent(key)}=${encodeURIComponent(query[key])}`
        )
        .join('&');
};
