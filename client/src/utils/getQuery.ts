export const getQuery = async (data:any) => {
  const query = await data?.queryKey[1]
  return  query
}
