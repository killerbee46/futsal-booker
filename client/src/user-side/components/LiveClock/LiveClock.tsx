import { Space, Typography } from 'antd'
import dayjs, { Dayjs } from 'dayjs'
import React, { useEffect, useState } from 'react'

const LiveClock = () => {
    const [date, setDate] = useState<Dayjs>(dayjs())
    useEffect(()=> {
        setInterval(()=> {
            setDate(dayjs())
        },1000)
    })
    return (
        <Space align='baseline'>
            <Typography.Title level={1} style={{ margin: "10px auto" }}>{date.format("hh:mm")}</Typography.Title>
            <Typography.Title level={5} style={{ margin: "10px auto" }}>{date.format("MMM DD, YYYY")}</Typography.Title>
        </Space>
    )
}

export default LiveClock