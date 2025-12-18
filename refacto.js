// Before
const a = ["foo", "bar"][Math.random() < 0.5 ? 0 : 1]
const b = [1, 2][Math.random() < 0.5 ? 0 : 1]
const c = [{path: "/foo"}, {path: "/bar"}][Math.random() < 0.5 ? 0 : 1]

//After
function binaryRandomChoice(arg1,arg2){
    return [arg1,arg2][Math.random() < 0.5 ? 0 : 1]
}

//Solutions autres
function getRandom(list){
    return list[Math.random() < 0.5 ? 0 : 1]
}