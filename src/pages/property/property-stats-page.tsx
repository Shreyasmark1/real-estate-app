import { Activity, HeartIcon, Share, Users } from "lucide-react";
import { StatsCard } from "../../feature/dashboard/_components/user-dashboard";
import { EnquiryCard } from "./_components/property-enquiry-card";

const PropertyStatsPage = () => {
    return (
        <div className="page-style">
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
                <StatsCard title="Views" value="10" description="Number of views">
                    <Activity className="h-4 w-4 text-muted-foreground" />
                </StatsCard>
                <StatsCard title="Leads" value="2" description="Number of leads">
                    <Users className="h-4 w-4 text-muted-foreground" />
                </StatsCard>
                <StatsCard title="Likes" value="2" description="Number of people who liked this property">
                    <HeartIcon className="h-4 w-4 text-muted-foreground" />
                </StatsCard>
                <StatsCard title="Shares" value="2" description="Number of people who shared this property">
                    <Share className="h-4 w-4 text-muted-foreground" />
                </StatsCard>
            </div>
            <div className="flex flex-wrap gap-4 mt-10">
                {
                    Array.from({ length: 10 }).map(() => (
                        <EnquiryCard />
                    ))
                }
            </div>
        </div>
    );
}


export default PropertyStatsPage;