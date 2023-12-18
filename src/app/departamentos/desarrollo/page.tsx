import Image from "next/image";
import BasicInfo from "./components/BasicInfo";
import publicity from "./assets/_53183329-d281-4d98-beb2-cc637140398a.png";
import Functions from "./components/Functions";
const DesarrolloPage = () => {
  return (
    <div className="flex flex-col bg-black-200 rounded-lg shadow-md">
      <Image alt="Super dev team" src={publicity} className="w-full"/>
      <BasicInfo />
      <Functions />
    </div>
  );
};

export default DesarrolloPage;
