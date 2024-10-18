import express, { Router } from "express";
import UserRouter from './users.js'


const RouterApi = (app) => {
    const router = Router()
    router.use('/v1', UserRouter);
    app.use(router);
};


export default RouterApi;