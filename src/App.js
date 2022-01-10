import { Route, Routes } from "react-router-dom";
import { ContactRoute } from "./routes/ContactRoute";
import { HomeRoute } from "./routes/HomeRoute";
import { PricingRoute } from "./routes/PricingRoute";
import { ThanksRoute } from "./routes/ThanksRoute";
import { TrainingRoute } from "./routes/TrainingRoute";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeRoute />} />
      <Route path="/pricing" element={<PricingRoute />} />
      <Route path="/training" element={<TrainingRoute />} />
      <Route path="/contact" element={<ContactRoute />} />
      <Route path="/thanks" element={<ThanksRoute />} />
    </Routes>
  );
}
