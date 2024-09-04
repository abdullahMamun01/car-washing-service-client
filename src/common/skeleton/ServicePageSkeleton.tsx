import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

export default function ServicePageSkeleton() {
  return (
    <div className="container mx-auto p-4 bg-gray-50">
      <Card className="w-full mx-auto overflow-hidden shadow-lg">
        <div className="relative h-48 md:h-64">
          <Skeleton className="w-full h-full" />
        </div>
        <CardContent className="p-6">
          <div className="flex flex-wrap gap-4 mb-6">
            {[1, 2, 3].map((i) => (
              <Skeleton key={i} className="h-6 w-24" />
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {[1, 2, 3].map((i) => (
              <div key={i}>
                <Skeleton className="h-4 w-24 mb-2" />
                <Skeleton className="h-10 w-full" />
              </div>
            ))}
          </div>
          <div className="mb-6">
            <Skeleton className="h-4 w-48 mb-2" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <Skeleton key={i} className="h-24 w-full" />
              ))}
            </div>
          </div>
          <div className="mb-6">
            <Skeleton className="h-10 w-full mb-4" />
            <Skeleton className="h-64 w-full mb-4" />
            <div className="grid grid-cols-4 gap-2">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <Skeleton key={i} className="h-10 w-full" />
              ))}
            </div>
          </div>
        </CardContent>
        <CardFooter className="bg-gray-100 p-6">
          <div className="w-full">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
              {[1, 2, 3].map((i) => (
                <Skeleton key={i} className="h-4 w-32 mb-2 md:mb-0" />
              ))}
            </div>
            <Skeleton className="h-10 w-full" />
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
