class Slider {
    constructor(imageArray, index = 0){
        this._images = imageArray;
        this._currentIndex = index;
    }

    get currentSlide() {
        return this._images[this._currentIndex]
    }

    set currentIndex(v) {
        if (typeof v !== 'number') {
            throw new TypeError('Index must be a number');
        }
        this._currentIndex = v;
    }

    get currentIndex() {
        return this._currentIndex;
    }

    get prev() {
        return ((this.currentIndex-1 + this._images.length) % this._images.length)
    }
 
    get next() {
        return ((this.currentIndex+1) % this._images.length)
    }


}