import styled from "styled-components";
import { H5, ButtonText } from "./Theme";
import Link from "next/link";
import useWindowDimensions from "../hooks/useWindowDimensions";
import { GiHamburgerMenu } from "react-icons/gi";
import useToggle from "../hooks/useToggle";

export const NavBar = () => {
  const { height, width } = useWindowDimensions();
  const [showMobileNavBar, toggleShowMobileNavBar] = useToggle(false);

  if (width <= 1200) {
    return (
      <>
        <Wrapper>
          <Link href="/" passHref>
            <a style={{ cursor: "pointer" }}>
              <img
                src="/logo.png"
                width={`${width <= 900 ? "40px" : "80px"}`}
                height={`${width <= 900 ? "40px" : "80px"}`}
              />
            </a>
          </Link>
          <Menu>
            <GiHamburgerMenu
              color="var(--color-red)"
              size={`${width <= 900 ? "30px" : "60px"}`}
              style={{ cursor: "pointer" }}
              onClick={() => toggleShowMobileNavBar()}
            />
          </Menu>
        </Wrapper>
        <MobileTab style={{ display: showMobileNavBar ? "block" : "none" }}>
          <Link href="/" passHref>
            <a>
              <H5 style={{ color: "var(--color-red)" }}>Trang chủ</H5>
            </a>
          </Link>
          <Link href="/ve-chung-toi" passHref>
            <a>
              <H5 style={{ color: "var(--color-red)" }}>Về chúng tôi</H5>
            </a>
          </Link>
          <Link href="/hoat-dong" passHref>
            <a>
              <H5 style={{ color: "var(--color-red)" }}>Hoạt động</H5>
            </a>
          </Link>
          <Link href="/bai-viet" passHref>
            <a>
              <H5 style={{ color: "var(--color-red)" }}>Bài viết</H5>
            </a>
          </Link>
          <H5 style={{ color: "var(--color-red)" }}>Sản phẩm</H5>
          <H5 style={{ color: "var(--color-red)" }}>Liên hệ</H5>
        </MobileTab>
      </>
    );
  }

  return (
    <Wrapper>
      <Link href="/" passHref>
        <a style={{ cursor: "pointer" }}>
          <img src="/logo.png" width="85px" height="90px" />
        </a>
      </Link>
      <Menu>
        <Link href="/" passHref>
          <a>
            <Item>Trang chủ</Item>
          </a>
        </Link>
        <Link href="/ve-chung-toi" passHref>
          <a>
            <Item>Về chúng tôi</Item>
          </a>
        </Link>
        <Link href="/hoat-dong" passHref>
          <a>
            <Item>Hoạt động</Item>
          </a>
        </Link>
        <Link href="/bai-viet" passHref>
          <a>
            <Item>Bài viết</Item>
          </a>
        </Link>
        <Item>Sản phẩm</Item>
        <Item>Liên hệ</Item>
      </Menu>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  width: calc(100vw - (100vw - 100%));
  height: 90px;
  padding: 0 min(5vw, 130px);
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
`;

const Item = styled(H5)`
  text-transform: uppercase;
  color: #c82127;
  cursor: pointer;
  padding: 0;
  margin-right: 85px;

  @media screen and (max-width: 1700px) {
    margin-right: 40px;
  }

  @media screen and (max-width: 1500px) {
    margin-right: 30px;
  }
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

  margin-right: 85px;

  @media screen and (max-width: 1700px) {
    margin-right: 40px;
  }

  @media screen and (max-width: 1500px) {
    margin-right: 30px;
  }
`;

const MobileTab = styled.div`
  position: -webkit-sticky;
  position: sticky;
  width: calc(100vw - (100vw - 100%));
  height: calc(100vh - 90px);
  overflow-y: auto;
  background-color: white;
  padding: 30px;
  top: 90px;
  z-index: 9999;

  & H5 {
    margin-bottom: 40px;
    @media screen and (max-width: 900px) {
      margin-bottom: 30px;
    }
  }

  @media screen and (max-width: 900px) {
    height: calc(100vh - 60px);
    top: 60px;
  }
`;

export default NavBar;
