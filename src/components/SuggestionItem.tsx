import React from "react";

interface Props {
  item: any;
  onPress: () => void;
}
const defaultProps = {
  item: {},
  onPress: () => {}
};

type ISuggestionItemProps = Props & typeof defaultProps;

export const SuggestionItem: React.FC<ISuggestionItemProps> = ({
  item,
  onPress
}) => {
  if (!item) return null;
  return (
    <li
      className="list-group-item"
      style={{ cursor: "pointer" }}
      onClick={onPress}
    >
      {item.flag && (
        <img
          alt={`flag-${item.name}`}
          src={item.flag}
          width="40"
          style={{ marginRight: 10 }}
        />
      )}
      {item.name}
    </li>
  );
};
