const TaskAPI = {
  listsLoaded: false,
  tasksLoaded: false,
  cache: {},

  initCache () {
    TaskAPI.cache = {
      lists: {},
      tasks: {}
    }
  },

  addTask (item) {
    TaskAPI.cache['tasks'][item.id] = item
    console.log('task added', item)
  },

  addTasks (items) {
    TaskAPI.tasksLoaded = true
    if (items && items.length) {
      for (let i = 0; i < items.length; i++) {
        TaskAPI.addTask(items[i])
      }
    }
  },

  getListTasks (listId) {
    const tasks = []
    let task
    for (const taskId in TaskAPI.cache['tasks']) {
      task = TaskAPI.cache['tasks'][taskId]
      if (task.parent_id == listId) { tasks.push(task) }
    }
    return tasks
  },

  loadTasks (params) {
    console.log('load tasks', params)

    params = Object.assign({
      addon: 'tasks',
      kind: 'Task'
    }, params)
    return window.tommy.api.getFragments(params).then(TaskAPI.addTasks)
  },

  addTaskActivity (task, type, text) {
    const currentUser = window.tommy.config.getCurrentUser()
    const activity = {
      type,
      text,
      time: new Date(),
      user_id: currentUser.id,
      user_name: currentUser.first_name
    }

    if (!task.data) { task.data = {} }
    console.log(task)
    if (!task.data.activity) { task.data.activity = [] }
    task.data.activity.unshift(activity)

    return activity
  },

  saveTask (task) {
    console.log('save task', task)
    if (!task.name) {
      alert('Task name must be set')
      return
    }
    if (!task.parent_id) {
      alert('Task must belong to a list')
      return
    }

    task.addon = 'tasks'
    task.kind = 'Task'
    if (!task.id) { TaskAPI.addTaskActivity(task, 'status', 'Created a task') }
    const params = Object.assign({}, task, { data: JSON.stringify(task.data) })
    if (task.id) { return window.tommy.api.updateFragment(task.id, params).then(TaskAPI.addTask) } else { return window.tommy.api.createFragment(params).then(TaskAPI.addTask) }
  },

  addList (item) {
    TaskAPI.cache['lists'][item.id] = item
    console.log('added task list', item)
  },

  addLists (items) {
    TaskAPI.listsLoaded = true
    if (items && items.length) {
      for (let i = 0; i < items.length; i++) {
        TaskAPI.addList(items[i])
      }
    }
  },

  loadLists (params) {
    console.log('load task lists', params)

    params = Object.assign({
      addon: 'tasks',
      kind: 'TaskList'
    }, params)
    return window.tommy.api.getFragments(params).then(TaskAPI.addLists)
  },

  deleteList (listId) {
    delete TaskAPI.cache['lists'][listId]
    console.log('delete list', listId)
    return window.tommy.api.deleteFragment(listId)
  },

  saveList (list) {
    console.log('save list', list)
    list.addon = 'tasks'
    list.kind = 'TaskList'
    if (!list.data) { list.data = {} }
    if (typeof (list.data.order) === 'undefined') { list.data.order = Object.keys(TaskAPI.cache['lists']).length }
    if (typeof (list.data.active) === 'undefined') { list.data.active = true }
    if (typeof (list.data.show_fast_add) === 'undefined') { list.data.show_fast_add = true }
    const params = Object.assign({}, list, { data: JSON.stringify(list.data) })
    if (list.id) { return window.tommy.api.updateFragment(list.id, params).then(TaskAPI.addList) } else { return window.tommy.api.createFragment(params).then(TaskAPI.addList) }
    IndexController.invalidateLists = true // rerender lists
  }
}

export default TaskAPI
