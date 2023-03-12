// import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

import icon from "../../assets/main/xgj_dzh.png";
import cxIcon from "../../assets/main/icon_cx.png";
import bottom from "../../assets/main/bottom.png";

import styles from "./index.module.css";

const Home = (props) => {
  const item = localStorage.getItem("qywxLoginToken");
  const navigate = useNavigate();
  console.log(process.env);

  const action = () => {
    navigate("/beneficiaryQuery");
  };

  return (
    <div className={styles.bg}>
      <div className={styles.top}>
        <img src={icon} alt="" className={styles.robot} />
        <div className={styles.robotText}>
          主人您好，我是您的业务小管家。以下是我为您精心准备的展业工具，快去试试吧~
        </div>
      </div>
      <div className={styles.listBg}>
        <div className={styles.listTitle}>业务百宝箱</div>
        <div className={styles.cell}>
          <img src={cxIcon} alt="" className={styles.cellIcon} />
          <div className={styles.cellInfo}>
            <div className={styles.cellName}>机构受益人查询</div>
            <div className={styles.cellDetail}>机构开户 查询受益人信息</div>
          </div>
          <div className={styles.button} onClick={action}>去使用</div>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.line}/>
        <div>更多宝藏工具挖掘中~</div>
        <img src={bottom} alt="" className={styles.bottomImage}/>
        <div className={styles.line}/>
      </div>
    </div>
  );
};

export default Home;
