import { knx } from "src/connections/CreateKnexConnectios";
import {Request,Response}  from "express";
export async function GetArticlesByID (req:Request,res:Response){
  const articles =await knx("articles").where({id:req.params.id}).first();
  res.json(articles);
}