const router = require("express").Router();
const bcrypt = require("bcryptjs");
const User = require("../../model/User");
const jwt = require("jsonwebtoken");
//!TODO voir les bad request

// Validation
const { registerValidation, loginValidation } = require("../../validationSchema");

router.post("/register", async (req, res) => {
	// Validate data before push on database
	const { error } = registerValidation(req.body);
	if (error) return res.send(error.details[0].message);

	// check if email exist
	const emailExist = await User.findOne({ email: req.body.email });
	if (emailExist) return res.send("Email already exist");

	// Hash PWD
	const salt = await bcrypt.genSalt(10);
	const hashPwd = await bcrypt.hash(req.body.password, salt);

	const user = new User({
		name: req.body.name,
		email: req.body.email,
		password: hashPwd,
	});
	try {
		const saveUser = await user.save();
		res.send({ user: _id });
	} catch (err) {
		res.send(err);
	}
});

// Login
router.post("/login", async (req, res) => {
	const { error } = loginValidation(req.body);
	if (error) return res.send(error.details[0].message);

	// check if email exist
	const user = await User.findOne({ email: req.body.email });
	if (!user) return res.send("Email doesn't exist");

	// password
	const validPwd = await bcrypt.compare(req.body.password, user.password);
	if (!validPwd) return res.send("Invalid password");

	// create token and assign
	const token = jwt.sign({ _id: user.id }, process.env.JWT_TOKEN);
	res.header("auth-token", token).send(token);

	res.send("Logged in!");
});

module.exports = router;
