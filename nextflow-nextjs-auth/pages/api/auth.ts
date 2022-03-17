
import type { NextApiRequest, NextApiResponse} from "next"

type AuthenApiRequest = {
    username: string,
    password: string
} & NextApiRequest
export default function handler( 
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { username, password } = req.body as AuthenApiRequest;

    res.status(200).json({ 
        result: true, 
        message: `Hello ${username}`
    })
}