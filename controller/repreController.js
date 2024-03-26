const repreService = require('../service/repreService');

exports.register = async (req, res, next) => {
    try{
        const user = await repreService.register(req.body);
        res.status(200).json({ message: 'Usuario registrado con éxito' });
    
        res.send(user);
    }catch (error) {
        next(error);
    }
    
};

exports.login = async (req, res) => {
    const token = await repreService.login(req.body);
    res.json(token);
};