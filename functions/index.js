const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
	response.send('Hello from Firebase!');
});

exports.getRecipes = functions.https.onRequest((req, res) => {
	admin
		.firestore()
		.collection('recipes')
		.get()
		.then((data) => {
			let recipes = [];
			data.forEach((doc) => {
				recipes.push(doc.data());
			});
			return res.json(recipes);
		})
		.catch((err) => console.error(err));
});

exports.createRecipes = functions.https.onRequest((req, res) => {
	const newRecipe = {
		name: req.body.name,
		ingredients: req.body.ingredients,
		equipment: req.body.equipment,
		steps: req.body.steps,
		createdAt: admin.firestore.Timestamp.fromDate(new Date())
	};

	admin
		.firestore()
		.collection('recipes')
		.add(newRecipe)
		.then((doc) => {
			res.json({ message: `document ${doc.id} created successfully` });
		})
		.catch((err) => {
			res.status(500).json({ error: 'something went wrong' });
			console.error(err);
		});
});
