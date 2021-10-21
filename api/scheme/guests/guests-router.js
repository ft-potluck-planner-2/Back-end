const Guests = require("./guests-model");
const router = require("express").Router();

const { checkUserNameExist, checkPotluckExist } = require("../../middleware");

router.post(
  "/:potluck_id/invite",
  checkUserNameExist,
  checkPotluckExist,
  (req, res, next) => {
    const { potluck_id } = req.params;
    Guests.addGuest(req.user.user_id, potluck_id)
      .then(() => {
        res.status(202).json({
          message: `successfully invited ${req.user.username} to the potluck`,
        });
      })
      .catch(next);
  }
);

module.exports = router;
