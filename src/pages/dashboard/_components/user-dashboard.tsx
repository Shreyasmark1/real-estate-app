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
        <Button>List Your Property Now</Button>
      </CardFooter>
    </Card>
  )
}

type InfoCardProps = {
    description?: string,
    value?: string,
    subtext?:string,
    progress?: number
}
  
function InfoCard({ description, value, subtext, progress} : InfoCardProps) {
    return (
      <Card>
        <CardHeader className="pb-2">
          <CardDescription>{description}</CardDescription>
          <CardTitle className="text-4xl">{value}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-xs text-muted-foreground">{subtext}</div>
        </CardContent>
        <CardFooter>
          <Progress value={progress} aria-label="used 25% of the quote" />
        </CardFooter>
      </Card>
    )
  }

  export { CTACard , InfoCard}
  
