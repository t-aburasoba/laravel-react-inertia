import { useForm } from '@inertiajs/react'
import { FormControl, InputLabel, Input, Button } from '@mui/material'
import { FC, SyntheticEvent } from 'react'
import TaskList from '../../Components/Tasks/TaskList'
import Layout from '../../Layouts/Layout'
import { Task } from '../../Types/Task'

type Props = {
  tasks: Task[]
}

const Index: FC<Props> = ({ tasks }) => {
  const { data, setData, post, processing, errors, isDirty } = useForm({
    name: '',
  })

  const submit = (e: SyntheticEvent) => {
    e.preventDefault()
    post('/tasks', {
      onSuccess: () => setData('name', ''),
    })
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
            {isDirty && <div>There are unsaved form changes.</div>}
            <Button variant="contained" type="submit" disabled={processing}>
              Add
            </Button>
          </FormControl>
        </form>
        <TaskList tasks={tasks} />
      </>
    </Layout>
  )
}

export default Index
