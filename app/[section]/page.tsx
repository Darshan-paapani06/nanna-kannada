import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductExperience } from "../components/ProductExperience";

const sections:Record<string,string>={learn:"ಕನ್ನಡ ಕಲ್ತ್ಕೋ",karnataka:"ನಮ್ಮ ಕರ್ನಾಟಕ",dialects:"ಊರಿಗೊಂದು ಕನ್ನಡ",history:"ರಾಜರ ಗರ್ಜನೆ",heritage:"ನಮ್ಮ ಪರಂಪರೆ",ai:"ಕನ್ನಡ ಮಿತ್ರ",speak:"ಮಾತಾಡು ಗುರು",challenge:"ಕನ್ನಡ ಕದನ",stories:"ಕನ್ನಡದ ಕಥೆಗಳು",contribute:"ನಿನ್ನ ಊರಿನ ಮಾತು",profile:"ನನ್ನ ಸಾಧನೆ",about:"ನಮ್ಮ ಸಂಕಲ್ಪ"};

export async function generateMetadata({params}:{params:Promise<{section:string}>}):Promise<Metadata>{
  const {section}=await params; const title=sections[section];
  if(!title)return {};
  return {title:`${title} | ನನ್ನ ಕನ್ನಡ`,description:`${title} — ಕನ್ನಡ-ಮೊದಲ ಕಲಿಕೆ ಮತ್ತು ಕರ್ನಾಟಕ ಸಂಸ್ಕೃತಿ ಅನುಭವ.`};
}

export default async function SectionPage({params}:{params:Promise<{section:string}>}){
  const {section}=await params;
  if(!sections[section])notFound();
  return <ProductExperience kind={section}/>;
}

