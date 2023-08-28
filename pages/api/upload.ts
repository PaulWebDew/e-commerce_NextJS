import multiparty from  'multiparty';
import type {NextApiResponse, NextApiRequest} from 'next';

import { dirname } from 'path';
import { fileURLToPath } from 'url';

export const __dirname = dirname(fileURLToPath(import.meta.url));
console.log(__dirname)

const options = {
   autoFiles:true,
    uploadDir :__dirname+'/../../public/uploads',
   };

const handle = (
   req:NextApiRequest,
   res:NextApiResponse)=>{

   const form = new multiparty.Form(options);
      form.parse(req, (err, fields, files) => {
         const path = files.file[0].path;
         const localPath = path.split('\\').slice(-2).join('/');
         res.json({path:localPath});
      })

}

export const config = {api:{bodyParser:false}}
export default handle;



