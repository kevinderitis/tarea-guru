const saveSessionUser = async (req, res) => {
    if(req.body){
        req.session.user = req.body.user;
        req.session.email = req.body.email;
        res.status(200).json({ msg: 'Data received', description: `user: ${req.session.user}, email: ${req.session.email} saved`})
    }else{
        res.status(401).json({ msg: 'Invalida data', description: 'You must add user and email'})
    }    
}

module.exports = { saveSessionUser };