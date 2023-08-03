import { knx } from "src/connections/CreateKnexConnectios";
import {Request,Response}  from "express";
export async function GetCategoryByID (req:Request,res:Response){
  const categories =await knx("category").where({id:req.params.id}).first();
  res.json(categories);
}