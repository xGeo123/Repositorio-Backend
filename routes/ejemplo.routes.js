import {Router} from 'express';
const ejemplo = Router();
ejemplo.get('/', (req, res) => { 
  res.json({
    msg: 'Get all api'
  })
});
ejemplo.get('/:id', (req, res) => { 
const id= req.params.id;
req.json({
  msg: 'Get one api',
  id
})
});
ejemplo.put('/', (req, res) => {
  const body = req.body;
  res.json({
    msg: 'Put api',
    body
  })
});
ejemplo.post('/', (req, res) => {
  const body = req.body;
  res.json({ 
    msg: 'Post api', 
    body 
  })
}); 
ejemplo.delete('/:id', (req, res) => {
  const id= req.params.id;
  res.json({
    msg: 'Delete api',
    id
  })
});
export default ejemplo;
