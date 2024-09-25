var router 	   = require('express').Router();
var Mahasiswa  = require('../models').mahasiswa;
module.exports = router;

router.get('/',(req,res,next)=>{
	Mahasiswa.findAll()
		.then(function(mahasiswa){
			res.render('page/DaftarMahasiswa',{title:'Data Mahasiswa',data:mahasiswa})
		})
		.catch(next);
    
});
router.get('/add',(req,res,next)=>{
	res.render('page/addMahasiswa',{title:'Tambah Data Mahasiswa'})
});
router.post('/add',(req,res,next)=>{
	if (typeof req.body.id !== 'undefined'){
		Mahasiswa.update(
			{
				nama : req.body.nama,
				nim  : req.body.nim,
				email: req.body.email,
				no_hp: req.body.no_hp
			},{
				where : {
					id : req.body.id
				}
			}
		)
		.then((mahasiswa)=>{
			
		})
		.catch(next);
	}else{
		Mahasiswa.create(req.body)
	    .then((mahasiswa)=>{
	   		
	    })
	    .catch((error)=>{
	   	
	   	 res.send(error);
	    })
	    .catch(next);
	}
	res.redirect('/mahasiswa');
});


router.get('/:id',(req,res)=>{
	Mahasiswa.findOne({
		where :{
			id : parseInt(req.params.id)
		}
	})
	.then((mahasiswa)=>{
		if(!mahasiswa){
			res.send('Data Tidak Ada');
		}else{
			res.render('page/addMahasiswa',{title:'Tambah Data Mahasiswa',data:mahasiswa})
		}
	})
});

router.get('/delete/:id',(req,res)=>{
	Mahasiswa.destroy({
		where :{
			id : parseInt(req.params.id)
		}
	})
	.then((data)=>{
		if(data === 1){
			res.send({
				success: true,
			});
		}
		
	})
});


