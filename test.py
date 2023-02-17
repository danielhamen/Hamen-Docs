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

lines = """Operator	Meaning
is	True if both variables point to the same object
is not	True if both variables do not point to the same object""".split("\n")

table = []
for i,line in enumerate(lines):
    line = line.split("\t")
    # Cell
    if i > 0:
        table.append(
            f"[docsElements.tableCell(docsElements.inlineCode(\"{line[0]}\"), \"CENTER\"), docsElements.tableCell(\"{line[1]}\")")

    # Header
    else:
        table.append(f"[docsElements.tableHeader(\"{line[0]}\", \"CENTER\"), docsElements.tableHeader(\"{line[1]}\")"),

table = "".join(table)
table = f"docsElements.table([{table}])"
print(table)
