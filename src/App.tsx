import "./App.css";
import { CircleX, Info, CheckCircle, AlertTriangle, AlertCircle } from "lucide-react";

import Alert from "./components/alert/Alert";

function App() {
  return (
    <>
      <Alert
        AlertType="alert-error"
        icon={<AlertCircle size={30} />}
        title="Error"
      >
        <p>An error has occurred. Please try again later. <a href="">Learn more</a></p>
      </Alert>

      <Alert
        AlertType="alert-info"
        icon={<Info size={30} />}
        title="Information"
        description={
          "This is an informational message to keep you updated with the latest changes."
        }
      />
      <Alert
        AlertType="alert-success"
        icon={<CheckCircle size={30} />}
        title="Success"
        description={
          "Your operation was successful! Everything is working as expected."
        }
      />
      <Alert
        AlertType="alert-warning"
        icon={<AlertTriangle size={30} />}
        title="Warning"
        description={
          "Please be cautious! There might be potential issues that need your attention."
        }
      />
      <Alert
        AlertType="alert-default"
        icon={<CircleX size={30} />}
        title="Notice"
        description={
          "This is a default alert. Please take note of the information provided."
        }
      />
    </>
  );
}

export default App;
