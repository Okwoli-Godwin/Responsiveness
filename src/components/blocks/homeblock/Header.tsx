import React from 'react'
import styled from "styled-components"
import { AiOutlineMail } from "react-icons/ai"
import { BiMenu, BiSearch } from "react-icons/bi"

const Header = () => {
  return (
    <Container>
      <Wrapper>
        <Menu><BiMenu /></Menu>
        <Logo src='https://zozothemes.com/html/layer/demo/images/logo-color.png' />
        
        <Navhold>
          <Navs>Home</Navs>
          <Navs>Features</Navs>
          <Navs>How it works</Navs>
          <Navs>Screenshots</Navs>
          <Navs>Team</Navs>
          <Navs>News</Navs>
          <Navs>Extras+</Navs>
          <Icon><AiOutlineMail /></Icon>
        </Navhold>
        <Search><BiSearch /></Search>
      </Wrapper>
    </Container>
  )
}

export default Header
const Search = styled.div`
  font-size: 30px;
  color: red;
  display: none;
  @media screen and (max-width: 768px) {
    display: flex;
  }
`
const Menu = styled.div`
  font-size: 35px;
  color: #fff;
  cursor: pointer;
  display: none;
  @media screen and (max-width: 768px) {
    display: flex;
  }
`
const Icon = styled.div`
  color: red;
  font-size: 30px;
  margin-left: 20px;
  margin-top: 5px;
`
const Navs = styled.h4`
  text-transform: uppercase;
  color: #fff;
  margin-left: 30px;
`
const Navhold = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`
const Logo = styled.img`
  height: 35px;
`
const Wrapper = styled.div`
  display: flex;
  width: 90%;
  height: 100%;
  align-items: center;
  justify-content: space-between;
`
const Container = styled.div`
  display: flex;
  width: 100%;
  height: 80px;
  /* background-color: #000; */
  position: fixed;
  justify-content: center;
`