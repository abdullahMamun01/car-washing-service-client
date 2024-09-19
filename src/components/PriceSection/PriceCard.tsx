// PriceCard.tsx
import React from "react";
import { Check, X } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

type TFeature = {
  name: string;
  included: boolean;
};

// Define a type for the price card props
interface PriceCardProps {
  name: string;
  price: number;
  //   description: string
  features: TFeature[];
}

const PriceCard: React.FC<PriceCardProps> = ({ name, price, features }) => {
  return (
    <Card className="flex flex-col justify-between transition-all duration-200 hover:shadow-lg hover:border-sky-300">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-sky-700 text-center">
          {name}
        </CardTitle>
        <CardDescription className="text-4xl font-extrabold text-sky-900 text-center">
          ${price}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {/* <p className="text-sky-600 mb-4">{description}</p> */}
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              {feature.included ? (
                <Check className="h-4 w-4 mr-2 text-green-500" />
              ) : (
                <X className="h-4 w-4 mr-2 text-red-500" />
              )}

              {feature.name}
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-sky-500 hover:bg-sky-600 text-white">
          <Link to="/services">Choose service</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PriceCard;
