const router = require("express").Router();
const Card = require("../../model/Card");
const verify = require("../verifyToken");

router.get("/counts", async (req, res) => {
	const nbCard = await Card.find({}).count();
	res.json(nbCard);
});

// get card
router.get("/", verify, async (req, res) => {
	const cards = await Card.find({ user: req.user });
	res.json(cards);
});

router.delete("/delete/:id", verify, async (req, res) => {
	const card = await Card.deleteOne({
		nbCard: req.params.id,
	});
	//console.log(card);
	res.send("card delete");
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
		console.log("tu nas pas le droit");
		res.send(err);
	}
});

module.exports = router;
