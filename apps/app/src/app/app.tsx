import { observable, computed, makeObservable } from 'mobx';
import { observer } from 'mobx-react-lite';

class Store {
  @observable
  count = 0;

  @computed
  get double() {
    return this.count * 2;
  }

  constructor() {
    makeObservable(this);
  }
}

const store = new Store();

function App() {
  return (
    <>
      <p>
        <label>Count:</label> {store.count}
      </p>
      <p>
        <label>Count Double:</label> {store.double}
      </p>
      <button onClick={() => store.count++}>Count Up</button>
    </>
  );
}

export default observer(App);
