const router = require("express").Router();
const Card = require("../../model/Card");
const verify = require("../verifyToken");

// get count
router.get("/counts", async (req, res) => {
	const totalCard = await Card.find({}).count();
	res.json(totalCard);
});

// get card
router.get("/:id", verify, async (req, res) => {
	const cards = await Card.findOne({ nbCard: req.params.id });
	console.log(cards);
	res.json(cards);
});

// get card
router.get("/", verify, async (req, res) => {
	const cards = await Card.find({ user: req.user });
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
		console.log("tu nas pas le droit");
		res.send(err);
	}
});

// update card
router.put("/update/:id", verify, async (req, res) => {
	const card = await Card.findOneAndUpdate(
		{
			nbCard: req.params.id,
		},
		{
			recto: req.body.recto,
			verso: req.body.verso,
		}
	);
	res.json(card);
});

// delete card
router.delete("/delete/:id", verify, async (req, res) => {
	const card = await Card.deleteOne({
		nbCard: req.params.id,
	});
	//console.log(card);
	res.send("card delete");
});

module.exports = router;
