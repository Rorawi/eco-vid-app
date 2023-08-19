import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import SideVideos from "./SideVideos";
const OtherPage = () => {
  const location = useLocation();
  const propValue = location.state?.propKey;

  // Use the passed props in the component
  // ...

  return (
    <>
      <div className=" md:flex justify-between items-start mx-7 pt-[10rem]">
        <div className="font-montserrat rounded-xl">
          <video
            loop
            controls={true}
            src={propValue.vid}
            className="md:w-[768px] left-0 right-0 rounded-xl"
          />
        </div>
        <SideVideos vid={propValue.vid}/>
      </div>
    </>
  );
};
export default OtherPage;
