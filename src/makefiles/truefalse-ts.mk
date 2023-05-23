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
.PHONY: build truefalse-ts

grammar_dir=./Truefalse/
ts_dir=./TypeScript/

truefalse_lexer_file=$(grammar_dir)truefalseLexer.g4
truefalse_parser_file=$(grammar_dir)truefalseParser.g4
js_files = truefalseLexer.js truefalseParser.js truefalseListener.js

common_lexer_file=./MiscBits/common_lexer.g4
common_parser_file=./MiscBits/common_parser.g4

.DEFAULT_GOAL = truefalse-ts

truefalse-ts: $(common_lexer_file) $(common_parser_file) ./Truefalse/_truefalseLexer.g4 ./Truefalse/_truefalseParser.g4
	$(PYTHON_EXECUTABLE) ./tools/replace_parser_content.py ./Truefalse/_truefalseLexer.g4 $(common_lexer_file) $(truefalse_lexer_file) '<<<<<<common<<<<<<'
	$(PYTHON_EXECUTABLE) ./tools/replace_parser_content.py ./Truefalse/_truefalseParser.g4 $(common_parser_file) $(truefalse_parser_file) '<<<<<<common<<<<<<'
	$(NODE_MODULES)/antlr4ts-cli/antlr4ts $(ANTLR_OPT) $(truefalse_lexer_file);
	$(NODE_MODULES)/antlr4ts-cli/antlr4ts $(ANTLR_OPT) $(truefalse_parser_file);
	cp $(grammar_dir)*.ts $(ts_dir)
	$(PYTHON_EXECUTABLE) ./tools/addjs2import.py $(ts_dir)truefalse*.ts

clean:
	$(RM) $(js_files)

