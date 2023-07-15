const errorHandler = (err, req, res, next) => {
    const { message } = err;
    res.status(500).json({
        error: {
            message
        }
    });
};

module.exports = errorHandler;