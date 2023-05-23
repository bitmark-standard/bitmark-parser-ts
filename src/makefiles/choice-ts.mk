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
.PHONY: build choice-ts

grammar_dir=./Choice/
ts_dir=./TypeScript/

choice_lexer_file=$(grammar_dir)choiceLexer.g4
choice_parser_file=$(grammar_dir)choiceParser.g4
js_files = choiceLexer.js choiceParser.js choiceListener.js

common_lexer_file=./MiscBits/common_lexer.g4
common_parser_file=./MiscBits/common_parser.g4

.DEFAULT_GOAL = choice-ts

choice-ts: $(common_lexer_file) $(common_parser_file) ./Choice/_choiceLexer.g4 ./Choice/_choiceParser.g4
	$(PYTHON_EXECUTABLE) ./tools/replace_parser_content.py ./Choice/_choiceLexer.g4 $(common_lexer_file) $(choice_lexer_file) '<<<<<<common<<<<<<'
	$(PYTHON_EXECUTABLE) ./tools/replace_parser_content.py ./Choice/_choiceParser.g4 $(common_parser_file) $(choice_parser_file) '<<<<<<common<<<<<<'
	$(NODE_MODULES)/antlr4ts-cli/antlr4ts $(ANTLR_OPT) $(choice_lexer_file);
	$(NODE_MODULES)/antlr4ts-cli/antlr4ts $(ANTLR_OPT) $(choice_parser_file);
	cp $(grammar_dir)*.ts $(ts_dir)
	$(PYTHON_EXECUTABLE) ./tools/addjs2import.py $(ts_dir)choice*.ts

clean:
	$(RM) $(js_files)

