import React from "react";
import { Text } from "../atoms/Text";
import { Icon } from "../atoms/Icon";

interface StatBlockProps {
  value: string;
  label: string;
  className?: string;
}

export const StatBlock: React.FC<StatBlockProps> = ({
  value,
  label,
  className = "",
}) => {
  return (
    <div className={`text-center flex-1 ${className}`}>
      <Text as="p" size="xl" weight="bold" className="mb-1">
        {value}
      </Text>
      <Text as="p" size="sm" color="secondary">
        {label}
      </Text>
    </div>
  );
};
