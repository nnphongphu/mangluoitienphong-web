import styled from "styled-components";
import { H5 } from "./Theme";
import Link from "next/link";

export const NavBar = () => {
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
  background-color: white;
  box-shadow: 0px 4px 6px 3px rgba(0, 0, 0, 0.05);
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

const SpecialItem = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3px 15px;
  border: 1px solid #c82127;
  border-radius: 21px;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #c82127;
  cursor: pointer;
`;

export default NavBar;
