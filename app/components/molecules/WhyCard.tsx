import React from "react";
import { Text } from "../atoms/Text";

interface WhyCardProps {
  number: string;
  title: string;
  description: string;
  className?: string;
}

export const WhyCard: React.FC<WhyCardProps> = ({
  number,
  title,
  description,
  className = "",
}) => {
  return (
    <div className={`text-center ${className}`}>
      <Text as="p" size="2xl" weight="bold" color="primary" className="mb-2">
        {number}
      </Text>
      <Text as="h3" size="lg" weight="bold" className="mb-3">
        {title}
      </Text>
      <Text as="p" size="sm" color="secondary" className="leading-relaxed">
        {description}
      </Text>
    </div>
  );
};
