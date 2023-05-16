// да се начертае ромб от звездички

function diamondOfStars(n) {
    let = Number(n);

    for(let row = 0; row < n-1; row++) {
        console.log("  ". repeat(n-1-row) + " *  ".repeat(row + 1));
    }
    console.log(" *  ".repeat(n));
    for(let row =0; row < n-1; row ++){
        console.log("  ".repeat(1+row) + " *  ".repeat(n-1-row));
    }

}
diamondOfStars(5);