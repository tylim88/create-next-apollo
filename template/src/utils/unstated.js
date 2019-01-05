import { Container } from 'unstated'

class stateContainer extends Container {
  state = {}
  initUserState = (state) => {
    this.state = state
  }
  insertData = (state) => {
    this.setState(state)
  }
  getState = () => this.state
}
const stateStore = new stateContainer()

export { stateContainer, stateStore }
