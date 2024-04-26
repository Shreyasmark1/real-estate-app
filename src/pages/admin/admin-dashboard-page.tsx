import { CTACard, StatsCard } from "@/feature/dashboard/_components/user-dashboard";
import { Users } from "lucide-react";

const AdminDashBoardPage = () => {
    return (
        <div className="page-style">
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
                <CTACard />
                <StatsCard title="Properties" value="0" description="Listed properties" progress={25}>
                </StatsCard>
                <StatsCard title="Leads" value="0" description="Number of contact mades" progress={0}>
                    <Users className="h-4 w-4 text-muted-foreground" />
                </StatsCard>
            </div>
        </div>
    );
}

export default AdminDashBoardPage;