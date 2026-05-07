import React from "react";
import { Text } from "../atoms/Text";
import { Icon } from "../atoms/Icon";

interface FeatureListItemProps {
  number: string;
  title: string;
  description?: string;
  className?: string;
}

export const FeatureListItem: React.FC<FeatureListItemProps> = ({
  number,
  title,
  description,
  className = "",
}) => {
  return (
    <div className={`${className}`}>
      <Text
        as="p"
        size="sm"
        weight="semibold"
        color="secondary"
        className="mb-1"
      >
        {number} {title}
      </Text>
      {description && (
        <Text as="p" size="xs" color="muted">
          {description}
        </Text>
      )}
    </div>
  );
};
