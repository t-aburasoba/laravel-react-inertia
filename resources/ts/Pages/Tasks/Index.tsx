import { useForm } from '@inertiajs/react'
import { FormControl, InputLabel, Input, Button } from '@mui/material'
import { FC, SyntheticEvent } from 'react'
import Layout from '../../Layouts/Layout'

type Task = {
  id: number
  name: string
}

type Props = {
  tasks: Task[]
}

const Index: FC<Props> = ({ tasks }) => {
  const { data, setData, post, processing, errors } = useForm({
    name: '',
  })

  const submit = (e: SyntheticEvent) => {
    e.preventDefault()
    post('/tasks')
  }
  return (
    <Layout>
      <>
        <h1>Tasks</h1>
        <form onSubmit={submit}>
          <FormControl>
            <InputLabel htmlFor="task">Tasks</InputLabel>
            <Input
              id="task"
              aria-describedby="task-name"
              value={data.name}
              onChange={(e) => setData('name', e.target.value)}
            />
            {errors.name && <div>{errors.name}</div>}
            <Button variant="contained" type="submit" disabled={processing}>
              Add
            </Button>
          </FormControl>
        </form>
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>{task.name}</li>
          ))}
        </ul>
      </>
    </Layout>
  )
}

export default Index
