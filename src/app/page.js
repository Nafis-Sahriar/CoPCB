import Banner from "@/Components/Banner/Banner";
import StaticInfo from "@/Components/StaticInfo/StaticInfo";
import Workflow from "@/Components/WorkFlow/WorkFlow";
import Image from "next/image";

export default function Home() {
  return (
    <div >
        <Banner></Banner>
        <StaticInfo></StaticInfo>
        <Workflow></Workflow>
    </div>
  );
}
