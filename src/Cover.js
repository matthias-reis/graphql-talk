import React from 'react';
import FullSize from './FullSize';
import CoverSlide from './CoverSlide';
import coverImage from './slides/cover.jpg';

const Cover = () => (
  <FullSize background={coverImage}>
    <CoverSlide title="GraphQL" subtitle="With the Divine Help of Apollo" />
  </FullSize>
);

export default Cover;
