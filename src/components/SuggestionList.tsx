import React from "react";
import { SuggestionItem } from "./SuggestionItem";

interface ISuggestionListProps {
  data: any[];
  onPressItem: Function;
}

export const SuggestionList: React.FC<ISuggestionListProps> = ({
  data,
  onPressItem
}) => {
  if (data.length === 0)
    return (
      <ul className="list-group">
        <li className="list-group-item">No country found</li>
      </ul>
    );
  return (
    <ul className="list-group">
      {data.map((item, index) => {
        return (
          <SuggestionItem
            onPress={() => {
              const location = {
                pathname: `/country/${item.alpha2Code}`,
                state: {
                  item: item
                }
              };
              onPressItem(location);
            }}
            key={index.toString()}
            item={item}
          />
        );
      })}
    </ul>
  );
};
