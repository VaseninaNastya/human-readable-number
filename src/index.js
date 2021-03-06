module.exports = function toReadable (number) {
    let stringNumbersArr1 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    let stringNumbersArr2 = ['ten','eleven','twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
    let stringNumbersArr3 = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
    let numberArr = String(number).split("")
    let newArr = numberArr.map(function(item){
        return stringNumbersArr1[item]
    }
    )
    if (numberArr.length == 1){
    return newArr.join(' ')
    }
    if  (numberArr.length ==2){
        if(newArr[1]=='zero'&&newArr[0]=='one'){
            return "ten"
        }
        if(newArr[1]=='zero'){
            return stringNumbersArr3[stringNumbersArr1.indexOf(newArr[0])-2]
        }
        if(number<20){
            let item = stringNumbersArr1.indexOf(newArr[1])
            return stringNumbersArr2[item]
        }else{
            let firstChild = newArr[0];
            let secondChild = newArr[1];
            if(secondChild!=0){
            return stringNumbersArr3[stringNumbersArr1.indexOf(firstChild)-2]+" "+secondChild
            }else{return stringNumbersArr3[firstChild]}
        }
    }
    if (numberArr.length ==3){
        newArr.splice(1, 0, "hundred")
        let tensNum = numberArr[1]+numberArr[2]
        if(tensNum==0){
            return newArr[0]+" "+newArr[1]
        }
        if(tensNum<10){
            return newArr.splice(0, 2).join(' ')+" "+stringNumbersArr1[numberArr[2]]
        }else if(tensNum>=10&&tensNum<20){
            return newArr[0]+" "+newArr[1]+" "+stringNumbersArr2[numberArr[2]]
        }else{
            if(numberArr[2]!=0){
                return newArr[0]+" "+newArr[1]+" "+stringNumbersArr3[numberArr[1]-2]+" "+stringNumbersArr1[numberArr[2]]
            }else{
                return newArr[0]+" "+newArr[1]+" "+stringNumbersArr3[numberArr[1]-2]
            }
        }
    }
}