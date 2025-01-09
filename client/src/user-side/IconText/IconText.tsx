import { Image } from 'antd'
import Link from 'antd/es/typography/Link'
import React from 'react'

const IconText = ({icon, text, textBold, href,textColor}:any) => {
  return (
    <Link href={href && href !== '' ? href : null}>
    <div className='py-5 flex gap-2 items-center'>
        <Image preview={false} width={20} className='aspect-square' alt='icon' src={icon} />
        <div style={{fontWeight:textBold?'bold':'normal', color:textColor && textColor !== "" ? textColor : 'black'}}>{text}</div>
    </div>
    </Link>
  )
}

export default IconText