import { Clock, MoveRight } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { TCarWashService } from "@/redux/types/service.type";
import carWahsData from "@/constants/data";
import { formatTime } from "@/utils/time";
import { Badge } from "../ui/badge";



type TServiceProps = {
  service : TCarWashService & {id:string}
}

export default function ServiceCard({service} : TServiceProps) {
const image = carWahsData.find(data => data.service === service.name)
const imageUrl = image ? image.images[0] : `https://washly.preyantechnosys.com/wp-content/uploads/2023/01/service04-1024x635.jpg`
const duration = formatTime(service?.duration)
  const hasOpenSlot = service.hasOpenSlot
  return (
    <div className="max-w-sm relative bg-white text-sky-600  rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <Badge className={`absolute top-2 right-2 ${hasOpenSlot ? 'bg-[#54C392]' : 'bg-[#EC8305]'}`}>{
        hasOpenSlot ? 'Available' : 'unavilable'}</Badge>
      <a href="#">
        <img
          className="rounded-t-lg w-full h-[200px] object-cover"
          src={imageUrl}
          alt=""
        />
      </a>
      <div className="p-5">
        <a href="">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {service.name}
          </h5>
        </a>
        <p className="mb-3 font-normal text-slate-500 dark:text-gray-400 line-clamp-3">
          {service.description} 
        </p>
        <div className="flex justify-between mt-4">
          <span className= "text-md flex items-center gap-1 my-3 text-red-500">
            <Clock className="w-4 h-4 " /> {duration}
          </span>
          <span className="text-primary text-xl flex items-center">${service.price}.00</span>
        </div>
        <div className="mt-3">
          <Link to={`/services/${service.id}`} className="">
            <Button className="w-full inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-sky-600 rounded-lg hover:bg-sky-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-sky-500 dark:focus:ring-blue-800">
              More Details <MoveRight className="ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
