import Link from "next/link";
import classNames from 'classnames'
import { Button } from 'antd';
import Image from 'next/image'
import React,{ useState, useMemo, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination, Controller } from "swiper/modules";
import useSize from "../hooks/useSize";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const ClassNav = ({active, setIndex}) => {
  const list = useMemo(() => {
    const nextList = [
      {
        title: "首页",
        key: '',
        url: '/',
        active: false,
      },
      {
        title: '关于我们',
        key: 'about',
        url: '/about',
        active: false,
      },
      {
        title: '业务范围',
        key: 'about',
        url: '/about',
        active: false,
      },
      {
        title: '加入我们',
        key: 'joinus',
        url: '/joinus',
        active: false,
      },
      {
        title: '联系我们',
        key: 'contact',
        url: '/contact',
        active: false,
      }
    ];
    if (nextList[active]) {
      nextList[active].active = true;
    }
    return nextList
  }, [active])
  return <div className="">
    <ul className="flex justify-start flex-nowrap list-none cursor-pointer">
      {(list || []).map((l, i) => <li
        key={i}
        className={classNames({
        "px-[5px]": true,
        'text-[#1677FF]': l.active,
        'text-[#fff]': !l.active,
      })}
      onClick={()=> setIndex(i)}>
        {l.title}
      </li>)}
    </ul>
    </div>
}

export const Head = ({ active, setIndex }) => {
  return <div className="flex justify-between p-[24px] bg-[#0d0d0d]">
    <p className="text-[#fff]">logo</p>
    <ClassNav active={active} setIndex={setIndex} />
  </div>
}

const Children = ({setIndex,active}) => {
  const {width, height} = useSize();
  const [swiperController, setSwiperController] = useState();
  useEffect(() => {
    const nextIndex = active;
    const currentIndex = swiperController?.realIndex;
    if (nextIndex !== currentIndex) {
      swiperController?.slideTo(nextIndex);
    }

  }, [active, swiperController])
  const boxStyle = {
    height: height || 'unset',
  }
  const boxStyleWithoutHeader = {
    height: height ? height + 72 : 'unset'
  }
  const fontClassName = 'py-[10px] text-[30px] text-center';

  return  <Swiper
      direction={'vertical'}
      spaceBetween={10}
      slidesPerView={1}
      mousewheel={true}
      pagination={{
        clickable: true,
      }}
      modules={[Controller,Mousewheel, Pagination]}
      onSlideChange={e => setIndex(e.realIndex)}
      onSwiper={setSwiperController}
      controller={{ control: swiperController}}
    >
      <SwiperSlide>
        <div className="box" id="home" style={boxStyle}>
          <div
            className={`h-[400px] w-[100%] bg-[url(../static/banner.webp)] bg-cover  bg-center`}>
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
          <div
            style={{
              height: height ? height - 400 : 'unset',
              minHeight: 430,
            }}
            className={`relative text-[#a6ea8a] bg-[#0d0d0d] py-[5px] font-semibold`}>
            <div className="flex h-[calc(100%-70px)] min-h-[350px] px-[20px] text-center">
              <div className="flex flex-col justify-around w-[50%] ">
                <p className="py-3">如果你有个技术公司</p>
                <p className="py-3">但是</p>
                <p className="py-3">想做个产品却不知道准价格?</p>
                <p className="py-3">找个外包、招聘员工却很难判断真实水平，害怕高价低能?</p>
                <p className="py-3">员工是否经常拿不出有效的解决方案导致项目延期或进展缓慢？</p>
                <p className="py-3">很多会写代码得人，却没有领头羊，单独养一个架构师成本太高？</p>
              </div>
              <div className="flex flex-col justify-around w-[50%]">
                <p className="py-3">如果你是技术开发者</p>
                <p className="py-3">但是</p>
                <p className="py-3">刚开始工作，遇到了非常难得问题，搜也搜不到，不知道该怎么解决，项目马上因此延期？</p>
                <p className="py-3">刚进入技术开发行业，对未来很迷茫，不知道简历怎么改，方向怎么选？</p>
                <p className="py-3">想晋升，又害怕材料不够充分？</p>
                <p className="py-3">技术想带人，又不知道怎么管理，怎么设计优秀架构？</p>
              </div>
            </div>
            <Button className="text-[#e1d369] border-[#e1d369] w-[100px] h-[40px]">
              <Link href='contact'>
                找我们！
              </Link>
            </Button>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="box flex flex-col justify-around bg-[#4e1c9c]" id="about" style={boxStyle}>
          <div
            style={{
              height: height ? (height - 84) / 2 : 'unset'
            }}
            className='flex justify-around px-[24px] text-[#000] text-center '>
            <Image alt="about" src="/static/about.jpg" width={width ? (width - 48) / 2 : 600} height={800}/>
            <div className='flex-grow flex flex-col justify-around font-normal text-[#fff]'>
              <h1 className='py-[10px]'>我们的团队：</h1>
              <p className='py-[10px]'>团队超级年轻，全是同职级高潜人才</p>
              <p className='py-[10px]'><strong className='text-[28px] text-[#ff6600]'>2</strong>位完全技术出身 P8 架构师</p>
              <p className='py-[10px]'><strong className='text-[28px] text-[#ff6600]'>23+</strong>位垂直领域 P7 技术专家，3 位全栈技术专家</p>
              <p className='py-[10px]'><strong className='text-[28px] text-[#ff6600]'>6 </strong>位 P6+ 高潜应届生</p>
            </div>
          </div>
          <div className='text-center text-[28px] text-[#fff]'>
            <p>我们的优势：所有成员全部国内一线互联网大厂，并且在职</p>
            <p>我们不考虑离职状态（空窗期超过半年）的伙伴，以此保障技术的先进性和问题解决的速度</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="box" id="area" style={boxStyle}>
          <div
            className='bg-[#fff] h-[100%] py-[10px] text-[#000] text-center'>
            <h1 className='text-[36px]'>我们的业务范围：</h1>
            <div className='flex h-[calc(50%-20px)] justify-around bg-[#0d053e]'>
              <div className='flex-grow w-[50%] flex flex-col justify-around text-[#fff]'>
                <h1 className='text-[30px]'>企业</h1>
                <p className=''>软件报价、评估（不承接开发）： 精准的软件外包报价</p>
                <p className=''>外包、人才能力评估：以合适的价格招聘人才</p>
                <p className=''>系统架构设计，方案指导</p>
                <p className=''>一个可定向咨询的架构师：团队资源配比方案、技术演进路线</p>
              </div>
              <Image alt="about" src="/static/about1.jpg" width={width ? (width - 48) / 2 : 600} layout="fixed" height={height ? (height - 84) / 2 :600}/>
            </div>
            <div className='flex h-[calc(50%-20px)] justify-around bg-[#5650d3]'>
            <Image alt="about" src="/static/about2.jpg" width={width ? (width - 48) / 2 : 600} layout="fixed" height={height ? (height - 84) / 2 : 600}/>
              <div className='flex-grow w-[50%] flex flex-col justify-around text-[#fff]'>
                <h1 className=' text-[30px]'>个人</h1>
                <p className=''>一对一问题快速解决：具体问题的快速解决, 原理讲解</p>
                <p className=''>简历评估、职业发展方向咨询：获得一位在职技术专家的联系方式，合适可内推</p>
                <p className=''>晋升指导（能力模型阿里P8及以下）</p>
                <p className=''>技术TL 团队管理，架构方案探讨</p>
              </div>
            </div>
            <div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="box" id="joinus" style={boxStyle}>
          <div
            className={classNames(
            "bg-[url(../static/joinus.jpg)] h-[100%] bg-cover bg-center-bottom text-[#fff] font-semibold",
          )}>
            <div className="flex h-[100%]  p-[24px] flex-col justify-around bg-[rgba(28,28,28,.7)]">
              <p className={fontClassName}>我们诚邀在职的优秀伙伴加入：</p>
              <p className={fontClassName}>如果你：</p>
              <p className={fontClassName}>是某个领域的P8大佬（技术向）</p>
              <p className={fontClassName}>一线大厂工作经验5年+ （五年内达到P7以上, 三年内达到P6也可）</p>
              <p className={fontClassName}>火眼金睛的一线HR，有过精彩的招聘经历，或开人水平超高</p>
              <p className={fontClassName}>请联系我！！！！</p>
              <Button ghost className="position text-[#fff]  left-[50%] !ml-[-50px] w-[100px] h-[40px]">
                <Link href='contact'>
                  找我们！
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="box  bg-[#6a67ce]" id="contact" style={boxStyle}>
          <div className="h-[calc(100%-120px)]">
            <div className='flex justify-between h-[100%] p-[24px]'>
              <div className='w-[48%] h-[100%]'>
                <p className='text-[#fff] text-[30px]'>企业用户</p>
                <iframe src="https://www.wjx.cn/vm/ro3fLD7.aspx#" width="100%" height="90%"></iframe>
              </div>
              <div className='w-[48%]'>
                <p className='text-[#fff] text-[30px]'>个人用户</p>
                <iframe src="https://www.wjx.top/vm/hj3OIxA.aspx#" width="100%" height="90%"></iframe>
              </div>
            </div>
          </div>
          <Image className="mx-[auto]" alt="about" src="/static/qrcode.jpg" width={100} layout="fixed" height={100}/>
        </div>
        
      </SwiperSlide>
    </Swiper>
}
export default function Home() {
  const { height } = useSize();
  const [index, setIndex] = useState(0);
  const setNextIndex = nextIndex => {
    console.log(nextIndex);
    setIndex(nextIndex)
  }
  return <div
    style={{
      height: height || 'unset',
    }}
    className='font-semibold'>
    <Head active={index} setIndex={setNextIndex} />
    <Children active={index} setIndex={setNextIndex} />
  </div>
}


