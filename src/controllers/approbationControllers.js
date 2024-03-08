const {Approbation}=require('../sequelize');

const getAllApprobation =async (req,res)=>{
      try {
        const data = await Approbation.findAll() ;
        res.json({message:'succes ',data}) ;
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
      }
}

const getApprobationById =async (req,res)=>{
    try {
        const id =req.params.id ;
       const data= await Approbation.findByPk(id) ;
    if (data) {
        res.json({message:'succes',data}) ;
         }else{
        res.status(404).json({error:'Approbation not found'}) ;
      }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
}

const createApprobation =async (req,res)=>{
    try {
        const form_res=req.body ;
        const data =await Approbation.create(form_res);
        res.status(201).json({ message:'succes create  Article',data}) ;
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
}  //192.168.14.174

const updatApprobation =async (req, res)=>{
    try {
        const id =req.params.id ;
       
        const _Approbation =await Approbation.findByPk(id);
      //  console.log('updater' ,id ,_Approbation)
        if (_Approbation) {
            const data =req.body ;
           /// console.log("body data",data) ;
            await _Approbation.update(req.body) ;
            res.status(202).json(_Approbation)
        } else {
            res.status(404).json({ error: 'Approbation not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Something went wrong' });
        res.status(500).json({ error: 'Something went wrong' });
    }
}

const deleteApprobation=async (req,res)=>{
    try {
        const id =req.params.id ;
        const _Approbation = await Approbation.findByPk(id);
        if (_Approbation) {
            await _Approbation.destroy() ;
            res.status(200).json({message:'succes deleting'});
        } else {
            res.status(404).json({error:'Approbation not found'});
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
}

module.exports.ApprobationControllers={
    getAllApprobation,
    getApprobationById,
    createApprobation,
    updatApprobation,
    deleteApprobation,
}
// re