import express, { Request, Response } from 'express';
import * as pgk from 'package.json';
import bodyParser from 'body-parser';
import { GetAllCategories } from './controllers/Categories/GetAllCategories';
import { CreateCategory } from './controllers/Categories/CreateCategory';
import { GetCategoryByID } from './controllers/Categories/GetCategoryByID';
import { UpdateCategory } from './controllers/Categories/UpdateCategory';
import { DeleteCategory } from './controllers/Categories/DeleteCategory';
const app = express();
app.use('/version', (req: Request, res: Response) => {
  res.json({
    version: pgk.version,
    name: pgk.name,
  });
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/categories/:id', GetCategoryByID);
app.get('/categories', GetAllCategories);
app.post('/categories/create', CreateCategory);
app.patch("/category/update/:id",UpdateCategory)
app.delete("/category/delete/:id",DeleteCategory)

app.listen({ port: 8080 }, () => {
  console.log('server is running on port 8080');
});
