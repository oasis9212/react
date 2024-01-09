function isKoreanFOOD(food){
    if(["불고기", "떡복이", "비빔밥"].includes(food)){
        return "true"
    }else{
        return "false"
    }
}

const meal = {
    한식: "불고기",
    중식: "짜장면",
    양식: "파스타",
    일식: "초밥",
    인도식: "카레"
}

const getmeal = (mealType) => {
    return meal[mealType] || "굶기";
}

console.log(getmeal("중식"))