import Link from "next/link";
import classNames from "classnames";
import { Button } from 'antd';
import { Head } from './index'
export default function JoinUs() {
  const fontClassName = 'py-[10px] text-[30px] text-center';
  return <div>
    <Head active="joinus" />
    <div className={classNames(
      "bg-[url(../static/joinus.jpg)] h-[850px] bg-cover bg-center-bottom text-[#fff] p-[24px]",
      "flex flex-col justify-around"
    )}>
      <p className={fontClassName}>我们诚邀在职的优秀伙伴加入:</p>
      <p className={fontClassName}>如果你:</p>
      <p className={fontClassName}>是某个领域的P8大佬(技术向)</p>
      <p className={fontClassName}>一线大厂工作经验5年+ (五年内达到P7以上, 三年内达到P6也可)</p>
      <p className={fontClassName}>火眼金睛的一线HR, 有过精彩的招聘经历, 或开人水平超高</p>
      <p className={fontClassName}>请联系我!!!!</p>
      <Button ghost className="position text-[#fff]  left-[50%] !ml-[-50px] w-[100px] h-[40px]">
      <Link href='contact'>
        找我们!
      </Link>
    </Button>
    </div>
    
  </div>
}