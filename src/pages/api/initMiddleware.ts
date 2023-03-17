import { NextApiRequest, NextApiResponse } from 'next';

type Middleware = (req: NextApiRequest, res: NextApiResponse, next: () => void) => void;

/**
 * Helper function to initialize middleware
 *
 * @param middleware The middleware function to initialize
 */
export default function initMiddleware(middleware: Middleware) {
    return (req: NextApiRequest, res: NextApiResponse) =>
        new Promise((resolve, reject) => {
            middleware(req, res, result => {
                if (result instanceof Error) {
                    return reject(result);
                }
                return resolve(result);
            });
        });
}
