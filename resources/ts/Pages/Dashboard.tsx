import { TextField, Typography } from '@mui/material'
import Layout from '../Layouts/Layout'

const Dashboard = () => {
  return (
    <>
      <Layout>
        <>
          <Typography variant="h6" gutterBottom>
            Tasks
          </Typography>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </>
      </Layout>
    </>
  )
}

export default Dashboard
