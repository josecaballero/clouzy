import React from "react";
import MenuItem from "../menu-item/menu-item.component";

import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";

import { selectDirectorySections } from "./../../redux/directory/directory.selectors";

import { DirectoryContainer } from "./directory.styles";

const Directory = ({ sections }) => (
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

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
