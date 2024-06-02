const rfid_validate = (schema) => async (req, res, next) => {
    try {
      await schema.validate({
        body: req.body,
        query: req.query,
        params: req.params,
      });
      return next();
    } catch (err) {
      return res.status(500).json({ type: err.name, message: err.message });
    }
  };
  const assure_validate = (schema) => async (req, res, next) => {
    try {
      await schema.validate({
        body: req.body,
        query: req.query,
        params: req.params,
      });
      return next();
    } catch (err) {
      return res.status(500).json({ type: err.name, message: err.message });
    }
  };

  module.exports.Validator={
    assure_validate,
    rfid_validate,
  }