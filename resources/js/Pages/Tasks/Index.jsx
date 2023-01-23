import { useForm } from "@inertiajs/react";

const Index = ({ tasks }) => {
  console.log(tasks);

  const { data, setData, post, processing, errors } = useForm({
    name: '',
  })

  const submit = (e) => {
    e.preventDefault()
    post('/tasks')
  }

  return (
    <>
    <div className="h-screen flex flex-col 
                    items-center justify-center">
    <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">

      <p>Tasks Index</p>

      {tasks.map(task => (
        <div key={task.id}>{task.name}</div>
      ))}
      <div className="form-group mb-6">
        <form onSubmit={submit}>
          <input type="text" value={data.name} onChange={e => setData('name', e.target.value)} className="form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" />
          {errors.name && <div>{errors.name}</div>}
          <button type="submit" disabled={processing} className="
        px-6
        py-2.5
        bg-blue-600
        text-white
        font-medium
        text-xs
        leading-tight
        uppercase
        rounded
        shadow-md
        hover:bg-blue-700 hover:shadow-lg
        focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
        active:bg-blue-800 active:shadow-lg
        transition
        duration-150
        ease-in-out">Add</button>
        </form>
        </div>
      </div>
      </div>
    </>
  )
}

export default Index