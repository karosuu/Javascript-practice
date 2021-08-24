class Media {
    constructor(title) {
        this._title = title;
        this._isCheckedOut = false;
        this._raitings = [];
    }

    get title() {
        return this._title
    }

    get isCheckedOut() {
        return this._isCheckedOut
    }

    get raitings() {
        return this._raitings
    }

    set isCheckedOut(value) {
        this._isCheckedOut = value
    }

    toggleCheckOutStatus() {
        this.isCheckedOut = !this.isCheckedOut
    }

    getAverageRating() {
        let ratingsSum = this.raitings.reduce((accumulator, rating) =>
            accumulator + rating)
        return ratingsSum / this.raitings.length
    }

    addRating(value) {
        this.ratings.push(value);
    }
    
};

class Book extends Media {
    constructor(author, title, pages){
        super(title)
        this._author = author;
         this.pages = pages;

    }
}

class Movie extends Media {
    constructor(director, title, runTime) {
        super(title)
        this._director = director;
        this._runTime = runTime;
    }

    get director() {
        return this._director
    }
 get runTime() {
        return this._runTime
    }
}

//Create book instance
const historyOfEverything = new Book('Bill Bryson', 'A Short history of Nearly Everything', 544);
historyOfEverything.toggleCheckOutStatus()
console.log(historyOfEverything.isCheckedOut)
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
console.log(historyOfEverything.getAverageRating())

const speed = new Movie ('Jan de Bont', 116)
speed.toggleCheckOutStatus()
console.log(speed.isCheckedOut)
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.getAverageRating());


