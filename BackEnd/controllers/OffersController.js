const fs=require('fs').promises
const path=require('path')

const visitName = path.parse('\\Users\\GOVINDA RAO\\OneDrive\\Desktop\\FULLSTACK\\BackEnd\\FsModule\\Offers.json');
const FilePath = path.join(visitName.dir, visitName.base); 
const OffersControler = async (req, res)=> {
    try {
        const data = await fs.readFile(FilePath, 'utf8');        
        res.status(200).json(JSON.parse(data));
    } catch (error) {
         res.status(500).json({ message: 'Internal Server Error' });
    }
}

module.exports={OffersControler};
