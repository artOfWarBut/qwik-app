import { component$ } from '@builder.io/qwik';
 
import icon from "../../assets/main/xgj_dzh.png";
import cxIcon from "../../assets/main/icon_cx.png";
import bottom from "../../assets/main/bottom.png";

import   "./index.css";


export default component$(() => {
 return (
    <div class='bg'>
      <div class='top'>
        <img src={icon} alt="" class='robot' />
        <div class='robotText'>
          主人您好，我是您的业务小管家。以下是我为您精心准备的展业工具，快去试试吧~
        </div>
      </div>
      <div class='listBg'>
        <div class='listTitle'>业务百宝箱</div>
        <div class='cell'>
          <img src={cxIcon} alt="" class='cellIcon' />
          <div class='cellInfo'>
            <div class='cellName'>机构受益人查询</div>
            <div class='cellDetail'>机构开户 查询受益人信息</div>
          </div>
          <div class='button'>去使用</div>
        </div>
      </div>
      <div class='bottom'>
        <div class='line'/>
        <div>更多宝藏工具挖掘中~</div>
        <img src={bottom} alt="" class='bottomImage'/>
        <div class='line'/>
      </div>
    </div>
  );
 });

 