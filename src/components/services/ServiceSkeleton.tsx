import React from "react";
import ServiceCardSkeleton from "./ServiceCardSkeleton";

export default function ServiceSkeleton({ length  }: {length:number}) {
  return (
    <div className="px-5 md:px-20 py-5 ">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 itmes-center">
        {Array.from({ length }, (_, i) => (
          <div className="col-span-3" key={i}>
            <ServiceCardSkeleton />
          </div>
        ))}
      </div>
    </div>
  );
}
