import styled from "styled-components";

export const NavbarSection = styled.div`
padding: 20px 0;
overflow: hidden;
background: #fff;
position: relative;
border-bottom: 1px solid #000; 
`;

export const Logo = styled.div `
width: 50%;
float: left;
`;
export const LogoText = styled.h2`
  font-size: 30px;
  font-weight: bold;
`;
export const ListMenu = styled.ul`
  width: 50%;
  float: left;
  list-style: none;
`;

export const ListItem = styled.li`
  display: inline-block;
  margin:20px;
`;

export const ListA = styled.a`
  display: block;
  color: #222;
  text-decoration: none;
  padding: 10px 15px;
  font-weight: bold;
`;
