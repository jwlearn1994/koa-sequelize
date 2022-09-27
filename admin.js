const AdminJS = require('adminjs');
const AdminJSKoa = require('@adminjs/koa');
const Koa = require('koa');
const AdminJSSequelize = require('@adminjs/sequelize');
const models = require('./models');

const { teacher, lesson, teacher_lesson, office } = models

AdminJS.registerAdapter({
  Resource: AdminJSSequelize.Resource,
  Database: AdminJSSequelize.Database,
})

const PORT = 8001

const start = async () => {
  const app = new Koa()
  const admin = new AdminJS({
    resources: [teacher, lesson, teacher_lesson, office],
    rootPath: '/admin',
  })

  const router = AdminJSKoa.buildRouter(admin, app)

  app
    .use(router.routes())
    .use(router.allowedMethods())

  app.listen(PORT, () => {
    console.log(`AdminJS available at http://localhost:${PORT}${admin.options.rootPath}`)
  })
}

start()