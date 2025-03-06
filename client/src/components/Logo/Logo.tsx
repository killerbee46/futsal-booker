import { Image } from 'antd'
import logo from '/futsal-online.png'
import smallLogo from '/logo.png'
import './Logo.scss'
import { Link } from 'react-router-dom'

const Logo = ({withText, width}:any) => {
  return (
      <Link to={'/'} className='logo__container'>
        <Image src={withText ? logo : smallLogo} preview={false} className={`sm:w-8 md:w-10 lg:w-[50px] ${withText ? 'aspect-[7/2]' : 'aspect-square'}`} />
      </Link>
  )
}

export default Logo