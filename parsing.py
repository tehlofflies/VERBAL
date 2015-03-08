#! /usr/bin/python
#
# A program to analyze the text of Alice in Wonderland and do
# interesting things with the data.

from collections import Counter

def GetPhrases(text):
    array = []
    done = False
    tmp = ""
    i = 3
    inPhrase = False
    chars = (".", ",", "!", "?", ":", ";", '"', "\\", "*", "(", ")")
    while (not done):
        if inPhrase:
            if text[i:(i+3)] == "<BR":
                i = i + 4
            elif text[i:(i+3)] == "</P":
                for char in chars:
                    tmp = tmp.replace(char, "")
                tmp = tmp.replace("-", " ")
                tmp = tmp.replace("\n", " ")
                tmp = tmp.lower()
                array.append(tmp)
                tmp = ""
                inPhrase = False
                i = i + 3
            else:
                tmp += text[i]
                i = i + 1
        elif text[i:(i+3)] == 'T">':
            inPhrase = True
            i = i + 3
        elif text[i:(i+2)] == "ZY":
            done = True
        else:
            i = i + 1
    return array
def main():
    # Open the file, read it into memory as a single string.
    with open('tongue_twisters.txt') as phrases_file:
        phrases_text = phrases_file.read()
        phrases_file.close()

        output = open('foo.txt', "r+")
        thelist = GetPhrases(phrases_text)
        for item in thelist:
            output.write('"%s"\n,' % thelist)
if __name__ == '__main__':
  main()
