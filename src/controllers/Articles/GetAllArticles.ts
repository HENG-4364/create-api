import { knx } from "src/connections/CreateKnexConnectios";
import {Request,Response}  from "express";
export async function GetAllArticles (req: Request, res:Response){
  const articles = await knx("articles");
  res.json(articles)
}