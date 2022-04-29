var rect={
  perimeter:(x,y)=>(2*(x+y)),
    area:(x,y)=>(x*y)
};
function solveRect(l,b){
    console.log('solving for rectangle with l=' +l +'and b ='+b);
    if (l<=0 || b<=0){
        console.log('rectangle dimensions error');
    }
    else{
        console.log('the area is '+rect.area(l,b));
        console.log('the perimeter is '+rect.perimeter(l,b));
    }
}

solveRect(1,2);
solveRect(3,5);
solveRect(0,5);
solveRect(-3,5);
