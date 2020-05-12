import fetch from 'fetch-retry'
import getConfig from 'next/config';

import { extractApiRoute } from '../../utils';


// common route without authentication for get requests
export function getApiRouteHandler(req, res) {


    const { serverRuntimeConfig } = getConfig();
    const { API_GATEWAY_URL } = serverRuntimeConfig


    const apiRoute = extractApiRoute(req.url)

    fetch(`${API_GATEWAY_URL}${apiRoute}`, {

        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            "access-control-allow-origin": "*"
        }
    })
        .then(response => {
            if (response.status === 200) {
                res.status(response.status)
                return response.json()
            } else {
                switch (response.status) {
                    case 404:
                        throw new Error('404');
                    case 500:
                        throw new Error('500');
                    default:
                        throw new Error('Some error occured');
                }
            }
        })
        .then(response => res.json(response))
        .catch(err => {


            switch (err.message) {

                case '404': {
                    return res.status(404).json(err)
                }
                case '500': {
                    return res.status(500).json(err)
                }
                default: {
                    return res.status(502).json(err)
                }
            }
        })


}

