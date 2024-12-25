const {Router}=require('express'); 

const router=Router();

router.get(
    '/',
    (req,res)=>{
        res.render(
            'index.hbs',
            {
                title:'home page',
                esHome:true,
            }
        );
    }
);



module.exports=router;