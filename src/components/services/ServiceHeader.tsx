import React from "react";
import { CardContent } from "../ui/card";
import { Clock, DollarSign } from "lucide-react";

type TServiceHeaderProps = {
  price:number ,
  duration:number
}

export default function ServiceHeader({price, duration}:TServiceHeaderProps) {
  return (
    <CardContent className="p-6">
      {/* header title */}
      <div className="flex flex-wrap gap-4 mb-6">
        <div className="flex items-center">
          <DollarSign className="w-5 h-5 mr-2 text-blue-600" />
          <span className="font-semibold">{price}</span>
        </div>
        <div className="flex items-center">
          <Clock className="w-5 h-5 mr-2 text-blue-600" />
          <span>{duration} minutes</span>
        </div>
      </div>
    </CardContent>
  );
}
