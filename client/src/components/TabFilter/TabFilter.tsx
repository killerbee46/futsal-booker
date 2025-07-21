import { Card, Col, Flex, Input, Row, Select } from 'antd'
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { debounce } from '../../utils/getDebounce'

const TabFilter = () => {
    const [filters, setFilters] = useState<any>({})
    const [searchParams, setSearchParams] = useSearchParams()
    const onFilterChange = (name: any, value:any) => {
        setFilters({...filters, [name]:value})
    }

    useEffect(()=> {
        Object.keys(filters)?.forEach((key)=>{
            if (filters[key] && filters[key] !== undefined) {
                searchParams.set(key,filters[key])
            }
            else{
                searchParams.delete(key)
            }
        })
        setSearchParams(searchParams)
    }, [filters])
    return (
        <div>
            <Card>
                <Row gutter={20} justify={'center'}>
                    <Col span={8}>
                        <Flex vertical gap={5}>
                            Futsal Type
                            <Select allowClear onChange={(e)=> onFilterChange('category',e)} placeholder="Select Type" size='large' style={{ minWidth: 100 }} options={[
                                {label:'5 a Side', value:'5 a side'},
                                {label:'7 a Side', value:'7 a side'},
                            ]} />
                        </Flex>
                    </Col>
                    <Col span={8}>
                        <Flex vertical gap={5}>
                            Name
                            <Input onChange={(e)=> onFilterChange('name',e?.target.value)} placeholder='Enter Name' size='large' style={{ minWidth: 100 }} />
                        </Flex>
                    </Col>
                    <Col span={8}>
                        <Flex vertical gap={5}>
                            Location
                            <Input onChange={(e)=> onFilterChange('location',e?.target.value)} placeholder='Enter Location' size='large' style={{ minWidth: 100 }} />
                        </Flex>
                    </Col>
                </Row>
            </Card>
        </div>
    )
}

export default TabFilter