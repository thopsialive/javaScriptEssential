//Block Scope
{
    //1. Define Variables
    var varBlockScopeVariable;
    let letBlockScopeVariable;
//    const constBlockScopeVariable; //err: SyntaxError: Missing initializer in const declaration


    varBlockScopeVariable = "I am a var variable in a Block scope.";
    letBlockScopeVariable = "I am a let variable in a Block scope.";
    const constBlockScopeVariable = "I am a const variable in a Block scope.";
}
    //2. Re-assign Variables

    varBlockScopeVariable = "Still a var variable in a Block scope.";
    letBlockScopeVariable = "Still a let variable in a Block scope.";
    constBlockScopeVariable = "Still am const variable in a Block scope.";

    console.log(varBlockScopeVariable)
    console.log(letBlockScopeVariable)
    console.log(constBlockScopeVariable)
//}