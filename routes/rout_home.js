const {Router}=require('express'); 

const router=Router();

router.get(
    '/',
    (req,res)=>{
        res.render(
            'index',
            {
                title:'home page',
                esHome:true,
            }
        );
    }
);



module.exports=router;