export const base_url: string = 'http://api.radgiri.com/api/'

export const GET = async (endPoint: string) => {
  const res = await fetch(`${base_url}${endPoint}`)
}

export const POST = async (endPoint: string , param : object) => {
  const res = await fetch(`${base_url}${endPoint}`, {
    method: "POST",
    body: JSON.stringify(param),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
  .then((response) => response.json())
  .then((json) => console.log(json)); 
}
