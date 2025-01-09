import { Tabs } from 'antd'
import React from 'react'
import { TabsTypes } from '../../../Tabs/Tabs.types'
import EventDetailSection from '../../../../components/Sections/EventDetailSection/EventDetailSection'
import colors from '../../../../../theme/variables.json'
import SectionTitle from '../../../../components/Open Intl/v2/SectionTitle/SectionTitle'
import MainContainer from '../../../Maincontainer/Maincontainer'

const Tabs2 = ({data, subtitle, title}:TabsTypes) => {

    const tabData = data?.map((td:any,index:number)=>({
            key:index.toString(),
            label: td?.title,
            children: <EventDetailSection verticalTextAlign={'top'} {...td} details={td?.details} />,
              }))

              const style = `
              .custom_tab .ant-tabs .ant-tabs-nav-list .ant-tabs-tab{
              box-sizing:border-box;
              font-size:18px;
              background:transparent;
              border:none;
              border-bottom: 2px solid transparent;
              }
              .custom_tab .ant-tabs .ant-tabs-nav-list .ant-tabs-tab:hover{
              color:${colors.primary};
              opacity:0.6;
              }
              .custom_tab .ant-tabs .ant-tabs-nav-list .ant-tabs-tab-active{
                border-bottom: 2px solid ${colors.primary};
                border-radius: 4px 4px 0 0;
                }
                .custom_tab .ant-tabs .ant-tabs-nav-list .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn{
                  color:${colors.primary};
              }
              .custom_tab .ant-tabs .ant-tabs-nav{
              margin:40px 0;
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
            <SectionTitle title={title} alignCenter />
        }
        <Tabs type='card' items={tabData} />
    </div>
        </MainContainer>
  )
}

export default Tabs2