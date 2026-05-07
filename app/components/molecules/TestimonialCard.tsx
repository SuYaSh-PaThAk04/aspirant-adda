import React from "react";
import { Text } from "../atoms/Text";
import { Icon } from "../atoms/Icon";

interface TestimonialCardProps {
  name: string;
  rating: number;
  text: string;
  className?: string;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  rating,
  text,
  className = "",
}) => {
  return (
    <div
      className={`p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg ${className}`}
    >
      <div className="flex gap-1 mb-3">
        {Array.from({ length: rating }).map((_, i) => (
          <Icon key={i} name="star" size={16} className="text-yellow-400" />
        ))}
      </div>
      <Text as="p" size="sm" color="secondary" className="mb-4">
        {text}
      </Text>
      <Text as="p" size="sm" weight="semibold">
        {name}
      </Text>
    </div>
  );
};
