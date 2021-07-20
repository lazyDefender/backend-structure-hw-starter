class AbstractRepository {
    constructor({ db, model }) {
        this.db = db;
        this.model = model;
    }
    
    getAll() {
      return db
        .select()
        .table(this.model);
    }
    
    async getById(id) {
      const users = await this
        .db(this.model)
        .where({ id });
      
      return users[0];
    }
    
    create(data) {
      return this
        .db(this.model)
        .insert(data)
        .returning('*');
    }
    
    async updateById(id, data) {
      const result = await this
        .db(this.model)
        .where({ id })
        .update({
          ...data,
          updated_at: new Date()
        })
        .returning('*');
    
      return result[0];
    }
    
    deleteById(id) {
      return this
        .db(this.model)
        .where({ id })
        .del();
    }
}

export { AbstractRepository };