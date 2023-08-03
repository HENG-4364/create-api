import { knx } from 'src/connections/CreateKnexConnectios';
import { Request, Response } from 'express';
export async function UpdateArticles(req: Request, res: Response) {
  const {  title,summary,description,image,category_id,updated_at,created_at  } = req.body;
  const { id } = req.params;
  const updateArticles = await knx('articles').update({  title,summary,description,image,category_id,updated_at,created_at  }).where({ id });
  if (updateArticles) {
    res.status(200).send('Updated Successfully');
  } else {
    res.status(200).send('Can not Updated');
  }
}
