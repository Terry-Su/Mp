const createActions = require('./createActions')

const actions = {
  UPDATE_PROJECTS_INFO(value) {
    return {
        value
    }
  },
  UPDATE_PAGES_TO_DEVELOP(value) {
    return {
        value
    }
  },
  UPDATE_MP_CONFIG_PATH(value) {
    return {
        value
    }
  },
}

module.exports = createActions(actions)