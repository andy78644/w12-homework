export class Game {
    private total_price = 0;
    private book = 0
    buy(pins: number){
        this.total_price += 100;
        this.book++;
    }
    
    get price(){
        if(this.book === 2) this.total_price *= 0.95;
        else if(this.book === 3) this.total_price *= 0.90;
        else if(this.book === 4) this.total_price *= 0.80;
        else if(this.book === 5) this.total_price *= 0.75;
        return this.total_price;
    }
}
