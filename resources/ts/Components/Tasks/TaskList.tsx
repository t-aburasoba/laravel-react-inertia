import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Checkbox,
  ListItemText,
} from '@mui/material'
import { FC, useState } from 'react'
import { Task } from '../../Types/Task'

type Props = {
  tasks: Task[]
}

const TaskList: FC<Props> = ({ tasks }) => {
  const [checked, setChecked] = useState<number[]>([])

  const handleToggle = (id: number) => () => {
    const newChecked = [...checked]
    const currentIndex = checked.indexOf(id)
    console.log(currentIndex)

    if (currentIndex === -1) {
      newChecked.push(id)
    } else {
      newChecked.splice(currentIndex, 1)
    }

    setChecked(newChecked)
  }

  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {tasks.map((task) => {
        const labelId = `checkbox-list-label-${task.id}`

        return (
          <ListItem key={task.id} disablePadding>
            <ListItemButton
              role={undefined}
              onClick={handleToggle(task.id)}
              dense
            >
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={checked.indexOf(task.id) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={task.name} />
            </ListItemButton>
          </ListItem>
        )
      })}
    </List>
  )
}

export default TaskList
