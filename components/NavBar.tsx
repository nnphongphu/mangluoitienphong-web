import styled from "styled-components";
import { H5, ButtonText } from "./Theme";
import Link from "next/link";
import useWindowDimensions from "../hooks/useWindowDimensions";
import { GiHamburgerMenu } from "react-icons/gi";

export const NavBar = () => {
  const { height, width } = useWindowDimensions();

  if (width <= 1200) {
    return (
      <Wrapper>
        <img
          src="logo.png"
          width={`${width <= 900 ? "50px" : "120px"}`}
          height={`${width <= 900 ? "50px" : "120px"}`}
          style={{ cursor: "pointer" }}
        />
        <Menu>
          <SpecialItem>VI</SpecialItem>
          <GiHamburgerMenu
            color="var(--red)"
            size={`${width <= 900 ? "30px" : "60px"}`}
          />
        </Menu>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <img
        src="logo.png"
        width="121px"
        height="128px"
        style={{ cursor: "pointer" }}
      />
      <Menu>
        <Link href="/" passHref>
          <a>
            <Item>Trang chủ</Item>
          </a>
        </Link>
        <Link href="/hoat-dong" passHref>
          <Item>Hoạt động</Item>
        </Link>
        <Link href="/bai-viet" passHref>
          <Item>Bài viết</Item>
        </Link>
        <Item>Sản phẩm</Item>
        <Item>Liên hệ</Item>
        <SpecialItem>VI</SpecialItem>
      </Menu>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  width: calc(100vw - (100vw - 100%));
  height: 128px;
  padding: 0 130px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 9999;
  max-width: 1920px;
  margin: auto;

  background-color: white;
  box-shadow: 0px 4px 6px 3px rgba(0, 0, 0, 0.05);

  @media screen and (max-width: 1200px) {
    padding: 30px;
  }

  @media screen and (max-width: 900px) {
    height: 60px;
    padding: 30px;
  }
`;

const Menu = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 85px;

  @media screen and (max-width: 1600px) {
    column-gap: 50px;
  }

  @media screen and (max-width: 1300px) {
    column-gap: 30px;
  }
`;

const Item = styled(H5)`
  text-transform: uppercase;
  color: #c82127;
  cursor: pointer;
  padding: 0;
`;

const SpecialItem = styled(ButtonText)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3px 15px;
  border: 1px solid #c82127;
  border-radius: 21px;
  text-transform: uppercase;
  color: #c82127;
  cursor: pointer;

  @media screen and (max-width: 900px) {
    padding: 0px 10px;
    font-size: 16px;
  }
`;

export default NavBar;
