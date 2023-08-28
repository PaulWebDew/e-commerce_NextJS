import { FC } from 'react';
import {useSession, signIn, signOut} from"next-auth/react";
import Image from 'next/image';

import style from './SignInBtn.module.scss'

interface Props {}

const SignInBtn: FC = ({}) => {

   const { data: session } = useSession();

   if(session) return <div>
   <div className={style.user}>
      <div className={style.welcome}>
         <p>Hello {session?.user?.name}!</p>
         <button className='button' onClick={() => signOut()}>Sign out</button>
      </div>

      <div className={style.user_info}>
         <Image className={style.user_image}
         src="https://lh3.googleusercontent.com/a/AAcHTtf_CgP_Z5eBI8yqlv4kbGIAiivg6LfxnQcFymdLtqdm9w=s96-c"
         width={40}
         height={40}
         alt="user image"
         />
         {session?.user?.email}
      </div>
   </div>

  </div>
  return (
   <>
     Not signed in <br />
     <button onClick={() => signIn('google')}>Sign in with Google</button>
   </>
 )
}

export default SignInBtn