#
#  addjs2import.py
#
#  usage: python addjs2import.py ts-filenames
#
import re


def replace_import_filenames(filenames):
    for filename in filenames:
        with open(filename, "r+") as f1:        
            r = 'import\s\{\s(\w+)\s\}\sfrom "([\w/\.]+)";'
            text = f1.read()
            replaced = re.sub(r, 'import { \\1 } from "\\2.js";', text)
            r = '(import \* as Utils from "antlr4ts/misc/Utils)";'
            replaced = re.sub(r, '\\1.js";', replaced)
            f1.seek(0)
            f1.write(replaced)
            f1.truncate()




if __name__ == '__main__':
   import argparse
   parser = argparse.ArgumentParser(description='Adds ".js" to the import filenames in ts code')
   parser.add_argument('filenames', nargs='+', help='Path of a file or a folder of files.')
   args = parser.parse_args()
   print(args.filenames)
   replace_import_filenames(args.filenames)


