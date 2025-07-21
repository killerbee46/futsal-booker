export const getQuery = (queryKeys:any, searchParams:any) => {
  let query = {}
  for (let index = 0; index < queryKeys.length; index++) {
    const key = queryKeys[index]
    if(searchParams.get(key) && searchParams.get(key) !== undefined){
      query = {...query,[key]:searchParams.get(key)}
    }
    else{
      query = query
    }
  }
  return query
}
