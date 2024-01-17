import dotenv from 'dotenv';
dotenv.config();
import jwt from 'jsonwebtoken';
const { sign, verify } = jwt;
const secret = process.env.SECRET || 'mysecretkey';
console.log(secret);
const users = [];
export async function login(req, res) {
    const user = req.body;
    users.push(user);
    console.log(users);
    const token = sign({ name: user.name, email: user.email }, secret);
    return res.json({ token });
}
export function verifyToken(req, res) {
    const token = req.body.token;
    try {
        const user = verify(token, secret);
        return res.send(user);
    }
    catch (error) {
        return res.send(false);
    }
}
//# sourceMappingURL=auth.controller.js.map