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
.PHONY: build match-ts

grammar_dir=./Match/
ts_dir=./TypeScript/

match_lexer_file=$(grammar_dir)matchLexer.g4
match_parser_file=$(grammar_dir)matchParser.g4
js_files = matchLexer.js matchParser.js matchListener.js

common_lexer_file=./MiscBits/common_lexer.g4
common_parser_file=./MiscBits/common_parser.g4

.DEFAULT_GOAL = match-ts

match-ts: $(common_lexer_file) $(common_parser_file) ./Match/_matchLexer.g4 ./Match/_matchParser.g4
	$(PYTHON_EXECUTABLE) ./tools/replace_parser_content.py ./Match/_matchLexer.g4 $(common_lexer_file) $(match_lexer_file) '<<<<<<common<<<<<<'
	$(PYTHON_EXECUTABLE) ./tools/replace_parser_content.py ./Match/_matchParser.g4 $(common_parser_file) $(match_parser_file) '<<<<<<common<<<<<<'
	$(NODE_MODULES)/antlr4ts-cli/antlr4ts $(ANTLR_OPT) $(match_lexer_file);
	$(NODE_MODULES)/antlr4ts-cli/antlr4ts $(ANTLR_OPT) $(match_parser_file);
	cp $(grammar_dir)*.ts $(ts_dir)
	$(PYTHON_EXECUTABLE) ./tools/addjs2import.py $(ts_dir)match*.ts

clean:
	$(RM) $(js_files)

