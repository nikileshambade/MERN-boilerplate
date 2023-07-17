const errorHandler = (err, req, res, next) => {
    const { message, statusCode } = err;
    res.status(statusCode || 200).json({
        success: false,
        error: {
            message
        }
    });
};

module.exports = errorHandler;