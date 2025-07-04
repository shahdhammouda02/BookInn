import React from "react";
import { Button } from "./ui/button";

const Offers = () => {
  return (
    <div className="mt-18 px-10 py-7 bg-header-background rounded-lg min-h-[300px] dark:bg-header-background">
      <h1 className="text-3xl font-medium mt-10 tracking-wide">Offers</h1>
      <h3 className="text-xl mt-3 text-foreground/80 tracking-wide">
        Exclusive offers await!
        <br /> Keep watching and save big with Book In today.
      </h3>
      <div className="flex flex-wrap gap-2 mt-5">
        <Button
          size="lg"
          variant="secondary"
          className="bg-chart-2 text-primary-foreground text-md hover:bg-chart-2/80 dark:bg-chart-2 dark:text-primary-foreground"
        >
          Sign In
        </Button>
        <Button
          size="lg"
          variant="secondary"
          className="bg-background text-foreground text-md hover:bg-background/80 dark:bg-background dark:text-foreground"
        >
          Register
        </Button>
      </div>
    </div>
  );
};

export default Offers;
