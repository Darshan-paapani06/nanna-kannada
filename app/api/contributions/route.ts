import { env } from "cloudflare:workers";

const limits=new Map<string,{count:number;at:number}>();
function clean(value:unknown,max:number){return typeof value==="string"?value.trim().slice(0,max):""}

export async function POST(request:Request){
  const identity=request.headers.get("oai-authenticated-user-id");
  if(!identity)return Response.json({error:"ಕೊಡುಗೆ ಕಳುಹಿಸಲು ChatGPT ಖಾತೆಯಿಂದ ಸೈನ್ ಇನ್ ಆಗಬೇಕು ಗುರು."},{status:401});
  const now=Date.now();const limit=limits.get(identity);
  if(limit&&now-limit.at<60_000&&limit.count>=5)return Response.json({error:"ಒಂದು ನಿಮಿಷದಲ್ಲಿ ಹೆಚ್ಚು ಕೊಡುಗೆ ಬಂದಿದೆ ಗುರು. ಸ್ವಲ್ಪ ತಡೆದು ಪ್ರಯತ್ನಿಸು."},{status:429});
  limits.set(identity,{count:limit&&now-limit.at<60_000?limit.count+1:1,at:limit&&now-limit.at<60_000?limit.at:now});
  let body:Record<string,unknown>;try{body=await request.json()}catch{return Response.json({error:"ಮಾಹಿತಿ ಸರಿಯಾದ ರೂಪದಲ್ಲಿಲ್ಲ ಗುರು."},{status:400})}
  const region=clean(body.region,80),expression=clean(body.expression,120),context=clean(body.context,600),source=clean(body.source,300);
  if(!region||!expression||!context||!source)return Response.json({error:"ಎಲ್ಲಾ ಕಡ್ಡಾಯ ವಿವರಗಳನ್ನೂ ತುಂಬು ಗುರು."},{status:400});
  if(!env.DB)return Response.json({error:"ಸಂಗ್ರಹಣೆ ಇನ್ನೂ ಸಂಪರ್ಕಗೊಂಡಿಲ್ಲ. ನಿನ್ನ ಮಾಹಿತಿ ಉಳಿಸಲಾಗಿಲ್ಲ."},{status:503});
  await env.DB.prepare("INSERT INTO contributions (user_id, region, expression, context, source, status) VALUES (?, ?, ?, ?, ?, 'pending')").bind(identity,region,expression,context,source).run();
  return Response.json({message:"ಧನ್ಯವಾದ ಗುರು! ನಿನ್ನ ಮಾತು ಪರಿಶೀಲನಾ ಪಟ್ಟಿಗೆ ಸೇರಿದೆ."},{status:201});
}

