import { Link } from '@inertiajs/react'
import Layout from '../Layouts/Layout'

const Dashboard = () => {
  return (
    <>
      <Layout>
        <Link href="/tasks">Tasks</Link>
      </Layout>
    </>
  )
}

export default Dashboard
