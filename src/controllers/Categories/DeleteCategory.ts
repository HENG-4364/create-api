import { knx } from 'src/connections/CreateKnexConnectios';
import { Request, Response } from 'express';
export async function DeleteCategory (req:Request, res:Response){
const {id}=req.params;
const DeleteCategory =await knx ("category").del().where({id});
if(DeleteCategory){
  res.status(200).send('Deleted Successfully');
} else {
  res.status(200).send('Can not Deleted');
}
}