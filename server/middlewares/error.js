const errorHandler = (err, req, res, next) => {
    res.status(500).json({
        error: error
    });
};

module.exports = errorHandler;