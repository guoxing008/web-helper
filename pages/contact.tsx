import { Head } from './index';

export default function Contact() {
  return <div>
    <Head active="contact" />
    <div className='flex justify-between bg-[#6a67ce] h-[850px] p-[24px]'>
      <div className='w-[48%]'>
        <p className='text-[#fff] text-[30px]'>企业用户</p>
        <iframe src="https://www.wjx.cn/vm/ro3fLD7.aspx#" width="100%" height="700"></iframe>
      </div>
      <div className='w-[48%]'>
        <p className='text-[#fff] text-[30px]'>个人用户</p>
        <iframe src="https://www.wjx.top/vm/hj3OIxA.aspx#" width="100%" height="700"></iframe>
      </div>
    </div>
  </div>
}