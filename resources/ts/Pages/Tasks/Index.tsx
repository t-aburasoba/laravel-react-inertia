import TextField from '@mui/material/TextField'
import Layout from '../../Layouts/Layout'

const Index = () => {
  return (
    <Layout>
      <>
        <h1>Tasks</h1>
        <TextField id="standard-basic" label="Tasks" variant="standard" />
        {/* <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.name}</li>
        ))}
      </ul> */}
      </>
    </Layout>
  )
}

export default Index
