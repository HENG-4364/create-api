import { knx } from "src/connections/CreateKnexConnectios";
import {Request,Response}  from "express";
export async function GetAllCategories (req: Request, res:Response){
  const categories = await knx("category");
  res.json(categories)
}