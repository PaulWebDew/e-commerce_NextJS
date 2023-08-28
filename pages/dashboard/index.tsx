import Layout from '@/components/Layout'
import { NextPage } from 'next';
import SignInBtn from '@/components/SignInBtn';

interface Props {}

const Dashboard: NextPage<Props> = ({}) => {
  return <div>
   <Layout>
      <div>
         <SignInBtn/>
         <h1>Dashboard</h1>
      </div>
   </Layout>
  </div>
}

export default Dashboard