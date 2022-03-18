// by adding export to our class TS turns the file into an accsesible module
export class Point {
    constructor(private x?: number, private y?: number) {
   }

   draw() {
    console.log('X: '+ this.x + ', Y: ' + this.y);
    }
}