// count hole or consective 0
// "01111"
// "01110"
// "00011"  => 3
// "11110"

// "0111"
// "0011" => 1




function spare(strArr) {
    let count = 0;
    const tmpArr = [];

    strArr.forEach((str) => {
        // return  0's index
        const map = str.split("").map((e,i) => {
            return e === "0" && i;
        });
        // remove  false
        const fileterdMap = map.filter((e) => {
            if (e === 0) return true;
            return e
        })
        count += fileterdMap.length
        tmpArr.push(fileterdMap)
    })

    for (let i = 0; i < tmpArr.length ; i++){
        for (let j = 0; j < tmpArr[i].length; j++){
            // right is same value
            if (tmpArr[i][j + 1] - tmpArr[i][j] === 1) count--;
            // bottom is same value
            if (tmpArr[i + 1]?.includes(tmpArr[i][j])) count--;
        }
    }
    return count
}



console.log(spare(["01111","01110","00011","11110"])) // 3
console.log(spare(["0111", "0011"])); // 1