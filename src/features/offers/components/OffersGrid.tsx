"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Offer } from "@/types/offer";
import Image from "next/image";

export const OffersGrid = ({ offers }: { offers: Offer[] }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {offers.map((offer: Offer) => (
      <Card key={offer.id} className="overflow-hidden p-0">
        <Image
          src={offer.image}
          alt={offer.title}
          width={400}
          height={200}
          className="h-48 w-full object-cover"
        />
        <CardHeader className="px-4 pt-4 pb-1">
          <CardTitle className="text-base md:text-lg">{offer.title}</CardTitle>
          <CardDescription className="text-sm text-muted-foreground">
            {offer.description}
          </CardDescription>
        </CardHeader>
        <CardContent className="pb-4 px-4 space-y-3">
          <div className="text-lg font-bold text-primary">
            ${offer.price}
            {offer.originalPrice && (
              <span className="line-through text-sm text-muted-foreground ml-2">
                ${offer.originalPrice}
              </span>
            )}
          </div>{" "}
          {offer.expiresAt && (
            <div className="text-xs text-muted-foreground">
              Offer valid until {new Date(offer.expiresAt).toLocaleDateString()}
            </div>
          )}
          <Button className="w-full mt-2">Book Now</Button>
        </CardContent>
      </Card>
    ))}
  </div>
);
