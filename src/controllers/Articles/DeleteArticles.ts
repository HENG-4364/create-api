import { knx } from 'src/connections/CreateKnexConnectios';
import { Request, Response } from 'express';
export async function DeleteArticles (req:Request, res:Response){
const {id}=req.params;
const DeleteArticles =await knx ("articles").del().where({id});
if(DeleteArticles){
  res.status(200).send('Deleted Successfully');
} else {
  res.status(200).send('Can not Deleted');
}
}