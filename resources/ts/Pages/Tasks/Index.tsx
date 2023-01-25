import TextField from '@mui/material/TextField'

const Index = () => {
  return (
    <div>
      <h1>Tasks</h1>
      <TextField id="standard-basic" label="Tasks" variant="standard" />
      {/* <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.name}</li>
        ))}
      </ul> */}
    </div>
  )
}

export default Index
