import { Breadcrumb, Flex, Space } from 'antd';
import Link from 'antd/es/typography/Link';
import { BreadCrumbTypes } from '../BreadCrumb.types';

const BreadCrumb1 = ({ data, page }: BreadCrumbTypes) => {
  const links = data?.map((d: any,i:number) => {
    const dat = d === "" ? 'home':d?.split('-')?.join(' ')
    return <Space key={i} style={{fontSize:20,}} className='text-[20px] text-white font-semibold'>
        <Link href={"/"+d} className='!capitalize !text-white text-[20px]'>{dat}</Link> 
        <span>-</span>
        </Space>
  })
  const totalLinks = links
  return (
    <div className='px-4 py-2 bg-primary w-max'>
        <Space>
            {links}
            <div className='text-[20px] text-white font-semibold !capitalize'>{page}</div>
        </Space>
      
    </div>
  );
}

export default BreadCrumb1;