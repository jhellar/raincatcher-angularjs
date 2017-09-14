var params = {
  WORKER_TCRUDL1: 'wrk1-wor-crudl',
  WORKER_TCRUDL2: 'wrk2-wor-crudl',
  WORKFLOW_TCRUDL1: 'wfw1-wor-crudl',
  WORKFLOW_TCRUDL2: 'wfw2-wor-crudl',
  WORKORDER_TCREATE: 'create-wor-crudl',
  WORKORDER_TCANCEL: 'cancel-wor-crudl',
  WORKORDER_TUPDATE1: 'update1-wor-crudl',
  WORKORDER_TUPDATE2: 'update2-wor-crudl',
  WORKORDER_TDELETE: 'delete-wor-crudl',
  WORKORDER_TSEARCH: 'search-wor-crudl'
};
var workorders = {
  CREATE: {
    workflow: params.WORKFLOW_TCRUDL1,
    assignee: params.WORKER_TCRUDL1,
    title: params.WORKORDER_TCREATE,
    status: 'New'
  },
  SEARCH: {
    workflow: params.WORKFLOW_TCRUDL1,
    assignee: params.WORKER_TCRUDL1,
    title: params.WORKORDER_TSEARCH,
    status: 'New'
  },
  UPDATE1: {
    workflow: params.WORKFLOW_TCRUDL1,
    assignee: params.WORKER_TCRUDL1,
    title: params.WORKORDER_TUPDATE1,
    status: 'New'
  },
  UPDATE2: {
    workflow: params.WORKFLOW_TCRUDL1,
    assignee: params.WORKER_TCRUDL2,
    title: params.WORKORDER_TUPDATE2,
    status: 'New'
  },
  CANCEL: {
    workflow: params.WORKFLOW_TCRUDL1,
    assignee: params.WORKER_TCRUDL2,
    title: params.WORKORDER_TCANCEL,
    status: 'New'
  },
  DELETE: {
    workflow: params.WORKFLOW_TCRUDL1,
    assignee: params.WORKER_TCRUDL1,
    title: params.WORKORDER_TDELETE,
    status: 'New'
  }
};
var mobileWorkorders = {
  TOTAL: 8,
  STATUS: {
    done: 'assignment_turned_in',
    lookedAt: 'new_releases',
    ready: 'radio_button_unchecked'
  },
  FIRST_WORKORDER: {
    id: '1ycX3guvr',
    status: 'New',
    coordinates: '49.27949, -123.099947',
    address: '157 st, 163 Keefer St, Vancouver, BC V6A 1XA',
    assignment: 'Driveway in disrepair',
    startDate: 'Invalid Date',
    startTime: 'Invalid Date',
    finishDate: 'Thu Aug 03 2017',
    finishTime: 'Thu Aug 03 2017',
    workSummary: 'Please remove damaged item',
    index: 0
  },
  lastWorkorder: {
    id: 'rkX1fdSH',
    status: 'New',
    coordinates: '49.287227, -123.141489',
    assignment: 'Footpath in disrepair',
    startDate: 'Invalid Date',
    startTime: 'Invalid Date',
    finishDate: 'Thu Aug 03 2017',
    finishTime: 'Thu Aug 03 2017',
    workSummary: 'Please remove damaged element and return to base',
    index: 7,
    workorderData: {
      heading: "Vehicle Inspection",
      fuel: 50,
      lights: "true",
      tires: "false"
    }
  }
};
var workers = {
  WORKER1: {
    name: params.WORKER_TCRUDL1,
    username: params.WORKER_TCRUDL1,
    banner: 'http://' + params.WORKER_TCRUDL1 + '.banners.com',
    avatar: 'http://' + params.WORKER_TCRUDL1 + '.avatars.com',
    phonenumber: '777777777',
    email: params.WORKER_TCRUDL1 + '@example.com',
    position: 'Driver',
    group: 'Drivers'
  },
  WORKER2: {
    name: params.WORKER_TCRUDL2,
    username: params.WORKER_TCRUDL2,
    banner: 'http://' + params.WORKER_TCRUDL2 + '.banners.com',
    avatar: 'http://' + params.WORKER_TCRUDL2 + '.avatars.com',
    phonenumber: '777777777',
    email: params.WORKER_TCRUDL2 + '@example.com',
    position: 'Driver',
    group: 'Drivers'
  }
};

var workflows = {
  WORKFLOW1: {
    title: params.WORKFLOW_TCRUDL1
  },
  WORKFLOW2: {
    title: params.WORKFLOW_TCRUDL2
  }
};

module.exports = {
  params,
  workorders,
  mobileWorkorders,
  workers,
  workflows
};