import { SearchOutlined } from '@ant-design/icons'
import { Input } from 'antd'
import React, { useState } from 'react'

const SearchBar = (props:any) => {
    const [text, setText] = useState('')
    const {onSearch={}, placeholder} = props

    const onChange = (e:string) => {
        onSearch(e)
    }
  return (
    <Input placeholder={placeholder || "Search..."} onChange={(e:any)=> onChange(e.target.value)} suffix={<SearchOutlined onClick={onSearch} />} size={'large'} style={{width:props?.half ? "50%" : "100%",}} />
  )
}

export default SearchBar