import "primereact/resources/themes/lara-dark-purple/theme.css"; //theme
import "primereact/resources/primereact.css"; //core css
import "primeicons/primeicons.css"; //icons
import "primeflex/primeflex.css"; // flex
import { PrimeReactProvider } from "primereact/api";
import { ReportList } from "./components/page/ReportList";
import { MyRoutes } from "./routes/routes";

function App() {
  const value = {
    ripple: true,
  };
  return (
    <PrimeReactProvider value={value}>
      <MyRoutes />
    </PrimeReactProvider>
  );
}

export default App;
