#
# makefile
# Builds the bitmark parser source for Javascript bundle.
#
NODE_MODULES=../node_modules
PYTHON_EXECUTABLE=$(shell which python 2>/dev/null || which python3 2>/dev/null)

ANTLR4TS=$(NODE_MODULES)/antlr4ts
ANTLR_OPT=-Dlanguage=JavaScript -o ./
TYPESCRIPTCOMPILER=$(NODE_MODULES)/typescript/bin/tsc
RM=rm

BABEL_DIR=./babel
.PHONY: build cloze-ts

grammar_dir=./Cloze/
ts_dir=./TypeScript/

cloze_lexer_file=$(grammar_dir)clozeLexer.g4
cloze_parser_file=$(grammar_dir)clozeParser.g4
js_files = clozeLexer.js clozeParser.js clozeListener.js

common_lexer_file=./MiscBits/common_lexer.g4
common_parser_file=./MiscBits/common_parser.g4

.DEFAULT_GOAL = cloze-ts

cloze-ts: $(common_lexer_file) $(common_parser_file) ./Cloze/_clozeLexer.g4 ./Cloze/_clozeParser.g4
	$(PYTHON_EXECUTABLE) ./tools/replace_parser_content.py ./Cloze/_clozeLexer.g4 $(common_lexer_file) $(cloze_lexer_file) '<<<<<<common<<<<<<'
	$(PYTHON_EXECUTABLE) ./tools/replace_parser_content.py ./Cloze/_clozeParser.g4 $(common_parser_file) $(cloze_parser_file) '<<<<<<common<<<<<<'
	$(NODE_MODULES)/antlr4ts-cli/antlr4ts $(ANTLR_OPT) $(cloze_lexer_file);
	$(NODE_MODULES)/antlr4ts-cli/antlr4ts $(ANTLR_OPT) $(cloze_parser_file);
	cp $(grammar_dir)*.ts $(ts_dir)
	$(PYTHON_EXECUTABLE) ./tools/addjs2import.py $(ts_dir)cloze*.ts

clean:
	$(RM) $(js_files)

