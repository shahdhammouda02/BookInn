"use client"
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import React from "react";

const OffersSort = ({sortValue, setSortValue}: {sortValue: string; setSortValue:(val:string)=> void;}) => {
  return (
    <Select value={sortValue} onValueChange={setSortValue}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Sort by" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="priceLow">Price: Low to High</SelectItem>
        <SelectItem value="priceHigh">Price: High to Low</SelectItem>
        <SelectItem value="popular">Most Popular</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default OffersSort;
