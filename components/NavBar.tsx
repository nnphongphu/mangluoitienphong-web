import styled from "styled-components";

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
        <Item>Trang chủ</Item>
        <Item>Hoạt động</Item>
        <Item>Bài viết</Item>
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
`;

const Item = styled.ul`
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  letter-spacing: 0.1em;
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