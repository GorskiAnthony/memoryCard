const router = require("express").Router();
const Card = require("../../model/Card");
const verify = require("../verifyToken");

router.get("/", verify, async (req, res) => {
	const cards = await Card.find();
	res.json(cards);
});

// Post card
router.post("/add", verify, (req, res) => {
	const card = new Card({
		user: req.user,
		recto: req.body.recto,
		verso: req.body.verso,
	});
	try {
		const saveCard = card.save();
		res.send({ card });
	} catch (err) {
		res.send(err);
	}
});

module.exports = router;
