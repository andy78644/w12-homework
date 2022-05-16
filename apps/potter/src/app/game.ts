export class Game {
    private total_price = 0;
    private book = 0;
    private total_book = 0;
    private count: number [] = [0, 0, 0, 0, 0, 0];
    buy(pins: number, n: number){
        //this.total_price += 100;
        for(let index = 0;index<n;index++){
            this.count[pins]++;
            this.total_book++;
        }
    }
    private test = 2;
    get price(){
        while(this.total_book>0){
            this.book = 0;
            for(let index = 1; index <6;index++){
                if(this.count[index]>0){
                    this.book++;
                    this.count[index]--;
                    this.total_book--;
                }
            }
            this.test--;

            //this.total_book--;
            if(this.book === 1) this.total_price += 100;
            else if(this.book === 2) this.total_price += 190;
            else if(this.book === 3) this.total_price += 270;
            else if(this.book === 4) this.total_price += 320;
            else if(this.book === 5) this.total_price += 375;
            
        }
        //return this.total_book;
        return this.total_price;
    }
}
