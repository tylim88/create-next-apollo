import { Container } from 'unstated'

class stateContainer extends Container {
  state = {}

  // this two methods dont need setState as it use only before rendering
  initUserState = (state) => {
    this.state = state
  }

  resetState = () => {
    this.initUserState({})
  }

  insertData = (state) => {
    this.setState(state)
  }
}
const stateStore = new stateContainer()

export { stateContainer, stateStore }
