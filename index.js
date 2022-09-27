const Koa = require('koa');
const KoaRouter = require('@koa/router');
const koaBody = require('koa-body');
const dbManager = require('./db-manager');

const app = new Koa();
const router = new KoaRouter({ prefix: '/api' });

router.get('/', (ctx) => {
  ctx.body = 'welcome';
})

router.get('/teacher', async (ctx) => {
  const { id } = ctx.query;
  const result = await dbManager.getTLsByTeacher(id);
  ctx.body = result;
})

router.post('/match/teacher-lesson', async (ctx) => {
  const { body: { lessonId, teacherId } } = ctx.request;
  const result = await dbManager.createTeacherLesson(lessonId, teacherId);
  ctx.body = result;
})

app.use(koaBody());
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(8000, () => console.log('server listen 8000'));
