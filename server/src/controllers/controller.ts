import * as Koa from 'koa';

const helloWorld = (ctx: Koa.Context) => {
  ctx.body = 'Hello Koa';
}

export { helloWorld };