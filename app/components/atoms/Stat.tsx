import React from "react";
import { Text } from "./Text";

interface StatProps {
  value: string;
  label: string;
  className?: string;
}

export const Stat: React.FC<StatProps> = ({ value, label, className = "" }) => {
  return (
    <div className={`text-center ${className}`}>
      <Text as="p" size="lg" weight="bold" className="mb-2">
        {value}
      </Text>
      <Text as="p" size="sm" color="secondary">
        {label}
      </Text>
    </div>
  );
};
