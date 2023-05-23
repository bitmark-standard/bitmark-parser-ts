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
.PHONY: build ts

grammar_dir=./Interview/
ts_dir=./TypeScript/

interview_lexer_file=$(grammar_dir)interviewLexer.g4
interview_parser_file=$(grammar_dir)interviewParser.g4
js_files = interviewLexer.js interviewParser.js interviewListener.js

common_lexer_file=./MiscBits/common_lexer.g4
common_parser_file=./MiscBits/common_parser.g4

.DEFAULT_GOAL = interview-ts

interview-ts: $(common_lexer_file) $(common_parser_file) ./Interview/_interviewLexer.g4 ./Interview/_interviewParser.g4
	$(PYTHON_EXECUTABLE) ./tools/replace_parser_content.py ./Interview/_interviewLexer.g4 $(common_lexer_file) $(interview_lexer_file) '<<<<<<common<<<<<<'
	$(PYTHON_EXECUTABLE) ./tools/replace_parser_content.py ./Interview/_interviewParser.g4 $(common_parser_file) $(interview_parser_file) '<<<<<<common<<<<<<'
	$(NODE_MODULES)/antlr4ts-cli/antlr4ts $(ANTLR_OPT) $(interview_lexer_file);
	$(NODE_MODULES)/antlr4ts-cli/antlr4ts $(ANTLR_OPT) $(interview_parser_file);
	cp $(grammar_dir)*.ts $(ts_dir)
	$(PYTHON_EXECUTABLE) ./tools/addjs2import.py $(ts_dir)interview*.ts

clean:
	$(RM) $(js_files)

