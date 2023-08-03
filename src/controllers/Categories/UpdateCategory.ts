import { knx } from 'src/connections/CreateKnexConnectios';
import { Request, Response } from 'express';
export async function UpdateCategory(req: Request, res: Response) {
  const { category_name } = req.body;
  const { id } = req.params;
  const updateCategory = await knx('category').update({ category_name }).where({ id });
  if (updateCategory) {
    res.status(200).send('Updated Successfully');
  } else {
    res.status(200).send('Can not Updated');
  }
}
