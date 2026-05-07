import React from "react";
import { Text } from "../atoms/Text";
import { Badge } from "../atoms/Badge";

interface FeatureCardProps {
  title: string;
  description: string;
  badge?: string;
  badgeVariant?: "default" | "purple" | "blue";
  className?: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  badge,
  badgeVariant = "purple",
  className = "",
}) => {
  return (
    <div
      className={`p-6 bg-gray-50 dark:bg-gray-900/50 rounded-lg border border-gray-200 dark:border-gray-800 ${className}`}
    >
      {badge && (
        <div className="mb-3">
          <Badge variant={badgeVariant}>{badge}</Badge>
        </div>
      )}
      <Text as="h3" size="lg" weight="semibold" className="mb-2">
        {title}
      </Text>
      <Text as="p" color="secondary" className="text-sm leading-relaxed">
        {description}
      </Text>
    </div>
  );
};
