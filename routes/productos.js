const {Router}=require('express');
const router=Router();

router.get(
    '/',
    (req,res)=>{
        res.render(
            'productos',
            {
                title:'productos',
                esProductos:true,
            }
        );
    }
);

module.exports=router;