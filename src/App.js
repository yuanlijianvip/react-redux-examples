import FunctionComponent from "./components/FunctionComponent";
import { ClassComponent } from "./components/ClassComponent";

function App() {
  return (
    <div>
      <h3>function component</h3>
      <FunctionComponent></FunctionComponent>
      <h3>class component</h3>
      <ClassComponent></ClassComponent>
    </div>
  );
}

export default App;
