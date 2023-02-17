table = """docsElements.table([
                [docsElements.tableHeader("Operator"), docsElements.tableHeader("Description"), docsElements.tableHeader("Example"),], [
                    docsElements.tableCell(docsElements.inlineCode("+"), "CENTER"),
                    docsElements.tableCell("Addition (can also be used on strings to " + docsElements.titleHint("concatenate", "Concatenation is the process of combining two or more strings or lists into a single string or list") + " them)"),
                    docsElements.tableCell(docsElements.inlineCode("3 + 5 = 8"), "CENTER"),
                ], [
                    docsElements.tableCell(docsElements.inlineCode("-"), "CENTER"),
                    docsElements.tableCell("Subtraction"),
                    docsElements.tableCell(docsElements.inlineCode("7 - 2 = 5"), "CENTER"),
                ], [
                    docsElements.tableCell(docsElements.inlineCode("*"), "CENTER"),
                    docsElements.tableCell("Multiplication (can also be used on strings to " + docsElements.titleHint("repeat multiply", "Repeat Multiplication is repeating / duplicating a string 'x' times. Eg. 'Hello' * 5 = 'HelloHelloHelloHelloHello'") + " them)"),
                    docsElements.tableCell(docsElements.inlineCode("4 * 2 = 8"), "CENTER"),
                ], [
                    docsElements.tableCell(docsElements.inlineCode("/"), "CENTER"),
                    docsElements.tableCell("Division"),
                    docsElements.tableCell(docsElements.inlineCode("10 / 2 = 5"), "CENTER"),
                ], [
                    docsElements.tableCell(docsElements.inlineCode("%"), "CENTER"),
                    docsElements.tableCell("Modulus (Remainder)"),
                    docsElements.tableCell(docsElements.inlineCode("11 % 3 = 2"), "CENTER"),
                ], [
                    docsElements.tableCell(docsElements.inlineCode("**"), "CENTER"),
                    docsElements.tableCell("Exponentiation"),
                    docsElements.tableCell(docsElements.inlineCode("2 ** 3 = 8"), "CENTER"),
                ], [
                    docsElements.tableCell(docsElements.inlineCode("//"), "CENTER"),
                    docsElements.tableCell("Floor Division"),
                    docsElements.tableCell(docsElements.inlineCode("15 // 2 = 7"), "CENTER"),
                ]
            ])
"""

lines = """Operator	Description	Example
&	Bitwise AND	0b1010 & 0b011 = 0b0010
^	Bitwise XOR	0b1010 ^ 0b0110 = 0b1100
~	Bitwise NOT	~0b1010 = -11
<<	Left shift	0b1010 << 2 = 0b101000
>>	Right shift	0b1010 >> 1 = 0b0101""".split("\n")

table = []
for i,line in enumerate(lines):
    line = line.split("\t")
    # Cell
    if i > 0:
        table.append(
            f"[docsElements.tableCell(docsElements.inlineCode(\"{line[0]}\"), \"CENTER\"), docsElements.tableCell(\"{line[1]}\"), docsElements.tableCell(docsElements.inlineCode(\"{line[2]}\"), \"CENTER\")],")

    # Header
    else:
        table.append(f"[docsElements.tableHeader(\"{line[0]}\", \"CENTER\"), docsElements.tableHeader(\"{line[1]}\"), docsElements.tableHeader(\"{line[2]}\", \"CENTER\")],"),

table = "".join(table)
table = f"docsElements.table([{table}])"
print(table)
