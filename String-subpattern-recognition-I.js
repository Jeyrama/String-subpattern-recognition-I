/*
In this challenge you need to build a function to return either true/True or false/False 
if a string can be seen as the repetition of a simpler/shorter subpattern or not.

For example:
  hasSubpattern("a") === false; //no repeated pattern
  hasSubpattern("aaaa") === true; //created repeating "a"
  hasSubpattern("abcd") === false; //no repeated pattern
  hasSubpattern("abababab") === true; //created repeating "ab"
  hasSubpattern("ababababa") === false; //cannot be entirely reproduced repeating a pattern

Strings will never be empty and can be composed of any character 
(just consider upper- and lowercase letters as different entities) 
and can be pretty long.
*/


// Solution

function hasSubpattern(string) {
  return (string + string).indexOf(string, 1) != string.length;
}