// For Book
{
	"_id": "",
	"name":""
	"ISBN": "",
	"tags": [],
	"authorName": [],
	"borrowedBy": {
		"sid": "",
		"status":"",
		"borrowedDate": "",
		"returnDate": ""
	}
}


// For Student
{
	"_id": "",
	"name": "",
	"email": ""
}


db.books.ensureIndex({tags: 1})