"use client";
import React from "react";

export function ServiceCard({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <div className="bg-background/80 dark:bg-background/80 p-6 rounded-lg border border-border dark:border-border shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start gap-4">
        <div className="p-2 bg-chart-2/10 text-chart-2 rounded-full">
          {icon}
        </div>
        <p className="text-foreground/90 dark:text-foreground/90">{text}</p>
      </div>
    </div>
  );
}
