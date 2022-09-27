import React from 'react';
import PlanList from './PlanList';
import {pricing} from '../data';

const Pricing = () => {
  const {icon, title, plans} = pricing;
  return (
      <section className = "section bg-pink-200">
        <div className = "section-title-group max-w-[540px] mx-auto px-4 lg:px-0"
             data-aos = "fade-up" data-aos-offset = "200" data-aos-delay = "200">
          <img src = {icon} alt = "pricing_icon_img"/>
          <h2 className = "h2">{title}<span className = "text-primary-200 ml-0.5">:</span></h2>
        </div>
        <PlanList plans = {plans}/>
      </section>
  );
};

export default Pricing;
