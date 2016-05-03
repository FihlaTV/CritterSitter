exports.up = function(knex, Promise) {
    return knex.schema.createTable('messages', function(t) {
        t.increments('id').unsigned().primary();
        t.dateTime('createdAt').notNull();
        t.dateTime('updatedAt').nullable();
        t.dateTime('deletedAt').nullable();

        t.integer('userId')
            .unsigned()
            .notNull()
            .references('id')
            .inTable('users')
            .onDelete('CASCADE');
        t.text('messageBody').notNull();
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('messages');
};