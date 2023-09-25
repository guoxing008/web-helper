import Image from 'next/image'
import { Button } from 'antd';
import Link from 'next/link';
import { Head } from './index'
export default function About () {
  return <div>
    <Head active="about" />
    <div className='flex bg-[#fff] justify-between p-[24px] text-[#000] text-center'>
      <Image alt="about" src="/static/about.jpg" width={600} height={800}/>
      <div className='flex-grow flex flex-col justify-around'>
        <h1 className='py-[10px]'>我们的团队:</h1>
        <p className='py-[10px]'>团队超级年轻, 全是同职级高潜人才</p>
        <p className='py-[10px]'>2位完全技术出身 P8 架构师</p>
        <p className='py-[10px]'>23+ 位垂直领域 P7 技术专家, 3 位全栈技术专家</p>
        <p className='py-[10px]'>6位 P6+ 高潜应届生</p>
      </div>
    </div>
    <div className='text-center text-[28px]'>
      <p>我们的优势: 所有成员全部国内一线互联网大厂, 并且在职</p>
      <p>我们不考虑离职状态(空窗期超过半年)的伙伴,以此保障技术的先进性和问题解决的速度</p>
    </div>
    <Button type="primary" ghost className="position mt-[20px] left-[50%] !ml-[-50px] w-[100px] h-[40px]">
      <Link href='contact'>
        找我们!
      </Link>
    </Button>
    <div className='bg-[#fff] h-[600px]  p-[24px] text-[#000] text-center'>
      <h1 className='text-[36px] mb-[20px]'>我们的业务范围:</h1>
      <div className='flex justify-between mb-[30px]'>
        <div className='flex-grow flex flex-col justify-around'>
          <h1 className='py-[10px] text-[30px]'>企业</h1>
          <p className='py-[10px]'>软件报价、评估(不承接开发): 精准的软件外包报价</p>
          <p className='py-[10px]'>外包、人才能力评估: 以合适的价格招聘人才</p>
          <p className='py-[10px]'>系统架构设计,方案指导</p>
          <p className='py-[10px]'>一个可定向咨询的架构师: 团队资源配比方案、技术演进路线</p>
        </div>
        <Image alt="about" src="/static/about1.jpg" width={600} height={800}/>
      </div>
      <div className='flex justify-between'>
      <Image alt="about" src="/static/about2.jpg" width={600} height={800}/>
        <div className='flex-grow flex flex-col justify-around'>
          <h1 className='py-[10px] text-[30px]'>个人</h1>
          <p className='py-[10px]'>一对一问题快速解决: 具体问题的快速解决, 原理讲解</p>
          <p className='py-[10px]'>简历评估、职业发展方向咨询: 获得一位在职技术专家的联系方式, 合适可内推</p>
          <p className='py-[10px]'>晋升指导(能力模型阿里P8及以下)</p>
          <p className='py-[10px]'>技术TL 团队管理, 架构方案探讨</p>
        </div>
      </div>
      <div>
        
      </div>
    </div>
  </div>
  
}