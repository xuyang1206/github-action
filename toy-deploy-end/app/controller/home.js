'use strict'

const Controller = require('egg').Controller

class HomeController extends Controller {
  async index() {
    const { ctx } = this
    ctx.body = 'hi, egg'
  }

  async count() {
    this.ctx.body = {
      count: 100,
    }
  }
}

module.exports = HomeController
