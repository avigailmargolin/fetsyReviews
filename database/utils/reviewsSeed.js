const faker = require('faker');

const reviewsData = [
	{
		customer_name: 'Jennifer Stewart',
		date_of_review: 'Oct 31, 2020',
		rating: 5,
		review_content: '',
		image_url: `https://fec-etsy-reviews.s3-us-west-1.amazonaws.com/Masks${faker.random.number({
			min: 0,
			max: 9,
		})}.jpg`,
		ItemId: 1,
		item_option: 'Hot Pink',
	},
	{
		customer_name: 'thebec69',
		date_of_review: 'Nov 11, 2020',
		rating: 5,
		review_content: '',
		image_url: `https://fec-etsy-reviews.s3-us-west-1.amazonaws.com/Masks${faker.random.number({
			min: 0,
			max: 9,
		})}.jpg`,
		ItemId: 1,
		item_option: 'Black',
	},
	{
		customer_name: 'Beverly Smith',
		date_of_review: 'Nov 10, 2020',
		rating: 5,
		review_content: 'Really love this mask in black! I received a lot of compliments. It was delivered on time .',
		image_url: `https://fec-etsy-reviews.s3-us-west-1.amazonaws.com/Masks${faker.random.number({
			min: 0,
			max: 9,
		})}.jpg`,
		ItemId: 1,
		item_option: 'Black',
	},
	{
		customer_name: 'dancinladyy',
		date_of_review: 'Nov 3, 2020',
		rating: 3,
		review_content: 'NEEDS TO BE LONGER SO IT COMPLETELY COVERS CHIN',
		image_url: `https://fec-etsy-reviews.s3-us-west-1.amazonaws.com/Masks${faker.random.number({
			min: 0,
			max: 9,
		})}.jpg`,
		ItemId: 1,
		item_option: 'Black',
	},
	{
		customer_name: 'Kazza',
		date_of_review: 'Nov 11, 2020',
		rating: 5,
		review_content: 'Speedy delivery Item nice Recommend',
		image_url: `https://fec-etsy-reviews.s3-us-west-1.amazonaws.com/Masks${faker.random.number({
			min: 0,
			max: 9,
		})}.jpg`,
		ItemId: 2,
		item_option: 'Christmas tree+bow',
	},
	{
		customer_name: 'Angela Naylor',
		date_of_review: 'Oct 21, 2020',
		rating: 5,
		review_content: 'Absolutely beautiful will definitely be purchasing some more . Delivery time outstanding so quick thank you so much xx 💜',
		image_url: `https://fec-etsy-reviews.s3-us-west-1.amazonaws.com/Masks${faker.random.number({
			min: 0,
			max: 9,
		})}.jpg`,
		ItemId: 2,
		item_option: 'Christmas tree+bow',
	},
	{
		customer_name: 'ruthiebaby1619',
		date_of_review: 'Nov 9, 2020',
		rating: 5,
		review_content: "This mask is fabulous! Glitter design at both sides. Very comfortable. Can't wait till December to wear it!",
		image_url: `https://fec-etsy-reviews.s3-us-west-1.amazonaws.com/Masks${faker.random.number({
			min: 0,
			max: 9,
		})}.jpg`,
		ItemId: 2,
		item_option: 'Christmas tree+bow',
	},
	{
		customer_name: 'Laura Hendricks',
		date_of_review: 'Oct 20, 2020',
		rating: 5,
		review_content: 'Very comfortable and breathable without being right up against my mouth',
		image_url: `https://fec-etsy-reviews.s3-us-west-1.amazonaws.com/Masks${faker.random.number({
			min: 0,
			max: 9,
		})}.jpg`,
		ItemId: 2,
		item_option: '06. grey rose bows',
	},
];

const addFakeReview = () => {
	const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
	const name = faker.name.findName();
	const d = faker.date.past();
	const date = `${monthNames[d.getMonth()]} ${d.getDay()}, ${d.getFullYear()}`;
	const rating = faker.random.number({
		min: 1,
		max: 5,
	});
	const content = faker.lorem.sentence();
	const options = faker.lorem.words(3);
	const itemId = faker.random.number({
		min: 1,
		max: 10,
	});
	const json = {
		customer_name: name,
		date_of_review: date,
		rating,
		review_content: content,
		image_url: `https://fec-etsy-reviews.s3-us-west-1.amazonaws.com/Masks${faker.random.number({
			min: 0,
			max: 9,
		})}.jpg`,
		ItemId: itemId,
		item_option: options,
	};
	reviewsData.push(json);
};

for (let i = 0; i < 200; i += 1) {
	addFakeReview();
}

module.exports = reviewsData;
