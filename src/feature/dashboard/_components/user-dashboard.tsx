import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { PropsWithChildren } from "react"
import { Link } from "react-router-dom"

function CTACard() {
  return (
    <Card className="sm:col-span-2">
      <CardHeader className="pb-3">
        <CardTitle>Unlock Your Property’s Potential with Us!</CardTitle>
        <CardDescription className="max-w-lg text-balance leading-relaxed">
          Join our platform and connect with thousands of potential buyers. Showcase your property to the right audience and accelerate your sales process.
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <Link to={"/property/new"}>
          <Button>List Your Property Now</Button>
        </Link>
      </CardFooter>
    </Card>
  )
}

type InfoCardProps = {
  title?: string,
  description?: string,
  value?: string,
  subtext?: string,
  progress?: number
} & PropsWithChildren

function StatsCard({ description, value, subtext, progress, title, children }: InfoCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <CardDescription>{subtext}</CardDescription>
        {children}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <div className="text-xs text-muted-foreground">{description}</div>
      </CardContent>
      <CardFooter>
        <Progress value={progress} aria-label="used 25% of the quote" />
      </CardFooter>
    </Card>
  )
}



export { CTACard, StatsCard }

