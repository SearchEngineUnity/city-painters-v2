import React from 'react';
import { Link } from 'gatsby-theme-material-ui';
import styled from 'styled-components';

const Outer = styled.div`
  position: fixed;
  right: 0;
  bottom: 0;
  height: 250px;
  display: block;
  z-index: 998;
`;
const Inner = styled.div`
  float: left;
  color: #fff;
  font: 20px arial, sans-serif;
  cursor: pointer;
  text-align: center;
  width: 120px;
  height: 42px;
  background-color: #8bc44a;
  margin-top: 60px;
  margin-right: -42px;
  padding-top: 5px;
  border-radius: 3px;
  border: solid 1px;
  border-color: 000;
  transform: rotate(270deg);
`;
const Tag = styled(Link)`
  background-color: 'transparent';
  &:link,
  &:visited {
    color: #f1f1f1;
  }
  &:hover,
  &:focus,
  &:active {
    color: ; #000
  }
`;

function ContactUsTag() {
  return (
    <Outer>
      <Tag to="/contact-us" target="_blank" rel="noopener noreferrer" className="contact-us-tag">
        <Inner>Contact Us</Inner>
      </Tag>
    </Outer>
  );
}
export default ContactUsTag;
