import img1 from '../assets/images/image-retro-pcs.jpg'
import img2 from '../assets/images/image-gaming-growth.jpg'
import img3 from '../assets/images/image-top-laptops.jpg'

import { Article } from "./Article";

export const ArticlesContainer = () => {
  return (
    <section className="md:flex md:flex-wrap md:gap-10 mt-6">
      <Article 
        img= {img1}
        number='1'
        title= 'Reviving Retro PCs'
        text= 'What happens when old PCs are given modern upgrades?'
      />
      <Article 
      img= {img2}
      number='2'
      title= 'Top 10 Laptops of 2022'
      text= 'Our best picks for various needs and budgets.'
      />
      <Article 
      img= {img3}
      number='3'
      title= 'The Growth of Gaming'
      text= 'How the pandemic has sparked fresh opportunities.'
      />
    </section>
  );
};

