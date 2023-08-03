import { knx } from 'src/connections/CreateKnexConnectios';
import { Request, Response } from 'express';
export async function CreateArticles(req: Request, res: Response) {
  const { title,summary,description,image,category_id,updated_at,created_at } = req.body;
  const [createArticles] = await knx('category').insert({ title,summary,description,image,category_id,updated_at,created_at  });
  if (createArticles > 0) {
    res.status(200).send('Created Successfully');
  } else {
    res.status(200).send('Can not create');
  }
}
