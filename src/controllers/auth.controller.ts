import dotenv from 'dotenv';
dotenv.config();

import { Request, Response } from 'express';
import jwt from 'jsonwebtoken'
const {sign, verify} = jwt
type User = {
  name: string;
  email: string;
  password: string;
  age: number;
};
const secret = process.env.SECRET || 'mysecretkey';
console.log(secret)
const users = []
export async function login(req: Request, res: Response): Promise<Response> {
  const user: User = req.body;
    users.push(user)
    console.log(users)
  const token = sign(
    { name: user.name, email: user.email},
    secret
  );
  return res.json({ token });
}
export function verifyToken(req: Request, res: Response): any {
  const token = req.body.token;
  try {
    const user = verify(token, secret);
    return res.send(user);
  } catch (error) {
    return res.send(false);
  }
}