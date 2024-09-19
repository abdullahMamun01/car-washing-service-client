import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function PriceCardSkeleton() {
  return (
    <Card className="w-[300px] p-6">
      <CardHeader className="p-0 space-y-4">
        <CardTitle>
          <Skeleton className="h-7 w-48" />
        </CardTitle>
        <Skeleton className="h-12 w-24 text-4xl" />
      </CardHeader>
      <CardContent className="p-0 space-y-3 mt-6">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="flex items-center space-x-3">
            <Skeleton className="h-5 w-5 rounded-full" />
            <Skeleton className="h-5 w-32" />
          </div>
        ))}
      </CardContent>
      <CardFooter className="p-0 mt-6">
        <Skeleton className="h-12 w-full rounded-md" />
      </CardFooter>
    </Card>
  )
}