import { Card, Tabs } from 'antd'
import React from 'react'
import { TabsTypes } from '../Tabs.types'
import EventDetailSection from '../../../components/Sections/EventDetailSection/EventDetailSection'
import MainContainer from '../../Maincontainer/Maincontainer'
import SectionTitle from '../../SectionTitle/SectionTitle'

const Tabs1 = ({data, subtitle, title}:TabsTypes) => {

    const tabData = data?.map((td:any,index:number)=>({
            key:index.toString(),
            label: td?.title,
            children: <Card>
                <EventDetailSection reverse verticalTextAlign={'top'} {...td} />
            </Card>,
              }))

              const style = `
              .custom_tab .ant-tabs .ant-tabs-nav-list .ant-tabs-tab{
              padding: 10px 30px;
              font-size:18px;
              background:transparent;
              border:none;
              }
              .custom_tab .ant-tabs .ant-tabs-nav-list .ant-tabs-tab-active{
              background:#04C3EC;
              border-radius: 4px 4px 0 0;
              }
              .custom_tab .ant-tabs .ant-tabs-nav-list .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn{
                color:white;
              }
              .custom_tab .ant-tabs .ant-tabs-nav{
              margin:0;
              }
              .custom_tab .ant-tabs .ant-tabs-nav:before{
              border:none;
              }
              .custom_tab .ant-tabs .ant-tabs-content-holder .ant-row{
              margin:10px auto;
              }
              `
  return (
    <MainContainer>
    <style>{style}</style>
    <div className='custom_tab'>
        {
            (title || subtitle) &&
            <SectionTitle title={title} subtitle={subtitle}/>
        }
        <Tabs type='card' items={tabData} />
    </div>
        </MainContainer>
  )
}

export default Tabs1