import { knx } from 'src/connections/CreateKnexConnectios';
import { Request, Response } from 'express';
export async function CreateCategory(req: Request, res: Response) {
  const { category_name } = req.body;
  const [createCategory] = await knx('category').insert({ category_name });
  if (createCategory > 0) {
    res.status(200).send('Created Successfully');
  } else {
    res.status(200).send('Can not create');
  }
}
