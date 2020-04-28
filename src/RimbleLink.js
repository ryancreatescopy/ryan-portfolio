import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { system } from 'styled-system';
import Box, { StyledBox } from './Box';

const hoverColor = system({
  hoverColor: {
    property: 'color',
    scale: 'colors',
  },
});

const activeColor = system({
  activeColor: {
    property: 'color',
    scale: 'colors',
  },
});

const StyledLink = styled(StyledBox)`
  & {
    text-decoration: none;
    cursor: pointer;
  }

  &:hover {
    text-decoration: underline;
    ${hoverColor};
  }

  &:active {
    text-decoration: none;
    ${activeColor};
  }
`;

const RimbleLink = React.forwardRef((props, ref) => (
  <StyledLink as={'span'} ref={ref} {...props} />
));

RimbleLink.defaultProps = {
  color: 'primary',
  hoverColor: 'primary-light',
  activeColor: 'primary-dark',
  fontSize: 1,
  fontWeight: 3,
};

RimbleLink.propTypes = {
  ...Box.PropTypes,
  theme: PropTypes.object,
};

RimbleLink.displayName = 'RimbleLink';

export default RimbleLink;
