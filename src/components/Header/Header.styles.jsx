import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 60px;
  width: 100%;
  justify-content: center;
  align-items: center;
  font-family: Barlow, sans-serif;
`;

export const Navigation = styled.div`
  display: flex;
  width: 86%;
  justify-content: flex-end;
  align-items: center;
`;

// export const Home = styled.div`
//   width: 180px;
// `;

// export const Menu = styled.div`
//   display: flex;
//   width: 100%;
//   justify-content: center;
//   align-items: center;

//   .user-nav {
//     display: flex;
//   }

//   .user-menu-item {
//     display: flex;
//     font-weight: bold;
//     color: black;
//     padding: 8px;
//     margin: 0 8px 16px 8px;
//     justify-content: center;
//     align-items: center;
//     border-radius: 8px;
//     cursor: pointer;

//     &:hover {
//       color: #ff8c00;
//       background-color: black;
//     }
//   }

//   .store-nav {
//     display: flex;
//     width: 100%;
//     justify-content: center;
//     align-items: center;
//   }

//   .store-menu-item {
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     width: 140px;
//     margin: 0 8px 0 8px;

//     span {
//       margin-top: 4px;
//       font-size: 18px;
//       font-weight: bold;
//       color: black;
//       cursor: pointer;

//       &:hover {
//         color: #505050;
//       }
//     }
//   }
// `;

export const Login = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 180px;

  .login-icon {
    cursor: pointer;
  }
`;
