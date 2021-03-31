import React, { useState } from "react";
import List from "@sinoui/core/List";
import ListItem from "@sinoui/core/ListItem";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Divider from "@sinoui/core/Divider";

export interface ItemType {
  id: string;
  title: string;
}

const StyledList = styled(List)`
  width: 240px;
  height: 100vh;
  background-color: ${({ theme }) => theme.palette.primary.main};
`;

const StyledItem = styled(ListItem)`
  background-color: transparent;
  color: ${({ theme }) => theme.palette.primary.contrastText};
`;

const NAV_ITEMS = [
  { id: "firstChart", title: "简单示例" },
  { id: "points", title: "圆点移动" },
];

export default function NavList() {
  const [selectedId, setSelectedId] = useState("");
  const history = useHistory();

  const handleOnClick = (item: ItemType) => {
    setSelectedId(item.id);
    history.push(`/demo/${item.id}`);
  };

  return (
    <StyledList>
      {NAV_ITEMS.map((item, idx) => (
        <>
          <StyledItem
            key={item.id}
            onClick={() => handleOnClick(item)}
            selected={selectedId === item.id}
          >
            {item.title}
          </StyledItem>
          {idx !== NAV_ITEMS.length - 1 && <Divider />}
        </>
      ))}
    </StyledList>
  );
}
