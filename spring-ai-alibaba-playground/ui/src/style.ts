import { createStyles } from "antd-style";

export const useStyle = createStyles(({ token, css }) => {
  return {
    topLinkWrapper: css`
      position: absolute;
      right: 30px;
      top: 10px;
      z-index: 10;
    `,
    bottomLinkWrapper: css`
      position: absolute;
      left: 20px;
      bottom: 8px;
      z-index: 10;
    `,
    layout: css`
      /* width: 100%; */
      /* min-width: 1000px; */
      height: calc(100vh - 56px);
      border-radius: ${token.borderRadius}px;
      display: flex;
      background: ${token.colorBgContainer};
      font-family: AlibabaPuHuiTi, ${token.fontFamily}, sans-serif;
      overflow-x: hidden;
      /* position: relative; */

      .ant-prompts {
        color: ${token.colorText};
      }
    `,
    footer: css`
      position: fixed;
      left: 0;
      bottom: 0;
      width: 100%;
      text-align: center;
      padding: 16px 50px;
      color: rgba(0, 0, 0, 0.45);
      background-color: rgba(0, 0, 0, 0.02);
      border-top: 1px solid rgba(0, 0, 0, 0.06);
      /* background-color: ${token.colorBgElevated}; */
    `,
    logo: css`
      display: flex;
      height: 72px;
      align-items: center;
      justify-content: start;
      padding: 0 24px;
      box-sizing: border-box;

      img {
        width: 24px;
        height: 24px;
        display: inline-block;
      }

      span {
        display: inline-block;
        margin: 0 8px;
        font-weight: bold;
        color: ${token.colorText};
        font-size: 16px;
      }
    `,
    addBtn: css`
      background: #1677ff0f;
      border: 1px solid #1677ff34;
      width: calc(100% - 24px);
      margin: 0 12px 24px 12px;
    `,
    newChatBtn: css`
      margin-bottom: 16px;
      height: 40px;
      font-size: 15px;
    `,
    pageContainer: css`
      flex: 1;
      display: none;
      opacity: 0;

      &.active {
        display: flex;
        flex-direction: column;
        opacity: 1;
      }
    `,
    menuPagesContainer: css`
      flex: 1;
      position: relative;
      overflow: hidden;
    `,
    menuPage: css`
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: none;
      opacity: 0;
      background-color: ${token.colorBgContainer};
      overflow-y: auto;

      &.active {
        display: block;
        opacity: 1;
      }
    `,
    menuPagesWrapper: css`
      flex: 1;
      position: relative;
      overflow: hidden;
    `,
    pageWrapper: css`
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      transition: none;
      background-color: ${token.colorBgContainer};
      overflow-y: auto;
    `,
  };
});
