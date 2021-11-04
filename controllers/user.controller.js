

const usersGet = (req, res) => {
    res.json({
        msg: "API GET - controller"
    })
}

const userPost =(req, res) => {

    const body = req.body;

    res.json({
        msg: "API POST",
        body
    });
}

const userPut = (req, res) => {

    const id = req.params.id;
    
    res.json({
        msg: "API PUT",
        id
    })
}

const userDelete = (req, res) => {

    const id = req.params.id;

    res.json({
        msg: "API DELETE",
        id
    })
}

module.exports = {
    usersGet,
    userPost,
    userPut,
    userDelete
}