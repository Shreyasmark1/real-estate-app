import { PropertyList } from "@/pages/property/_components/property-list";
import { CTACard, InfoCard, } from "./_components/user-dashboard";

const UserDashboard = () => {
  return (
    <div className="page-style">
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
        <CTACard />
        <InfoCard description="Properties" value="0" subtext="Listed properties" progress={25} />
        <InfoCard description="Leads" value="0" subtext="Number of contact mades" progress={0} />
        <div className="col-span-full">
          <PropertyList list={Array.from({length : 5})} />
        </div>
      </div>
    </div>
  );
}

export default UserDashboard;