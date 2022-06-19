'use strict'

module.exports = (app) => {
  const { STRING, INTEGER, DATE } = app.Sequelize

  const User = app.model.define('pv', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    created_at: DATE,
    updated_at: DATE,
    deleted_at: DATE,
  })

  return User
}
