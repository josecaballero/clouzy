import React from "react";
import MenuItem from "../menu-item/menu-item.component";

import { useSelector } from "react-redux";

import { selectDirectorySections } from "./../../redux/directory/directory.selectors";

import { DirectoryContainer } from "./directory.styles";

const Directory = () => {
  const sections = useSelector(selectDirectorySections);
  return (
    <DirectoryContainer>
      {sections.map(({ title, id, imageUrl, size, linkUrl }) => (
        <MenuItem
          key={id}
          title={title}
          imageUrl={imageUrl}
          size={size}
          linkUrl={linkUrl}
        />
      ))}
    </DirectoryContainer>
  );
};

export default Directory;
