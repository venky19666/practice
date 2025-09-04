import "./App.css";
import { UnControlledFormInput } from "./learnings/form/uncontrolled";

function App() {
  return (
    <div>
      <UnControlledFormInput
        MailElement={() => {
          return <div>Mail element</div>;
        }}
      />
    </div>
  );
}

export default App;
