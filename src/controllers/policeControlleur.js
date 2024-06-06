const {Police,PoliceMaladie,policeOps}=require('../sequelize');

const getAllPolice =async (req,res)=>{
      try {
       const data = await Police.findAll() ;
        res.json({message:'succes ',data}) ;
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
      }
}
const getNumber =async(req,res)=>{
    try {
           // Trouver le nombre de police
           const policeCount = await Police.count();
           // Générer un random de 3 chiffres
           const randomDigits = Math.floor(100 + Math.random() * 900);
           // Générer le matricule suggéré
           const number = `${policeCount + 1}${randomDigits}`; // +1 pour le prochain assuré
   
           res.json({ number });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erreur lors de la suggestion du numero' });
    }
}
const getPoliceById =async (req,res)=>{
    try {
        const id =req.params.id ;
       const data= await Police.findByPk(id) ;
    if (data) {
        res.json({message:'succes',data}) ;
         }else{
        res.status(404).json({error:'Police not found'}) ;
      }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
}

const createPolice =async (req,res)=>{
    try {
       
        const { maladies, operations, ...police } = req.body;
        /** saving police */
        const data =await Police.create(police);
        const policeId = data.id;

        // Sauvegarder les relations maladies-police
        if (maladies) {
            for (const maladieId of maladies) {
                await PoliceMaladie.create({ PolouseId:policeId, maladieId });
            }
        }
        if (operations) {
            for (const operationId of operations) {
                await policeOps.create({ PolouseId:policeId, operationMedicalId:operationId });
            }
        }

        // Sauvegarder les relations opérations-police
      
        res.status(201).json({ message:'succes create  police',data}) ;
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
}  //192.168.14.174

const updatePolice =async (req, res)=>{
    try {
        const id =req.params.id ;
       
        const _Police =await Police.findByPk(id);
      //  console.log('updater' ,id ,_Police)
        if (_Police) {
            const data =req.body ;
           /// console.log("body data",data) ;
            await _Police.update(req.body) ;
            res.status(202).json(_Police)
        } else {
            res.status(404).json({ error: 'Police not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Something went wrong' });
    }
}

const deletePolice=async (req,res)=>{
    try {
        const id =req.params.id ;
        const _Police =await Police.findByPk(id);
        if (_Police) {
            await _Police.destroy() ;
            res.status(200).json({message:'succes deleting'});
        } else {
            res.status(404).json({error:'Police not found'});
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
}

module.exports.PoliceControllers={
    getAllPolice,
    getPoliceById,
    createPolice,
    updatePolice,
    deletePolice,
    getNumber
}
// re