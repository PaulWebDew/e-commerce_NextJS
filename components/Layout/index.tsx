import {ReactNode} from 'react';
import Nav from '../Nav';

import style from '@/components/Layout/Layout.module.scss';

interface Props {
}

const Layout = ({children}:{children:ReactNode}) => {
  return(
  <div className={style.layoutWrapper}>
      <aside>
         <Nav />
      </aside>
      <div className={style.childwrapper}>
         {children}
      </div>
  </div>
  )
}

export default Layout