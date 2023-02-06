from pprint import pprint
import json

def make_report(report: str) -> dict:
    report_json = dict()

    is_body = False

    lines = report.split("\n")
    lines = [x for x in lines if x.lower().strip() not in ["", "\"\"\"\"\""]]
    for line in lines:
        og_line = line.strip()
        line = line.lower().strip()

        if line.startswith("body:"):
            report_json["body"] = []
            is_body = True

        elif is_body:
            report_json["body"].append(line)

        elif line.find(":") != -1:
            line = line.split(":")
            report_json[line[0]] = "".join(og_line.split(":")[1:])

    return report_json

if __name__ == "__main__":
    report = make_report('''

ID: 612592630718
URL: https://www.hamen.tech/tutorials/python-course/python-strings/index.html
From: Danielhamen92@gmail.com
Submission Type: formatting-issue
IP: 72.138.54.206
Date: 2023/02/06 08:46:22

Body:
"""""
On the code blocks, the titles are bold, but since I'm on Dark Mode, the text is black (color not weight)
"""""
        ''')

    report = json.dumps(report)
    print(report)