export default defineEventHandler((event) => {
  // const regex = new RegExp('ab+c')
  // const token = event.req.headers.cookie
  // function test(){
  //   const data = token?.search()
  //   console.log(data);
  // }
  // console.log(token);
  // event.context.auth = { user: 111 }
  // console.log(event.context.auth);
  const token = event.req.headers.cookie
})
