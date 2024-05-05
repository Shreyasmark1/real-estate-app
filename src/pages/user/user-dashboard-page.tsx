import { PropertyListComponent } from "@/feature/property/_components/property-list";
import { CTACard, StatsCard, UpgradeCTACard } from "../../feature/dashboard/_components/user-dashboard";
import { Building, Users } from "lucide-react";
import { usePropertyService } from "@/services/PropertyService";

const UserDashboardPage = () => {

  const { getPropertyList } = usePropertyService()

  const propertyList = getPropertyList()

  const limit = 5

  return (
    <div className="page-style">
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 w-full">
        {
          propertyList.data.length === limit || propertyList.data.length > limit ? (<UpgradeCTACard />) : <CTACard />
        }
        <StatsCard
          title="Properties"
          value={propertyList.data.length.toString()}
          description="Listed properties"
          progress={(propertyList.data.length * 100) / limit}>
          <Building className="h-4 w-4 text-muted-foreground" />
        </StatsCard>
        <StatsCard title="Leads" value="0" description="Number of contact mades" progress={0}>
          <Users className="h-4 w-4 text-muted-foreground" />
        </StatsCard>
        <div className="col-span-full">
          <PropertyListComponent list={propertyList.data} />
        </div>
      </div>
    </div>
  );
}

export default UserDashboardPage;