import { Typography } from 'antd'
import React from 'react'

const SectionTitle = ({centered, title, subTitle, description}:any) => {
  return (
    <div style={{margin:'30px auto'}} className={centered ? 'text-center' : "text-left"}>
      <Typography.Title style={{marginBottom:20}} level={3} className='uppercase !font-bold'>
        {title}
      </Typography.Title>
      <Typography.Title level={5} className='uppercase !font-semibold'>
        {subTitle}
      </Typography.Title>
      <Typography.Paragraph className='uppercase !font-semibold text-slate-500'>
      {description}
      </Typography.Paragraph>
    </div>
  )
}

export default SectionTitle