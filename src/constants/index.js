const PERCENT_INCREMENTOR = 50

const NUMERIC_ZERO = 0
const NUMERIC_ONE = 1
const NUMERIC_TWO = 2

const priorities = {
  [NUMERIC_ZERO]: 'high',
  [NUMERIC_ONE]: 'medium',
  [NUMERIC_TWO]: 'low'
}

const statuses = {
  [NUMERIC_ZERO]: 'to do',
  [NUMERIC_ONE]: 'in progress',
  [NUMERIC_TWO]: 'done'
}

const statusColors = {
  [NUMERIC_ZERO]: '#FF1919',
  [NUMERIC_ONE]: '#FFA500',
  [NUMERIC_TWO]: '#71BC78'
}

const ACTIONS = {
  NEXT_STATUS: 'NEXT',
  DELETE_TASK: 'DELETE_TASK',
  EDIT_TASK: 'EDIT_TASK',
  ADD_TASK: 'ADD_TASK',
  SORT_TASKS: 'SORT_TASKS'
}

const initialValues = [
  {
    id: 1,
    taskName: "Go to Gym",
    priority: NUMERIC_TWO,
    status: NUMERIC_ONE,
    percentCompleted: 50
  },
  {
    id: 2,
    taskName: "Restart Learning Solid",
    priority: NUMERIC_TWO,
    status: NUMERIC_ZERO,
    percentCompleted:NUMERIC_ZERO
  },
  {
    id: 3,
    taskName: "Change Slider to Scroll",
    priority: NUMERIC_ONE,
    status: NUMERIC_ONE,
    percentCompleted: 50
  },
  {
    id: 4,
    taskName: "To Publish the Article",
    priority: NUMERIC_ONE,
    status: NUMERIC_ONE,
    percentCompleted: 50
  },
  {
    id: 5,
    taskName: "New Task Assignment Task",
    priority: NUMERIC_ZERO,
    status: NUMERIC_TWO,
    percentCompleted: 100
  },
]

const sortOptions = [
  { value: 'id', title: 'Task' },
  { value: 'priority', title: 'Priority' },
  { value: 'status', title: 'Status' },
]

const formData = {
  taskName: '',
  priority: null
}

/**
 * missing keys for the chart data(**mandatory)..
 */
const chartTemplate = {
  'answer 1': 0,
  'answer 2': 0,
  'answer 3': 0,
  'answer 4': 0
}

export {
  PERCENT_INCREMENTOR,
  NUMERIC_ZERO,
  NUMERIC_ONE,
  NUMERIC_TWO,
  initialValues,
  sortOptions,
  priorities,
  statuses,
  statusColors,
  ACTIONS,
  formData,
  chartTemplate
}
