let re = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/i;

// ! THE PATTERN MATCHES A LINK THAT IS MAYBE HAS A SUB DOMAIN AND MAYBE FOLLOWED BY A PATH /SOMETHING
// https? => if https exsist match if not also match 
// :\/\/ => escaping the / with \
// (?:[-\w]=\.) => matches if it is followed by a sub domain containig one or more \w or - and ending with (.)
// ? => matches if the previous group () exsist one time or not
// ([-\w]+) => matches a range of (\w or -) one or more than one time
// \. => mathces . and escapes the . using \
// \w+ => mathces one or more word characters
// (?:\.\w+) => mathces if the pattern is followed by `path name` that includes . or one or more word character
// ? => matches if the previous group () exsist one time or not
// \/?.* => escapes the / with the \ then checks if / exsist one or not with the ? 
//  then checks if the ALL the previous pattern exsists 0 or more than 0 with the * quantifier