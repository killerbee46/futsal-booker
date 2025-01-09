import { Pagination } from 'antd'
import React, { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

const CustomPagination = ({total,limit=10,clear}:any) => {
    const [searchParams,setSearchParams] = useSearchParams()
    const page = parseInt(searchParams.get("page")||"1")
    const paginationChange = (page:any, pagesize:any)=>{
        searchParams.set("limit",pagesize)
        searchParams.set('page',page)
        setSearchParams(searchParams)
    }
    const clearPagination = () =>{
        searchParams.delete("limit")
        searchParams.delete("page")
        setSearchParams(searchParams)
    }

    useEffect(()=> {
        if (clear) {
            clearPagination()
        }
    },[clear])
  return (
    <div>
        <Pagination 
        hideOnSinglePage
        current={page}
        total={total}
        pageSize={limit}
        onChange={paginationChange}
        />
    </div>
  )
}

export default CustomPagination