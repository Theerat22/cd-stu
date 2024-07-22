import SideNavbar from "../SideNavbar";
import { TopicCard } from "../component/TopicCard";
import logo from "@/app/image/cdlogo_yellow.png";
import houses from "@/app/image/3houses.jpg";
import sport from "@/app/image/sportday.jpg";
import booking from "@/app/image/booking.jpg";
export default function Home() {
  return (
    <div className="flex bg-white min-h-screen flex-col pb-8">
        <SideNavbar />
        <div id="Topic">
        <section className="mt-12 grid grid-cols-1 sm:grid-cols-2 sm:px-6 md:px-24 lg:px-80">
            <TopicCard
            title="บ้านสามหลัง"
            actionText="ดู"
            imgSrc={houses}
            href="/topic1"/>
            <TopicCard
            title="กีฬาสี"
            actionText="ดู"
            imgSrc={sport}
            href="/topic1"/>
            <TopicCard
            title="จองห้องซ้อมดนตรี"
            actionText="จอง"
            imgSrc={booking}
            href="/topic1"/>
        </section>
        </div>
    </div>
    
    
  );
}