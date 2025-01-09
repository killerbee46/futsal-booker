import { Empty, Flex } from 'antd'
import React from 'react'

const ErrorPage = () => {
  return (
    <Flex justify='center' align='center' style={{height:400}}>
        <Empty description="Nothing to show at the moment !" />
    </Flex>
  )
}

export default ErrorPage