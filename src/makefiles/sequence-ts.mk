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
.PHONY: build sequence-ts

grammar_dir=./Sequence/
ts_dir=./TypeScript/

sequence_lexer_file=$(grammar_dir)sequenceLexer.g4
sequence_parser_file=$(grammar_dir)sequenceParser.g4
js_files = sequenceLexer.js sequenceParser.js sequenceListener.js

common_lexer_file=./MiscBits/common_lexer.g4
common_parser_file=./MiscBits/common_parser.g4

.DEFAULT_GOAL = sequence-ts

sequence-ts: $(common_lexer_file) $(common_parser_file) ./Sequence/_sequenceLexer.g4 ./Sequence/_sequenceParser.g4
	$(PYTHON_EXECUTABLE) ./tools/replace_parser_content.py ./Sequence/_sequenceLexer.g4 $(common_lexer_file) $(sequence_lexer_file) '<<<<<<common<<<<<<'
	$(PYTHON_EXECUTABLE) ./tools/replace_parser_content.py ./Sequence/_sequenceParser.g4 $(common_parser_file) $(sequence_parser_file) '<<<<<<common<<<<<<'
	$(NODE_MODULES)/antlr4ts-cli/antlr4ts $(ANTLR_OPT) $(sequence_lexer_file);
	$(NODE_MODULES)/antlr4ts-cli/antlr4ts $(ANTLR_OPT) $(sequence_parser_file);
	cp $(grammar_dir)*.ts $(ts_dir)
	$(PYTHON_EXECUTABLE) ./tools/addjs2import.py $(ts_dir)sequence*.ts

clean:
	$(RM) $(js_files)

