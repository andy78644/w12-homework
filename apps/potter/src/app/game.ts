export class Game {
    private total_price = 0;
    private book = 0
    buy(pins: number){
        this.total_price += 100;
        this.book++;
    }
    
    get price(){
        if(this.book === 2) this.total_price *= 0.95;
        return this.total_price;
    }
}
