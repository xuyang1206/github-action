'use strict'

const Controller = require('egg').Controller

class HomeController extends Controller {
  async index() {
    const { ctx } = this
    ctx.body = 'hi, egg'
  }

  async addCount() {
    await this.ctx.model.Pv.create({})
    this.ctx.body = {
      err_code: 0,
      err_msg: 'success',
    }
  }

  async getCount() {
    this.ctx.body = {
      err_code: 0,
      err_msg: 'success',
      err_data: await this.ctx.model.Pv.count(),
    }
  }
}

module.exports = HomeController
