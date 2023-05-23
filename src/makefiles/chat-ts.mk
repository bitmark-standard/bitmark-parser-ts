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
.PHONY: build chat-ts

grammar_dir=./Chat/
ts_dir=./TypeScript/

chat_lexer_file=$(grammar_dir)chatLexer.g4
chat_parser_file=$(grammar_dir)chatParser.g4
js_files = chatLexer.js chatParser.js chatListener.js

common_lexer_file=./MiscBits/common_lexer.g4
common_parser_file=./MiscBits/common_parser.g4

.DEFAULT_GOAL = chat-ts

chat-ts: $(common_lexer_file) $(common_parser_file) ./Chat/_chatLexer.g4 ./Chat/_chatParser.g4
	$(PYTHON_EXECUTABLE) ./tools/replace_parser_content.py ./Chat/_chatLexer.g4 $(common_lexer_file) $(chat_lexer_file) '<<<<<<common<<<<<<'
	$(PYTHON_EXECUTABLE) ./tools/replace_parser_content.py ./Chat/_chatParser.g4 $(common_parser_file) $(chat_parser_file) '<<<<<<common<<<<<<'
	$(NODE_MODULES)/antlr4ts-cli/antlr4ts $(ANTLR_OPT) $(chat_lexer_file);
	$(NODE_MODULES)/antlr4ts-cli/antlr4ts $(ANTLR_OPT) $(chat_parser_file);
	cp $(grammar_dir)*.ts $(ts_dir)
	$(PYTHON_EXECUTABLE) ./tools/addjs2import.py $(ts_dir)chat*.ts

clean:
	$(RM) $(js_files)

