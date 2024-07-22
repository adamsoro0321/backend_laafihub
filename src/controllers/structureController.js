const {Structure,Assure}=require('../sequelize');
const getAllStructure =async (req,res)=>{
      try {
        const data = await Structure.findAll() ;
        res.json({message:'succes ',data}) ;
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
      }
}

const getStructureById =async (req,res)=>{
    try {
        const id =req.params.id ;
       const data= await Structure.findByPk(id) ;
    if (data) {
        res.json({message:'succes',data}) ;
         }else{
        res.status(404).json({error:'Structure not found'}) ;
      }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
}
const getMatriculeById=async (req,res)=>{
    try {
        const { structureId } = req.params;

        // Trouver la structure par ID
        const structure = await Structure.findByPk(structureId);

        if (!structure) {
            return res.status(404).json({ error: 'Structure non trouvée' });
        }

        const codeStructure = structure.code;

        // Trouver le nombre d'assurés dans cette structure
        const assureCount = await Assure.count({ where: { idStructure: structureId } });
        // Générer un random de 3 chiffres
        const randomDigits = Math.floor(100 + Math.random() * 900);
        // Générer le matricule suggéré
        const suggestedMatricule = `${codeStructure}-${assureCount + 1}${randomDigits}`; // +1 pour le prochain assuré

        res.json({ suggestedMatricule });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erreur lors de la suggestion du matricule' });
    }
}

const createStructure = async (req, res) => {
    try {
        const formData = req.body;
        // Vérifier si le code de la structure est déjà utilisé
        const existingStructure = await Structure.findOne({ where: { code: formData.code } });
        if (existingStructure) {
            return res.status(400).json({ error: 'Le code de structure est déjà utilisé' });
        }
        // Créer une nouvelle structure
        const newStructure = await Structure.create(formData);
        return res.status(201).json({ message: 'Création de structure réussie', data: newStructure });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Une erreur s\'est produite lors de la création de la structure' });
    }
}

const updatStructure =async (req, res)=>{
    try {
        const id =req.params.id ;
       
        const _Structure =await Structure.findByPk(id);
      //  console.log('updater' ,id ,_Structure)
        if (_Structure) {
            const data =req.body ;
           /// console.log("body data",data) ;
            await _Structure.update(req.body) ;
            res.status(202).json(_Structure)
        } else {
            res.status(404).json({ error: 'Structure not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Something went wrong' });
    }
}

const deleteStructure=async(req,res)=>{
    try {
        const id =req.params.id ;
        const _Structure =await Structure.findByPk(id);
        if (_Structure) {
            await _Structure.destroy() ;
            res.status(200).json({message:'succes deleting'});
        } else {
            res.status(404).json({error:'Structure not found'});
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
}

const getStructureCode=async (req,res)=>{

    try {
        // Trouver le nombre de police
        const policeCount = await Structure.count();
        // Générer un random de 3 chiffres
        const randomDigits = Math.floor(100 + Math.random() * 900);
        // Générer le matricule suggéré
        const code = `${policeCount + 1}${randomDigits}`; // +1 pour le prochain assuré

        res.json({ code });
 } catch (error) {
     console.error(error);
     res.status(500).json({ error: 'Erreur lors de la suggestion du numero' });
 }
}
const getDetail =async (req,res)=>{
    try {
        const id =req.params.id ;
       const data= await Structure.findOne({
                        where: { id },
                        include:[
                             {
                                model: Assure,
                             },
                        ]
       }) ;
    if (!data) {
        res.status(404).json({error:'Structure not found'}) ;
      }
      res.status(200).json({message:'succes',data}) ;
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
}

const getMatricule = async (req, res) => {
    try {
        const {  codestrucutre:code} = req.params;
        if (!code) {
            return res.status(400).json({ error: "Vous n'avez pas fourni l'identité de la structure" });
        }
      
        // Trouver la structure par code
        const structure = await Structure.findOne({ where: { code } });

        if (!structure) {
            return res.status(404).json({ error: 'Structure non trouvée' });
        }
        const { id } = structure;

        // Trouver le nombre d'assurés dans cette structure
        const assureCount = await Assure.count({ where: { idStructure: id } });

        // Générer un random de 3 chiffres
        const randomDigits = Math.floor(100 + Math.random() * 900);

        // Générer le matricule suggéré
        const matricule = `${code}-${assureCount + 1}${randomDigits}`; // +1 pour le prochain assuré
        res.status(201).json({ matricule });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: 'Something went wrong' });
    }
};


  
module.exports.StructureControllers={
    getAllStructure,
    getStructureById,
    createStructure,
    updatStructure,
    deleteStructure, 
    getMatriculeById,
    getStructureCode,
    getDetail,
    getMatricule
}
