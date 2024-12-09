const fs=require('fs').promises
const path=require('path')
const dotEnv=require('dotenv').config();


const visitName=process.env.npm_config_local_prefix
const FilePath=path.join(visitName,"FsModule","Offers.json")

const OffersControler = async (req, res)=> {
    try {
        const data = await fs.readFile(FilePath, 'utf8');        
        res.status(200).json(JSON.parse(data));
    } catch (error) {
         res.status(500).json({ message: 'Internal Server Error' });
    }
}

module.exports={OffersControler};
