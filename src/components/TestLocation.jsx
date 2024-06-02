import { useLocation } from "react-router-dom";

const TestLocation = () => {
  const location = useLocation();
  console.log(location);
  return <p>Check console for location output</p>;
};

export default TestLocation;