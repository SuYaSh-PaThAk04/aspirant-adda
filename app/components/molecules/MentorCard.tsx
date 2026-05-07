import React from "react";
import { Text } from "../atoms/Text";

interface MentorCardProps {
  name: string;
  image?: string;
  className?: string;
}

export const MentorCard: React.FC<MentorCardProps> = ({
  name,
  image,
  className = "",
}) => {
  return (
    <div className={`text-center ${className}`}>
      <div className="w-full h-48 bg-gray-900 dark:bg-gray-950 rounded-lg mb-4"></div>
      <Text as="p" size="base" weight="semibold">
        {name}
      </Text>
    </div>
  );
};
