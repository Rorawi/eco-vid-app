import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
const OtherPage = () => {
  const location = useLocation();
  const propValue = location.state?.propKey;

  // Use the passed props in the component
  // ...

  return (
    <>
      <div className="font-montserrat">
        {propValue.title}
        <video loop controls={true} src={propValue.vid} />
      </div>
    </>
  );
};
export default OtherPage;
