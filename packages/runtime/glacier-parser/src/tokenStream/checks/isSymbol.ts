export function isSymbol(char: string): boolean {
  return (
    char == '+' ||
    char == '-' ||
    char == '*' ||
    char == '/' ||
    char == '%' ||
    char == '=' ||
    char == '>' ||
    char == '<' ||
    char == '&' ||
    char == '!' ||
    char == '?' ||
    char == ':' ||
    char == '|' ||
    char == ';' ||
    char == ',' ||
    char == '.' ||
    char == '(' ||
    char == ')' ||
    char == '{' ||
    char == '}' ||
    char == '[' ||
    char == ']' ||
    char == '"' ||
    char == "'" ||
    char == '`'
  );
}
