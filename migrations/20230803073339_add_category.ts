
import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    if(!(await knex.schema.hasTable("category"))){
        return await knex.schema.createTable("category",(field)=>{
            field.increments();
            field.string("category_name");
            field.string("updated_at");
            field.string("created_at");
        })
    }
}


export async function down(knex: Knex): Promise<void> {
}