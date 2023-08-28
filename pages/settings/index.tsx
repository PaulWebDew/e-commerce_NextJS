import { NextPage } from 'next';
import Layout from '@/components/Layout';

interface Props {}

const Settings: NextPage<Props> = ({}) => {
  return (
      <Layout>
         <div>
            <h1>
               Settings
            </h1>
         </div>
      </Layout>
  )
}

export default Settings