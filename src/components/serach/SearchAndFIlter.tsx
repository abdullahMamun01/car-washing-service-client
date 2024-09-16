import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useDebounce from "@/hooks/useDebounce";

import { Clock, DollarSign, Search, SlidersHorizontal } from "lucide-react";
import { ChangeEvent, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function SearchAndFIlter() {

  const [sortBy, setSortBy] = useState("name");
  const [priceSort, setPriceSort] = useState("all");
  const [durationFilter, setDurationFilter] = useState("all");
  const location = useLocation();
  const searchParam = new URLSearchParams(location.search);

  const navigate = useNavigate();
  const handlSortPrice = (price: string) => {
    if (price === "all") {
      searchParam.delete("price");
    } else {
      searchParam.set("price", price);
    }

    navigate({ search: searchParam.toString() });
    setPriceSort(price);
  };

  const handlSortDuration = (duration: string) => {
    if (duration === "all") {
      searchParam.delete("duration");
    } else {
      searchParam.set("duration", duration);
    }

    navigate({ search: searchParam.toString() });
    setDurationFilter(duration);
  };
  const [debounceValue, debounceCB] = useDebounce<string>(1000)

  const handleSerach  = (event: ChangeEvent<HTMLInputElement>) => {
    debounceCB(event?.target.value)

  }

  useEffect(() => {
 
    if(debounceValue){
      searchParam.set('search' , debounceValue)
    }else {
      searchParam.delete('search')

    }
    navigate({search: searchParam.toString()})
  }, [debounceValue]);


  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-8">
      <div className="relative flex-grow">
        <Input
          placeholder="Search services..."
          onChange={handleSerach}

          className="pl-10"
        />
        <Search
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
          size={18}
        />
      </div>
      <Select value={sortBy} onValueChange={setSortBy}>
        <SelectTrigger className="w-[180px]">
          <SlidersHorizontal className="mr-2" size={18} />
          <SelectValue placeholder="Sort by" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="name">Select</SelectItem>
          <SelectItem value="price">Price</SelectItem>
          <SelectItem value="duration">Duration</SelectItem>
        </SelectContent>
      </Select>
      {sortBy === "price" && (
        <Select value={priceSort} onValueChange={handlSortPrice}>
          <SelectTrigger className="w-[180px]">
            <DollarSign className="mr-2" size={18} />
            <SelectValue placeholder="Price order" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Price</SelectItem>
            <SelectItem value="asc">Low to High</SelectItem>
            <SelectItem value="desc">High to Low</SelectItem>
          </SelectContent>
        </Select>
      )}
      {sortBy === "duration" && (
        <Select value={durationFilter} onValueChange={handlSortDuration}>
          <SelectTrigger className="w-[180px]">
            <Clock className="mr-2" size={18} />
            <SelectValue placeholder="Duration" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Durations</SelectItem>
            <SelectItem value="asc">60 minute less</SelectItem>
            <SelectItem value="desc">60 minute more</SelectItem>
          </SelectContent>
        </Select>
      )}
    </div>
  );
}
