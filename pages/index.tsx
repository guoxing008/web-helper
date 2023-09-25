import Link from "next/link";
import classNames from 'classnames'
import { Button } from 'antd';
import { useEffect } from "react";

const ClassNav = ({active}) => {
  const list = [
    {
      title: "首页",
      key: '',
      url: '/',
    },
    {
      title: '关于我们',
      key: 'about',
      url: '/about'
    },
    {
      title: '加入我们',
      key: 'joinus',
      url: '/joinus'
    },
    {
      title: '联系我们',
      key: 'contact',
      url: '/contact',
    }
  ]
  return <div className="">
    <ul className="flex justify-start flex-nowrap list-none">
      {list.map((l, i) => <li key={i} className={classNames({
        "px-[5px]": true,
        '!text-[#f3fcef]': l.key === active
      })}>
        <Link href={l.url}>
          {l.title}
        </Link>
      </li>)}
    </ul>
    </div>
}

export const Head = ({ active }) => {
  return <div className="flex justify-between p-[24px] bg-[#0d0d0d] text-[#fff]">
    <p>logo</p>
    <ClassNav active={active} />
  </div>
}

const Children = () => {
  const bannerClassName = 'h-[700px] w-[100%]';
  useEffect(() => {
    // const wow = new WOW({
    //   boxClass: 'wow',
    //   animateClass: 'animated',
    //   offset: -200,
    //   live: false,
    // });
    // wow.init();
  },[])
  return <div>
      <div
        className={`${bannerClassName} bg-[url(../static/banner.webp)] bg-cover bg-center-bottom`}>
          <div className="w-[100%] h-[100%] bg-[rgba(28,28,28,.7)] flex flex-col">
            <div className="m-[auto]">
            <p className="banner-text align-center h-[40px] mx-[auto]">
              让每一个答案都有价值
            </p>
            <p className="banner-text-en align-center h-[40px] mx-[auto]">
              Make every answer valuable
            </p>
            </div>
          </div>
      </div>
      <div className={`relative text-[#a6ea8a] bg-[#0d0d0d] py-[20px]`}>
        <div className="flex h-[350px] px-[20px] text-center">
          <div className="w-[50%] py-[10px]">
            <p className="py-3">如果你有个技术公司</p>
            <p className="py-3">但是</p>
            <p className="py-3">想做个产品却不知道准价格?</p>
            <p className="py-3">找个外包、招聘员工却很难判断真实水平,害怕高价低能?</p>
            <p className="py-3">员工是否经常拿不出有效的解决方案导致项目延期或进展缓慢?</p>
            <p className="py-3">很多会写代码得人,却没有领头羊,单独养一个架构师成本太高?</p>
          </div>
          <div className="w-[50%] py-[10px]">
            <p className="py-3">如果你是技术开发者</p>
            <p className="py-3">但是</p>
            <p className="py-3">刚开始工作, 遇到了非常难得问题, 搜也搜不到,不知道该怎么解决,项目马上因此延期?</p>
            <p className="py-3">刚进入技术开发行业, 对未来很迷茫,不知道简历怎么改,方向怎么选?</p>
            <p className="py-3">想晋升, 又害怕材料不够充分?</p>
            <p className="py-3">技术想带人, 又不知道怎么管理,怎么设计优秀架构?</p>
          </div>
        </div>
        <Button className="position left-[50%] !ml-[-50px]  text-[#e1d369] border-[#e1d369] w-[100px] h-[40px]">
          <Link href='contact'>
            找我们!
          </Link>
        </Button>
      </div>
      
    </div>
}
export default function Home() {
  return <div className="">
    <Head active="" />
    <Children />
  </div>
}


