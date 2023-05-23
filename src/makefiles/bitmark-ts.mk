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
.PHONY: build bitmark-ts

grammar_dir=./MiscBits/
ts_dir=./TypeScript/

bitmark_lexer_file=$(grammar_dir)/bitmarkLexer.g4
bitmark_parser_file=$(grammar_dir)/bitmarkParser.g4
js_files = bitmarkLexer.js bitmarkParser.js bitmarkListener.js

common_lexer_file=./MiscBits/common_lexer.g4
common_parser_file=./MiscBits/common_parser.g4

.DEFAULT_GOAL = bitmark-ts

bitmark-ts: $(bitmark_lexer_file) $(bitmark_parser_file) ./MiscBits/_bitmarkLexer.g4 ./MiscBits/_bitmarkParser.g4
	$(PYTHON_EXECUTABLE) ./tools/replace_parser_content.py ./MiscBits/_bitmarkLexer.g4 $(common_lexer_file) $(bitmark_lexer_file) '<<<<<<common<<<<<<'
	$(PYTHON_EXECUTABLE) ./tools/replace_parser_content.py ./MiscBits/_bitmarkParser.g4 $(common_parser_file) $(bitmark_parser_file) '<<<<<<common<<<<<<'
	$(NODE_MODULES)/antlr4ts-cli/antlr4ts $(ANTLR_OPT) $(bitmark_lexer_file);
	$(NODE_MODULES)/antlr4ts-cli/antlr4ts $(ANTLR_OPT) $(bitmark_parser_file);
	cp $(grammar_dir)*.ts $(ts_dir)
	$(PYTHON_EXECUTABLE) ./tools/addjs2import.py $(ts_dir)bitmark*.ts

clean:
	$(RM) $(js_files)

