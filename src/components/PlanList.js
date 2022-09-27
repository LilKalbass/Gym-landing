import React, { useState } from 'react';

// import icons
import { BsCheckCircleFill } from 'react-icons/bs';

const PlanList = ({ plans }) => {
    const [index, setIndex] = useState(0);
    return (
        <div className = "flex flex-col lg:flex-row items-center justify-center max-w-[1280px] mx-auto gap-y-4 transition">
            {plans.map((plan, id) => {
              const { name, price, list, delay } = plan;
              return (
                  <div onClick={() => setIndex(id)}
                       key = {id}
                       data-aos = "fade-up"
                       data-aos-offset = "200"
                       data-aos-delay = {delay}
                       className = "w-full md:max-w-[620px] lg:max-w-[405px] rounded-sm px-4 lg:min-h-[550px]">
                    <div className = {`${id === index ? "bg-neutral-500 text-white" : "bg-pink-400/25 text-neutral-500"} 
                     flex justify-center items-center rounded-[15px] py-[40px] px-7 lg:min-h-[550px] transition duration-100`}>
                        <div className = "flex flex-row lg:flex-col items-center gap-x-8 gap-y-8 lg:gap-x-0">
                            <div>
                                <div className = {`${id === index ? "bg-primary-200 text-neutral-500" : "bg-neutral-500 text-white"} 
                                 h-[26px] font-primary text-sm font-semibold max-w-min mx-auto px-[14px] flex items-center justify-center mb-8 rounded-[4px]`}>{name}
                                </div>
                                <div className = "text-4xl lg:text-6xl font-primary font-bold text-center flex flex-col items-center justify-center">
                                    <div className = "leading-none">
                                        <span className = "tracking-[0.1px]">{price}</span><span className = "text-3xl lg:text-4xl font-bold">$</span>
                                    </div>
                                    <span className = "text-sm font-medium">/month</span>
                                </div>
                            </div>
                            <div>
                              <ul className = "flex flex-col gap-y-5 mb-8">
                                  {list.map((item, idCurrent) => {
                                    return (
                                        <li className = "flex items-center gap-x-2"
                                            key = {idCurrent}>
                                            <div>
                                                <BsCheckCircleFill className = "text-lg" />
                                            </div>
                                            <div>{item.name}</div>
                                        </li>
                                    );
                                  })}
                              </ul>
                                <button className = {`${id === index ? "bg-primary-200 text-neutral-500 hover:bg-primary-200/80" : "border border-neutral-500 hover:text-primary-200"} 
                                        btn btn-lg rounded-[4px] lg:mx-auto`}>Join now
                                </button>
                            </div>
                        </div>
                    </div>
                  </div>
              );
            })}
        </div>
    );
};

export default PlanList;