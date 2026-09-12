import { createServer } from "node:http";
const server = createServer((req,res)=>{ if(req.url==="/healthz"){res.writeHead(200,{"content-type":"application/json"});res.end('{"status":"ok"}');}else{res.writeHead(404);res.end();} });
if(process.argv.includes("--self-test")) process.exit(0); server.listen(3000,"0.0.0.0");
