// ⁉️TASK Make a program that filters a list of strings and returns a list with only your friends name in it.
//         If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...
//
// Input = {"Ryan", "Kieran", "Jason", "Yous"}
// Output = {"Ryan", "Yous"}
//
// Input = {"Peter", "Stephen", "Joe"}
// Output = {}
//
// ✅SOLUTION

function friend(friends) {
    //your code here

    const res = friends.filter(el => el.length == 4)
    return res
}