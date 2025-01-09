import { SearchOutlined } from '@ant-design/icons'
import { Input } from 'antd'
import React from 'react'
import { useSearchParams } from 'react-router-dom'

const SearchBar = () => {
    const [searchParams, setSearchParams] = useSearchParams()

    const onChange = (e:any) => {
        searchParams.set("search",e.target.value)
        setSearchParams(searchParams)
    }
  return (
    <Input onChange={onChange} placeholder='Type to search...' prefix={<SearchOutlined />} size='large' style={{width:300}} />
  )
}

export default SearchBar