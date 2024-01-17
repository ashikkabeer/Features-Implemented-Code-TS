import express, { Request, Response, response } from 'express';


type User = {
    name: string,
    email: string,
    age:number
};

class AuthController {
    login = async (req: Request, res: Response): Promise<Response> => {
        const user:User = req.body;
        return res; 
    }
}